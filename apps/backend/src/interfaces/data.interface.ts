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