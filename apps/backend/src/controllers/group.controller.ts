import { createGroupSchema } from "../interfaces/group.interface";
import { Request, Response } from "express";
import { groupService } from "../services/group.service";


export const groupController = {
    postCreateGroup: async (req: Request, res: Response) => {
        try {
            const { teacher_id, name } = createGroupSchema.parse(req.body);
            const newGroup = await groupService.createGroup({ teacher_id, name } );
            res.status(201).json({ success: true, access_code: newGroup.access_code });
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el grupo', error });
        }
        return
    }
}