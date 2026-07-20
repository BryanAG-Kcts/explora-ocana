import type { Request, Response } from "express";
import { userService } from "../services/user.service";

export const userController = {
  getProfileUser: async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const userId = Number(id);

      if (Number.isNaN(userId)) {
        res.status(400).json({
          message: "El ID del usuario debe ser un número válido"
        });
        return;
      }

      const userProfile = await userService.getProfileUser(userId);

      res.status(200).json(userProfile);
    } catch (error) {
      console.error("Error al obtener el perfil del usuario:", error);

      res.status(500).json({
        message: "Error interno del servidor"
      });
    }
  },

  getInformationUser: async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const userId = Number(id);

      if (Number.isNaN(userId)) {
        res.status(400).json({
          message: "El ID del usuario debe ser un número válido"
        });
        return;
      }

      const userProfile = await userService.getInformationUser(userId);

      res.status(200).json(userProfile);
    } catch (error) {
      console.error("Error al obtener la información del usuario:", error);

      res.status(500).json({
        message: "Error interno del servidor"
      });
    }
  }
};