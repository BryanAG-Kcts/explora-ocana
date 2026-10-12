import { create } from 'zustand'
import type { Course, TeacherCourse } from '@/constants/pages/courses/courses'
import type { RouteProgress } from '@/constants/pages/home/home'
import type { LeaderboardUser } from '@/constants/pages/leaderboard/Leaderboard'
import type { UserStats } from '@/constants/pages/profile/profile'

interface Store {
  progress: RouteProgress | null
  getProgress: () => RouteProgress | null
  setProgress: (progress: RouteProgress) => void
  groups: TeacherCourse[] | null
  getGroups: () => TeacherCourse[] | null
  setGroups: (groups: TeacherCourse[]) => void
  userStats: UserStats | null
  getUserStats: () => UserStats | null
  setUserStats: (userStats: UserStats) => void
  courses: Course[] | null
  getCourses: () => Course[] | null
  setCourses: (courses: Course[]) => void
  leaderStudents: LeaderboardUser[] | null
  getLeaderStudents: () => LeaderboardUser[] | null
  setLeaderStudents: (leaderStudents: LeaderboardUser[]) => void
  leaderGrades: LeaderboardUser[] | null
  getLeaderGrades: () => LeaderboardUser[] | null
  setLeaderGrades: (leaderGrades: LeaderboardUser[]) => void
  clean: () => void
}
export const useGlobalState = create<Store>((set, get) => ({
  progress: null,
  getProgress: () => get().progress,
  setProgress: progress => set({ progress }),
  groups: null,
  getGroups: () => get().groups,
  setGroups: groups => set({ groups }),
  userStats: null,
  getUserStats: () => get().userStats,
  setUserStats: userStats => set({ userStats }),
  courses: null,
  getCourses: () => get().courses,
  setCourses: courses => set({ courses }),
  leaderStudents: null,
  getLeaderStudents: () => get().leaderStudents,
  setLeaderStudents: leaderStudents => set({ leaderStudents }),
  leaderGrades: null,
  getLeaderGrades: () => get().leaderGrades,
  setLeaderGrades: leaderGrades => set({ leaderGrades }),
  clean: () => {
    set({
      progress: null,
      groups: null,
      userStats: null,
      courses: null,
      leaderGrades: null,
      leaderStudents: null
    })
  }
}))
