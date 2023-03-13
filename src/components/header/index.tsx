import React from 'react';
import { View, StatusBar, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import Container from '../layout/Container';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigate } from '../../hooks/useNavigate';

export default function CustomHeader(props: any) {
  const { goBack } = useNavigate();

  function handleGoBack() {
    goBack();
  }

  return (
    <LinearGradient
      colors={['#0a91c7', '#0a91c7']}
      start={[0.0, 0.5]}
      end={[1.0, 0.5]}
      locations={[0.0, 1.0]}
      style={{ marginBottom: 8 }}
    >
      <View>
        <Container>
          <View className="flex flex-row justify-between items-center h-16">
            <TouchableOpacity onPress={handleGoBack}>
              <Ionicons
                name="arrow-back-circle-sharp"
                size={24}
                color={colors.white}
              />
            </TouchableOpacity>
            <View className="flex flex-row justify-center align-center">
              <Image
                source={require('../../../assets/logo/logo.png')}
                resizeMode="contain"
                style={{ width: 40 }}
              />
            </View>
            <TouchableOpacity onPress={() => null}>
              <Ionicons
                name="information-circle-outline"
                size={24}
                color={colors.white}
              />
            </TouchableOpacity>
          </View>
        </Container>
      </View>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
    </LinearGradient>
  );
}
