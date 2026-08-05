import { z } from "zod";

export const createGroupSchema = z.object({
  teacher_id: z.number().int().positive(),

  name: z
    .string()
    .trim()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(50)
    .regex(
      /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 #-]+$/,
      "El nombre contiene caracteres no permitidos"
    )
});

export interface CreateGroup {
    teacher_id: number;
    name: string;
}

export interface Group {
    group_id: number;
    teacher_id: number;
    name: string;
    access_code: string;
}