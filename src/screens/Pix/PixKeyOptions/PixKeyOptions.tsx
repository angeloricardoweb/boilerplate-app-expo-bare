import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderPage from '../../../components/header'
import Container from '../../../components/layout/Container'
import H2 from '../../../components/typography/H2'
import DynamicPixIcon from '../../../components/partials/DynamicPixIcon'
import CardContainer from '../../../components/layout/CardContainer'
import H3 from '../../../components/typography/H3'
import { colors } from '../../../styles/colors'
import ButtonLiten from '../../../components/buttons/ButtonLite'
import ButtonLite from '../../../components/buttons/ButtonLite'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export default function PixKeyOptions() {
  const { navigate } = useNavigation() as NativeStackNavigationProp<any>;
  return (
    <View>
      <HeaderPage />
      <Container>
        <View style={{ justifyContent: 'center' }}>
          <H2 align='center'>Chave E-mail</H2>
        </View>
        <View style={{ alignItems: 'center', marginVertical: 16 }}>
          <DynamicPixIcon icon={'mail'} active={true} />
        </View>
        <CardContainer>
          <H3>Opções</H3>
          <ButtonLite
            text='Remover chave'
            onPress={() => {
              navigate('RemoveKeyConfirmation')
            }} />
          <ButtonLite
            text='Copiar Chave'
            onPress={() => {
            }} />
        </CardContainer>
      </Container>
    </View>
  )
}
