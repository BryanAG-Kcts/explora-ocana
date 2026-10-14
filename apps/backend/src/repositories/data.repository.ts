import type {
  PodioGrades,
  PodioStudent,
  SelectOption
} from '../interfaces/data.interface'
import { db } from '../services/pg.service'

export const dataRepository = {
  getCountries: async (): Promise<SelectOption[]> =>
    db.manyOrNone(`SELECT name AS label, country_id::TEXT AS value
                   FROM countries ORDER BY name ASC`),

  getDepartments: async (): Promise<SelectOption[]> =>
    db.manyOrNone(`SELECT INITCAP(name) AS label, department_id::TEXT AS value
                   FROM departments ORDER BY name ASC`),

  getMunicipalities: async (): Promise<SelectOption[]> =>
    db.manyOrNone(`SELECT name AS label, municipality_id::TEXT AS value, department_id::TEXT "departmentId"
                   FROM municipality ORDER BY name`),

  getCommunes: async (): Promise<SelectOption[]> =>
    db.manyOrNone(`SELECT commune_name AS label, commune_id::TEXT AS value
                   FROM communes ORDER BY commune_name ASC`),

  getNeighborhoods: async (): Promise<SelectOption[]> =>
    db.manyOrNone(`SELECT neighborhood_name AS label, neighborhood_id::TEXT AS value, commune_id::TEXT "communeId"
                   FROM neighborhoods ORDER BY neighborhood_name ASC`),

  getSchools: async (): Promise<SelectOption[]> =>
    db.manyOrNone(`SELECT name AS label, school_id::TEXT AS value
                   FROM schools ORDER BY name ASC`),

  getDocumentTypes: async (): Promise<SelectOption[]> =>
    db.manyOrNone(`SELECT code AS label, document_type_id::TEXT AS value
                   FROM document_types ORDER BY name ASC`),

  getEducationLevels: async (): Promise<SelectOption[]> =>
    db.manyOrNone(`SELECT name AS label, education_level_id::TEXT AS value
                   FROM education_levels ORDER BY name ASC`),
  getCommunities: async (): Promise<SelectOption[]> =>
    db.manyOrNone(`SELECT community_name AS label, community_id::TEXT AS value
                   FROM communities ORDER BY label ASC`),

  getPodioStudents: async (): Promise<PodioStudent[]> =>
    db.manyOrNone(
      `SELECT
        u.user_id id,
        u.name || ' ' || u.last_name "name",
        ue.experience_points xp,
        ue.streak_days streak
      FROM exploraocanna.student st
	    INNER JOIN exploraocanna.users u ON st.user_id = u.user_id 
      LEFT JOIN exploraocanna.user_experience ue ON u.user_id = ue.user_id
      ORDER BY ue.experience_points DESC, ue.last_activity, u.created_at
      LIMIT 15;`
    ),

  getPodioGrades: async (): Promise<PodioGrades[]> =>
    db.manyOrNone(
      `SELECT
           sc.school_id id,
       	   sc.name,
           SUM(ue.experience_points) AS xp
        FROM exploraocanna.student s
       	LEFT JOIN exploraocanna.user_experience ue ON ue.user_id = s.user_id
       	LEFT JOIN exploraocanna.schools sc ON sc.school_id = s.school_id
       GROUP BY sc.school_id, sc.name
       ORDER BY xp DESC
       LIMIT 15;`
    )
}
