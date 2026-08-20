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

export interface InfoBasicGroup {
  course_id: number,
  name: string,
  access_code: string,
}

export interface InfoStudentsGroup {
  name: string,
  last_name: string,
  completed_missions : number,
  progress: number | null
}

export interface InfoCompletedGroup {
  group_id: number,
  name: string,
  access_code: string,
  students : [{
    name: string,
    last_name: string,
    completed : number,
    total :  number
  }]
}

export interface listGroupTeacher {
  course_id: number,
  name : string,
  access_code: string,
  students_count: number
}

export const JoinGroupSchema = z.object({
  student_id: z.number().int().positive(),
  group_id: z.number().int().positive(),
  access_code: z
  .string()
  .toUpperCase()
  .trim()
  .length(4, "El código de acceso consta de 4 digitos")
  .regex(
    /^[A-Z]{2}[0-9]{2}$/,
  "El código consta de dos letras seguido de dos numeros"),
})

export type JoinGroupInterface = z.infer<typeof JoinGroupSchema>

export interface listGroupStudentSchool {
  course_id: number,
  name: string,
  teacher_name: string,
  teacher_last_name: string,
}

  

