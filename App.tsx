/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Epilogue_400Regular,
  Epilogue_500Medium,
  Epilogue_700Bold,
  Epilogue_800ExtraBold,
} from '@expo-google-fonts/epilogue'
import Welcome from './src/screens/Welcome'
import Loading from './src/components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    Epilogue_400Regular,
    Epilogue_500Medium,
    Epilogue_700Bold,
    Epilogue_800ExtraBold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <>
      <Welcome />
      <StatusBar backgroundColor="#282828" style="light" />
    </>
  )
}
