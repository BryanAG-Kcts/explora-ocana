export interface SelectOption {
  label: string;
  value: number | string;
}

export interface RegisterDataResponse {
  countries:      SelectOption[];
  departments:    SelectOption[];
  municipalities: SelectOption[];
  communes:       SelectOption[];
  neighborhoods:  SelectOption[];
  schools:        SelectOption[];
  documentTypes:  SelectOption[];
  educationLevels: SelectOption[];
}

export interface PodioStudent {
  user_experience_id: number;
  name: string;
  last_name: string;
  experience_points: number;
  streak_days: number;
}

export interface PodioGrades {
  grade: string;
  total_experience_points: number; // acumulado de experience_points de los estudiantes por grado
}
