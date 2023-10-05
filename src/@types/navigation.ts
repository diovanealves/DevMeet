import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Events } from '../interface/Events'

export type ListaTelas = {
  Welcome: undefined
  Main: undefined
  Events: { events: Events[] }
}

export type NavigationProps<T extends keyof ListaTelas> = {
  navigation: NativeStackNavigationProp<ListaTelas, T>
  route: RouteProp<ListaTelas, T>
}
