/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <Una vez> */
import {
  BarChartIcon,
  GraduationCapIcon,
  HomeIcon,
  SparkleIcon,
  UserCircleIcon
} from 'lucide-react-native'
import { useEffect } from 'react'
import { SceneMap } from 'react-native-tab-view'
import AIChat from '@/components/global/aiChat'
import {
  CustomTab,
  type TabRoute
} from '@/components/global/customTab/customTab'
import { ProfessorCourses } from '@/components/pages/courses/professor/professorCourses'
import { StudentCourses } from '@/components/pages/courses/student/studentCourses'
import { Home } from '@/components/pages/home/home'
import { Leaderboard } from '@/components/pages/leaderboard/leaderboard'
import { Profile } from '@/components/pages/profile/profile'
import { useNotificationStore } from '@/constants/global/notificationStore'
import { useUserStore } from '@/hooks/userStore'

const renderScene = SceneMap({
  home: Home,
  profile: Profile,
  leaderboard: Leaderboard,
  aiChat: AIChat,
  studentCourses: StudentCourses,
  professorCourses: ProfessorCourses
})

export default function Index() {
  const { user } = useUserStore()
  const initializeNotifications = useNotificationStore(
    state => state.initialize
  )

  useEffect(() => {
    initializeNotifications()
  }, [])

  let routes: TabRoute[] = [
    { key: 'home', iconComponent: HomeIcon },
    { key: 'leaderboard', iconComponent: BarChartIcon },
    { key: 'aiChat', iconComponent: SparkleIcon },
    { key: 'profile', iconComponent: UserCircleIcon }
  ]

  if (user?.role === 'Estudiante') {
    routes = [
      { key: 'home', iconComponent: HomeIcon },
      { key: 'leaderboard', iconComponent: BarChartIcon },
      { key: 'aiChat', iconComponent: SparkleIcon },
      { key: 'studentCourses', iconComponent: GraduationCapIcon },
      { key: 'profile', iconComponent: UserCircleIcon }
    ]
  }

  if (user?.role === 'Docente') {
    routes = [
      { key: 'home', iconComponent: HomeIcon },
      { key: 'leaderboard', iconComponent: BarChartIcon },
      { key: 'aiChat', iconComponent: SparkleIcon },
      { key: 'professorCourses', iconComponent: GraduationCapIcon },
      { key: 'profile', iconComponent: UserCircleIcon }
    ]
  }

  return <CustomTab renderScene={renderScene} routes={routes} />
}
