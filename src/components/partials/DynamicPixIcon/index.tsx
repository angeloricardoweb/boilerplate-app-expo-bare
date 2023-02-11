import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { View } from 'react-native';

interface DynamicPixIconProps {
  icon: "person" | "business" | "mail" | "call" | "key";
  active: boolean;
}

export default function DynamicPixIcon({ active, icon }: DynamicPixIconProps) {

  return (
    <View style={active ? styles.icoWrapperActive : styles.icoWrapperInactive}>
      <Ionicons name={icon} style={styles.iconType} />
    </View>
  )
}
