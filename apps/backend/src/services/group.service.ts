import type { CreateGroup, JoinGroupInterface } from "../interfaces/group.interface";
import { groupRepository } from "../repositories/group.repository";

export const groupService = {
  createGroup: async (data: CreateGroup) => {
    const groupExists = await groupRepository.findByTeacherAndName(
      data.teacher_id,
      data.name,
    );

    if (groupExists) {
      throw new Error("Ya existe un grupo con ese nombre para este docente.");
    }

    const access_code = generateAccessCode();
    // El código son 4 digitos: dos letras Mayúsculas seguido de dos numeros

    return await groupRepository.createGroup(
      data.teacher_id,
      data.name,
      access_code,
    );
  },

  inforGroup: async ( group_id: number) => {
    const [group, students, total_missions] = await Promise.all([
      groupRepository.getGroupInfo(group_id),
      groupRepository.getGroupStudents(group_id),
      groupRepository.getTotalMissions(),
    ]);

    for (const student of students) {
        student.progress =
            total_missions === 0
                ? null
                : Math.round(
                    (student.completed_missions / total_missions) * 100
                  );
    }
    return {
      ...group,
      students: [...students]
    }  
  },

  getTeacherGroups: async (teacher_id: number) => {
    const list_group = await groupRepository.getListGroupTeacher(teacher_id)
    if (!list_group) throw new Error('Lista de grupos por docente no generada')
    return list_group
  },

  includeStudentGroup: async (data: JoinGroupInterface): Promise<void> => {
    const student_status = await groupRepository.isStudentInGroup(data.student_id, data.group_id)
    if (student_status) throw new Error('El estudiante ya hace parte de un curso')

    const verify_access_code = await groupRepository.verifyGroupAccess(data.group_id, data.access_code)
    if (!verify_access_code) throw new Error('Curso y contraseña no coinciden')

    await groupRepository.joinGroup(data.student_id,  data.group_id)
  },

  getGroupsByStudentSchool: async (student_id: number) => {
    const groups = await groupRepository.getListGroupsStudentSchool(student_id);
    if(!groups) throw new Error ("Lista de grupos por institucion no generada")
    return groups;
  },
};

const generateAccessCode = (): string => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const randomLetter = () =>
    letters.charAt(Math.floor(Math.random() * letters.length));

  const randomNumber = () =>
    Math.floor(Math.random() * 10);

  return `${randomLetter()}${randomLetter()}${randomNumber()}${randomNumber()}`;
};