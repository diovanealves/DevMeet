import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type ListaTelas = {
  Welcome: undefined
  Main: undefined
  Events: { id: number }
  Details: { categoryId: number; eventId: number }
}

export type NavigationProps<T extends keyof ListaTelas> = {
  navigation: NativeStackNavigationProp<ListaTelas, T>
  route: RouteProp<ListaTelas, T>
}
