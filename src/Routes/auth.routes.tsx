import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../Pages/Home'
import { SignIn } from '../Pages/SignIn'

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: 'transparent' } }}>
      <Screen name="SignIn" component={SignIn}></Screen>
      <Screen name="Home" component={Home}></Screen>
    </Navigator>
  )
}

