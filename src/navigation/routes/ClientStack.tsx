import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/Account/LoginScreen';
import RegisterScreen from '../../screens/Account/RegisterScreen';
import MyPixKeys from '../../screens/Pix/MyPixKeys/MyPixKeys';
import PixKeyOptions from '../../screens/Pix/PixKeyOptions/PixKeyOptions';
import RemoveKeyConfirmation from '../../screens/Pix/PixKeyOptions/RemoveKeyConfirmation';
import PixKeyAdd from '../../screens/Pix/PixKeyAdd';
import HomeScreen from '../../screens/HomeScreen';
import PortabilityPixKey from '../../screens/Pix/PixKeyAdd/PortabilityPixKey';
import DetailScreen from '../../screens/DetailScreen';
import RegisterKeyConfirmation from '../../screens/Pix/PixKeyAdd/RegisterKeyConfirmation';
import InfoResult from '../../screens/InfoResult/InfoResult';
import HomeTabNavigation from '../HomeTabNavigation';
import HomeDrawerNavigation from '../HomeDrawerNavigation';


const Stack = createNativeStackNavigator();


export default function ClientStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MyPixKeys" component={MyPixKeys} />
      <Stack.Screen name="PixKeyOptions" component={PixKeyOptions} />
      <Stack.Screen name="RemoveKeyConfirmation" component={RemoveKeyConfirmation} />
      <Stack.Screen name="PixKeyAdd" component={PixKeyAdd} />
      <Stack.Screen name="PortabilityPixKey" component={PortabilityPixKey} />
      <Stack.Screen name="detail" component={DetailScreen} />
      <Stack.Screen name="RegisterKeyConfirmation" component={RegisterKeyConfirmation} />
      <Stack.Screen name="InfoResult" component={InfoResult} />
      <Stack.Screen name="HomeTabNavigation" component={HomeTabNavigation} />
      <Stack.Screen name="HomeDrawerNavigation" component={HomeDrawerNavigation} />
    </Stack.Navigator>
  )
}
