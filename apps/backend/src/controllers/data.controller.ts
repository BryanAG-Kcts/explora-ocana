import type { Request, Response } from 'express';
import { dataService } from '../services/data.service';

export const dataController = {
  getDataRegister: async (_req: Request, res: Response): Promise<void> => {
    try {
      const data = await dataService.getAllMasterData();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({message: 'Error al obtener datos maestros', error});
    }
  },

  getPodioStudents: async (_req: Request, res: Response): Promise<void> => {
    try {
      const data = await dataService.getPodioStudents();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({message: 'Error al obtener Podio de Estudiantes', error});
    }
  },
  
  getPodioGrades: async (_req: Request, res: Response): Promise<void> => {
    try {
      const data = await dataService.getPodioGrades();  
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({message: 'Error al obtener Podio de Grados', error});
    }
  }
};