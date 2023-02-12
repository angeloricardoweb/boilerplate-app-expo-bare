import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import { GlobalContextProvider } from './src/context/GlobalContextProvider';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import Loading from './src/components/Loading';
import LoginScreen from './src/screens/Account/LoginScreen';
import PixKeyAdd from './src/screens/Pix/PixKeyAdd';
import RegisterKeyConfirmation from './src/screens/Pix/PixKeyAdd/RegisterKeyConfirmation';
import Simulate from './src/components/simulate/Simulate';
import InfoResult from './src/screens/InfoResult/InfoResult';
import RegisterScreen from './src/screens/Account/RegisterScreen';
import PixKeyOptions from './src/screens/Pix/PixKeyOptions/PixKeyOptions';
import RemoveKeyConfirmation from './src/screens/Pix/PixKeyOptions/RemoveKeyConfirmation';
import MyPixKeys from './src/screens/Pix/MyPixKeys/MyPixKeys';
import PortabilityPixKey from './src/screens/Pix/PixKeyAdd/PortabilityPixKey';
import HomeTabNavigation from './src/navigation/HomeTabNavigation';
import 'react-native-gesture-handler';
import HomeDrawerNavigation from './src/navigation/HomeDrawerNavigation';
import MainStack from './src/navigation/routes/MainStack';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  })

  if (!fontsLoaded) {
    return (
      <Loading />
    )
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0A7A75" }}>
      <GlobalContextProvider>
        <View style={{ position: 'relative', flex: 1 }}>
          <MainStack />
        </View>
        <Simulate />
      </GlobalContextProvider>
      <StatusBar barStyle={"dark-content"} backgroundColor="transparent" translucent />
    </SafeAreaView>
  );
}
