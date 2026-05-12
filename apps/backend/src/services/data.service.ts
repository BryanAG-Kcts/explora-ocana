import type { RegisterDataResponse } from '../interfaces/data.interface';
import { masterDataRepository } from '../repositories/data.repository';

export const masterDataService = {
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
      masterDataRepository.getCountries(),
      masterDataRepository.getDepartments(),
      masterDataRepository.getMunicipalities(),
      masterDataRepository.getCommunes(),
      masterDataRepository.getNeighborhoods(),
      masterDataRepository.getSchools(),
      masterDataRepository.getDocumentTypes(),
      masterDataRepository.getEducationLevels()
    ]);

    return { countries, departments, municipalities, communes, neighborhoods, schools, documentTypes, educationLevels };
  },
};