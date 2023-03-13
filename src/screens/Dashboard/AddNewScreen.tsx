import { View, Text } from 'react-native';
import React from 'react';
import ButtonSecondary from '../../components/buttons/ButtonSecondary';
import Container from '../../components/layout/Container';

import { useNavigate } from '../../hooks/useNavigate';

export default function AddNewScreen() {
  const { navigate } = useNavigate();
  return (
    <View className="flex-1 justify-center">
      <Text className="align-center text-center">Add new</Text>
    </View>
  );
}
