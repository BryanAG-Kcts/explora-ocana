import type { Request, Response } from "express";
import { createGroupSchema, JoinGroupSchema } from "../interfaces/group.interface";
import { groupService } from "../services/group.service";
import { number, success } from "zod";


export const groupController = {
    postCreateGroup: async (req: Request, res: Response) => {
        try {
            const { teacher_id, name } = createGroupSchema.parse(req.body);
            const newGroup = await groupService.createGroup({ teacher_id, name } );
            res.status(201).json({ success: true, access_code: newGroup.access_code });
        } catch (error) {
            res.status(500).json({ success:false, message: 'Error al crear el grupo', error });
        }
        return
    },
    getInformationGroup: async (req: Request, res: Response) => {
        try{
            const group_id = Number(req.params) 
            const data =  await groupService.inforGroup(group_id)
            res.status(201).json({ success: true, data: data})
        }catch (error) {
            res.status(500).json({ success: false, message: 'Error al traer informacion de grupo', error });
        }
    },

    getListGroupTeacher: async (req: Request, res: Response) => {
        try {
            const teacher_id = Number(req.params)
            const data = await groupService.getTeacherGroups(teacher_id)
            res.status(200).json({ success: true, data : data})
        } catch (error) {
            res.status(500).json({ success: false, message: 'Error al traer lista de grupos', error });
        }
    },

    postInscribeGroup: async (req: Request, res: Response) => {
        try {
            const data = JoinGroupSchema.parse(req.body)
            await groupService.includeStudentGroup(data)
            res.status(201).json({ success: true, message: "Estudiante inscrito correctamente" });
        } catch (error) {
            if (error instanceof Error) {
                // Ambos mensajes son exactos los que se retornan desde group.service
                if (error.message === "Curso y contraseña no coinciden") {
                    res.status(401).json({
                    message: error.message
                    });
                    return;
                }
                if (error.message === "El estudiante ya hace parte de un curso") {
                    res.status(409).json({
                    message: error.message
                    });
                    return;
                }
            }
            res.status(500).json({ success: false, message: 'Error al inscribirse al curso', error });
        }
    },

    getListGroupByStudentSchool: async (req: Request, res: Response) => {
        try {
            const { student_id } = req.params;
            const studentId = Number(student_id);
            if (Number.isNaN(studentId)) {
                res.status(400).json({message: "El ID del estudiante debe ser un número válido"});
                return;
            } 
            const groups = await groupService.getGroupsByStudentSchool(studentId);
            res.status(200).json({success: true, data: groups});

        }catch (error) {
            res.status(500).json({ success: false, message: error });
        }
    }
}