import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

import { GlobalContextProvider } from './src/context/GlobalContextProvider';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from '@expo-google-fonts/inter';
import Loading from './src/components/Loading';

import 'react-native-gesture-handler';
import MainStack from './src/navigation/routes/MainStack';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0a91c7' }}>
      <GlobalContextProvider>
        <View className="relative flex-1">
          <MainStack />
        </View>
      </GlobalContextProvider>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
    </SafeAreaView>
  );
}
