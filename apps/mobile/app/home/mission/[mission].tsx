import { useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'

export default function Mission() {
  const { mission } = useLocalSearchParams()
  console.log(mission)

  return (
    <View>
      <Text>Mission</Text>
    </View>
  )
}
