import { View, Text } from 'react-native';
import React from 'react';
import { useNavigate } from '../../../hooks/useNavigate';
import ButtonPrimary from '../../../components/buttons/ButtonPrimary';
import Container from '../../../components/layout/Container';

export default function HomeScreen() {
  const { navigate } = useNavigate();
  return (
    <View className="flex-1 justify-center">
      <Text className="align-center text-center">Home Stack</Text>
      <Container>
        <ButtonPrimary
          handler={() => {
            navigate('HomeScreen2');
          }}
        >
          <Text className="align-center text-center">Go to Home Screen 2</Text>
        </ButtonPrimary>
      </Container>
    </View>
  );
}
