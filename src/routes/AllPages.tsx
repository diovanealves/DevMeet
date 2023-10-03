import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../screens/Welcome'
import Main from '../screens/Main'
import Events from '../screens/Events'

const Stack = createNativeStackNavigator()

export default function AllPages() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome as React.FC} />
        <Stack.Screen name="Main" component={Main as React.FC} />
        <Stack.Screen name="Events" component={Events as React.FC} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
