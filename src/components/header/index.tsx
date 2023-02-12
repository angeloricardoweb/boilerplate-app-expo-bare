import React from 'react'
import { View, Text, StatusBar, TouchableOpacity, Alert, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style'
import { colors } from '../../styles/colors';
import Container from '../layout/Container';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigate } from '../../hooks/useNavigate';

export default function CustomHeader(props: any) {
  const { navigate, goBack } = useNavigate();

  function handleGoBack() {
    goBack();
  }
  function showInfo() {
    Alert.alert('Boa Bank', 'App em desenvolvimento');
  }

  return (
    <LinearGradient
      colors={["#12A19A", "#0C4F4B"]}
      start={[0.0, 0.5]}
      end={[1.0, 0.5]}
      locations={[0.0, 1.0]}
      style={{ marginBottom: 8 }}
    >
      <View style={styles.container}>
        <Container>
          <View style={styles.wrapper}>
            <TouchableOpacity onPress={handleGoBack}>
              <Ionicons name="arrow-back-circle-sharp" size={24} color={colors.white} />
            </TouchableOpacity>
            <View>
              <Image
                style={styles.logo}
                source={require("../../../assets/logo/logo.png")}
                resizeMode="contain"
              />
            </View>
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
              <Ionicons name="menu" size={24} color={colors.white} />
            </TouchableOpacity>
          </View>
        </Container>
      </View>
      <StatusBar barStyle={"light-content"} backgroundColor="transparent" translucent />
    </LinearGradient>
  )
}
