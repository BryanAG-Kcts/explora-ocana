import type { Request, Response } from 'express';
import { masterDataService } from '../services/data.service';

export const masterDataController = {
  getAllMasterData: async (_req: Request, res: Response): Promise<void> => {
    try {
      const data = await masterDataService.getAllMasterData();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({message: 'Error al obtener datos maestros', error});
    }
  },
};