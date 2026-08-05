import { db } from '../services/pg.service'

export const groupRepository = {
    findByTeacherAndName: async (teacher_id: number, name: string) => {
        return await db.oneOrNone(
            "SELECT * FROM groups WHERE teacher_id = $1 AND name = $2",
            [teacher_id, name]
        );
    },

    createGroup: async (teacher_id: number, name: string, access_code: string) => {
        return await db.oneOrNone(
            "INSERT INTO groups (teacher_id, name, access_code) VALUES ($1, $2, $3) RETURNING *",
            [teacher_id, name, access_code]
        );
    }
}