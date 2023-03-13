import { View, Text } from 'react-native';
import React from 'react';
import { useNavigate } from '../../../hooks/useNavigate';
import Container from '../../../components/layout/Container';
import ButtonPrimary from '../../../components/buttons/ButtonPrimary';

export default function HomeScreen2() {
  const { navigate } = useNavigate();
  return (
    <View className="flex-1 justify-center">
      <Text className="align-center text-center">Home screen 2</Text>
      <Container>
        <ButtonPrimary
          handler={() => {
            navigate('Profile');
          }}
        >
          <Text className="align-center text-center">Go to Profile Stack</Text>
        </ButtonPrimary>
      </Container>
    </View>
  );
}
