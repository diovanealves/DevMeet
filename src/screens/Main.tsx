import { View, Text } from 'react-native'
import { NavigationProps } from '../@types/navigation'

export default function Main({ navigation }: NavigationProps<'Main'>) {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Main</Text>
    </View>
  )
}
