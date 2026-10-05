import type { InfoBasicGroup, InfoStudentsGroup, listGroupStudentSchool, listGroupTeacher } from '../interfaces/group.interface';
import { db } from '../services/pg.service'

export const groupRepository = {
    findByTeacherAndName: async (teacher_id: number, name: string) => {
        return await db.oneOrNone(
            "SELECT * FROM courses WHERE teacher_id = $1 AND name = $2",
            [teacher_id, name]
        );
    },

    createGroup: async (teacher_id: number, name: string, access_code: string) => {
        return await db.oneOrNone(
            "INSERT INTO courses(teacher_id, name, access_code) VALUES ($1, $2, $3) RETURNING *",
            [teacher_id, name, access_code]
        );
    },

    getGroupInfo: async (group_id: number): Promise<InfoBasicGroup | null> => {
        return await db.oneOrNone(
            `SELECT
                course_id,
                name,
                access_code
            FROM courses
            WHERE course_id = $1;`, [group_id]
        )
    },

    getGroupStudents: async (group_id: number): Promise<InfoStudentsGroup[]> =>
        db.manyOrNone(
            `select cs.*, us."name" || ' '|| us.last_name "name"
             from exploraocanna.course_students cs
             inner join exploraocanna.student st on cs.student_id = st.student_id
             inner join exploraocanna.users us on us.user_id = st.user_id
             WHERE course_id = $1
            `, [group_id]
        ),

    getTotalMissions: async () => 
        db.one(
            `SELECT COUNT(*) AS total_missions
            FROM missions;`,
        ),

    getListGroupTeacher: async (teacher_id: number): Promise<listGroupTeacher[]> => 
        db.manyOrNone(
            `SELECT
                c.course_id as id,
                c.name,
                c.access_code as "accessCode",
                COUNT(cs.course_student_id) AS "studentsCount"
            FROM courses c
            LEFT JOIN course_students cs ON cs.course_id = c.course_id
            WHERE c.teacher_id = $1
            GROUP BY c.course_id, c.name, c.access_code
            ORDER BY c.name DESC`, [teacher_id]
        ),
    
    verifyGroupAccess: async (group_id: number, access_code: string) =>
        db.oneOrNone(
            `SELECT
                course_id,
                name,
                access_code
            FROM courses
            WHERE course_id = $1
            AND access_code = $2;`,
            [group_id, access_code]
        ),
    
    isStudentInGroup: async (student_id: number, group_id: number) =>
        db.oneOrNone(
            `SELECT
                course_student_id,
                student_id,
                course_id,
                enrolled_at
            FROM course_students
            WHERE student_id = $1
            AND course_id = $2;`,
            [student_id, group_id]
        ),

    joinGroup: async (student_id: number, group_id: number) =>
        db.none(
            `INSERT INTO course_students
                (student_id, course_id)
            VALUES
                ($1, $2);`, [student_id, group_id]
        ),
        
    getListGroupsStudentSchool: async (student_id: number): Promise<listGroupStudentSchool[]> =>
        db.manyOrNone(
            `SELECT
                c.course_id id,
                c.name,
                u.name || ' ' || u.last_name "teacherName",
				count(cs.student_id) "existe"
            FROM exploraocanna.student s
            INNER JOIN exploraocanna.teacher t ON t.school_id = s.school_id
            INNER JOIN exploraocanna.courses c ON c.teacher_id = t.teacher_id
            INNER JOIN exploraocanna.users u ON u.user_id = t.user_id
			LEFT JOIN exploraocanna.course_students cs on cs.student_id = s.student_id and cs.course_id = c.course_id
            WHERE s.student_id = $1
			group by c.course_id, c.name, u.name || ' ' || u.last_name`, [student_id]
        )
    
}