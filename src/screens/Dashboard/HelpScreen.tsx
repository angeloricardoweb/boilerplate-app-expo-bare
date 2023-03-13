import { View, Text } from 'react-native';
import React from 'react';

import { useNavigate } from '../../hooks/useNavigate';

export default function HelpScreen() {
  const { navigate } = useNavigate();
  return (
    <View className="flex-1 justify-center">
      <Text className="align-center text-center">Help</Text>
    </View>
  );
}
