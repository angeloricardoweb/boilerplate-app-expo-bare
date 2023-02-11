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
          <NavigationContainer >
            <Stack.Navigator screenOptions={{
              headerShown: false,
            }}
              initialRouteName="login"
            >
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              <Stack.Screen name="MyPixKeys" component={MyPixKeys} />
              <Stack.Screen name="PixKeyOptions" component={PixKeyOptions} />
              <Stack.Screen name="RemoveKeyConfirmation" component={RemoveKeyConfirmation} />
              <Stack.Screen name="PixKeyAdd" component={PixKeyAdd} />
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="PortabilityPixKey" component={PortabilityPixKey} />
              <Stack.Screen name="detail" component={DetailScreen} />
              <Stack.Screen name="RegisterKeyConfirmation" component={RegisterKeyConfirmation} />
              <Stack.Screen name="InfoResult" component={InfoResult} />
              <Stack.Screen name="HomeTabNavigation" component={HomeTabNavigation} />
              <Stack.Screen name="HomeDrawerNavigation" component={HomeDrawerNavigation} />

            </Stack.Navigator>
          </NavigationContainer>
        </View>
        <Simulate />
      </GlobalContextProvider>
      <StatusBar barStyle={"dark-content"} backgroundColor="transparent" translucent />
    </SafeAreaView>
  );
}
