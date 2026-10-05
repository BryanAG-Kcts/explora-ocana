export interface Course {
  id: string
  name: string
  teacherName: string
  existe: "1" | "0"
}

export interface StudentProgress {
  id: string
  name: string
  progress: number
}

export interface TeacherCourse {
  id: string
  name: string
  accessCode: string
  studentsCount: number
}
