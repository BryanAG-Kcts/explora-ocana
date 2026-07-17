import type { PodioGrades, PodioStudent, RegisterDataResponse } from '../interfaces/data.interface';
import { dataRepository } from '../repositories/data.repository';

export const dataService = {
  getAllMasterData: async (): Promise<RegisterDataResponse> => {
    const [
      countries,
      departments,
      municipalities,
      communes,
      neighborhoods,
      schools,
      documentTypes,
      educationLevels
    ] = await Promise.all([
      dataRepository.getCountries(),
      dataRepository.getDepartments(),
      dataRepository.getMunicipalities(),
      dataRepository.getCommunes(),
      dataRepository.getNeighborhoods(),
      dataRepository.getSchools(),
      dataRepository.getDocumentTypes(),
      dataRepository.getEducationLevels()
    ]);

    return { countries, departments, municipalities, communes, neighborhoods, schools, documentTypes, educationLevels };
  },

  getPodioStudents: async (): Promise<PodioStudent[]> => {
    const topStudents = await dataRepository.getPodioStudents();
    return topStudents; 
  },
  // Aqui es posible que se necesite un servicio adicional como:
  // ├── Filtrar usuarios activos
  // ├── Excluir usuarios eliminados
  // ├── Calcular posición
  // ├── Añadir recompensa
  // └── Transformar datos

  getPodioGrades: async (): Promise<PodioGrades[]> => {
    const grades = await dataRepository.getPodioGrades();
    return grades;
  }
};