import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useState, useEffect } from 'react'

import Main from '../screens/Main'
import WelcomeScreen from '../screens/Welcome'
import { hasShownWelcomeScreen } from '../utils/AsyncStorageUtils'

const Tab = createNativeStackNavigator()

export default function Routes() {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState<boolean>(true)

  useEffect(() => {
    hasShownWelcomeScreen().then((shown) => {
      setShowWelcomeScreen(!shown)
    })
  }, [])

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={showWelcomeScreen ? 'Welcome' : 'Main'}>
        {showWelcomeScreen ? (
          <Tab.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <Tab.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  )
}
