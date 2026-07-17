import { db } from "../services/pg.service";
import type {
  PodioGrades,
  PodioStudent,
  SelectOption,
} from "../interfaces/data.interface";

export const dataRepository = {
  getCountries: async (): Promise<SelectOption[]> =>
    db.manyOrNone(`SELECT name AS label, country_id AS value
                   FROM countries ORDER BY name ASC`),

  getDepartments: async (): Promise<SelectOption[]> =>
    db.manyOrNone(`SELECT name AS label, department_id AS value
                   FROM departments ORDER BY name ASC`),

  getMunicipalities: async (): Promise<SelectOption[]> =>
    db.manyOrNone(`SELECT name AS label, municipality_id AS value
                   FROM municipality ORDER BY name ASC`),

  getCommunes: async (): Promise<SelectOption[]> =>
    db.manyOrNone(`SELECT commune_name AS label, commune_id AS value
                   FROM communes ORDER BY commune_name ASC`),

  getNeighborhoods: async (): Promise<SelectOption[]> =>
    db.manyOrNone(`SELECT neighborhood_name AS label, neighborhood_id AS value
                   FROM neighborhoods ORDER BY neighborhood_name ASC`),

  getSchools: async (): Promise<SelectOption[]> =>
    // No sé si debo retornar también el school_id
    db.manyOrNone(`SELECT name AS label, type AS value
                   FROM schools ORDER BY name ASC`),

  getDocumentTypes: async (): Promise<SelectOption[]> =>
    db.manyOrNone(`SELECT name AS label, code AS value
                   FROM document_types ORDER BY name ASC`),

  getEducationLevels: async (): Promise<SelectOption[]> =>
    db.manyOrNone(`SELECT name AS label, code AS value
                   FROM education_levels ORDER BY name ASC`),

  getPodioStudents: async (): Promise<PodioStudent[]> =>
    db.manyOrNone(
      `SELECT
        ue.user_experience_id,
        u.name,
        u.last_name,
        ue.experience_points,
        ue.streak_days
      FROM exploraocanna.user_experience ue
      JOIN exploraocanna.users u ON u.user_id = ue.user_id
      ORDER BY ue.experience_points DESC
      LIMIT 5;`
    ),

  getPodioGrades: async (): Promise<PodioGrades[]> =>
    db.manyOrNone(
      `SELECT
        s.grade,
        SUM(ue.experience_points) AS total_experience_points
      FROM exploraocanna.student s
      JOIN exploraocanna.user_experience ue ON ue.user_id = s.user_id
      GROUP BY s.grade
      ORDER BY total_experience_points DESC
      LIMIT 3;`
    ),
};
