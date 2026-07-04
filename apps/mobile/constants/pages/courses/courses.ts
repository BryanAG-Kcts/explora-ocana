export interface Course {
  id: string
  name: string
  teacherName: string
}

export const COURSES: Course[] = [
  { id: '1', name: 'Matemáticas Avanzadas', teacherName: 'Prof. García' },
  { id: '2', name: 'Física Cuántica', teacherName: 'Dra. Méndez' },
  { id: '3', name: 'Programación React Native', teacherName: 'Ing. López' }
]

interface StudentProgress {
  id: string
  name: string
  progress: number
}

export interface TeacherCourse {
  id: string
  name: string
  enrollmentKey: string
  students: StudentProgress[]
}

export const INITIAL_GROUPS: TeacherCourse[] = [
  {
    id: '1',
    name: 'Matemáticas Avanzadas',
    enrollmentKey: 'MAT-2026-X',
    students: [
      { id: 's1', name: 'Ana Silva', progress: 85 },
      { id: 's2', name: 'Carlos Ruiz', progress: 40 },
      { id: 's3', name: 'María Gómez', progress: 100 }
    ]
  }
]
