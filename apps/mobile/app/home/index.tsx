import { SceneMap } from 'react-native-tab-view'
import AIChat from '@/components/global/aiChat'
import { CustomTab } from '@/components/global/customTab/customTab'
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
const routes = [
  { key: 'home', title: 'Home' },
  { key: 'leaderboard', title: 'Clasificación' },
  { key: 'aiChat', title: 'Chat IA' },
  { key: 'profile', title: 'Perfil' },
  { key: 'courses', title: 'Cursos' },
  { key: 'courses2', title: 'Cursos' }
]

export default function Index() {
  return <CustomTab renderScene={renderScene} routes={routes} />
}
