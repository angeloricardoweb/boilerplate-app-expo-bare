import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import H1 from '../components/typography/H1'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function DetailScreen() {
  const { navigate } = useNavigation() as NativeStackNavigationProp<any>;

  return (
    <View>
      <Text>Detail</Text>
      <TouchableOpacity onPress={() => navigate('LoginScreen')}>
        <H1>Go to Home</H1>
      </TouchableOpacity>
    </View>
  )
}
