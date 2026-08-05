import { CreateGroup } from "../interfaces/group.interface";
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

    return await groupRepository.createGroup(
      data.teacher_id,
      data.name,
      access_code,
    );
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