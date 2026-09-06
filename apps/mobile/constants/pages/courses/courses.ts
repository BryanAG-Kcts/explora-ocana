export interface Course {
  id: string
  name: string
  teacherName: string
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
