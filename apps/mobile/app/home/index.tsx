import {
  BarChartIcon,
  GraduationCapIcon,
  HomeIcon,
  UserCircleIcon
} from 'lucide-react-native'
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

const renderScene = SceneMap({
  home: Home,
  profile: Profile,
  leaderboard: Leaderboard,
  aiChat: AIChat,
  courses: StudentCourses,
  courses2: ProfessorCourses
})
const routes: TabRoute[] = [
  { key: 'home', iconComponent: HomeIcon },
  { key: 'leaderboard', iconComponent: BarChartIcon },
  { key: 'aiChat', iconComponent: BarChartIcon },
  { key: 'profile', iconComponent: UserCircleIcon },
  { key: 'courses', iconComponent: GraduationCapIcon },
  { key: 'courses2', iconComponent: GraduationCapIcon }
]

export default function Index() {
  return <CustomTab renderScene={renderScene} routes={routes} />
}
