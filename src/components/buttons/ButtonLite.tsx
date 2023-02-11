import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { ButtonProtocol } from './protocols'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';

export default function ButtonLite({ text, onPress }: {
  text: string,
  onPress: () => void
}) {
  return (
    <TouchableOpacity style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 8,
      paddingHorizontal: 16,
      backgroundColor: "#FFFFFF",
      shadowColor: "#000000",
      marginBottom: 8,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.15,
      shadowRadius: 1.0,
      elevation: 1,
      borderRadius: 12,
    }} onPress={onPress}>
      <Text
        style={{
          fontSize: 16,
          color: "#000000",
        }}
      >{text}</Text>
      <Ionicons name="arrow-forward-circle-sharp" style={{
        fontSize: 20,
        color: colors.primary,
      }} />
    </TouchableOpacity>
  )
}

