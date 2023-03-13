import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/Account/LoginScreen';
import RegisterScreen from '../../screens/Account/RegisterScreen';
import HomeTabNavigation from '../HomeTabNavigation';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="LoginScreen"
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="HomeTabNavigation" component={HomeTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
