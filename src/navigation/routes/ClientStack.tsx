import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeTabNavigation from '../HomeTabNavigation';
import HomeDrawerNavigation from '../HomeDrawerNavigation';

const Stack = createNativeStackNavigator();

export default function ClientStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen name="HomeTabNavigation" component={HomeTabNavigation} />
      <Stack.Screen
        name="HomeDrawerNavigation"
        component={HomeDrawerNavigation}
      />
    </Stack.Navigator>
  );
}
