import { View, Text } from 'react-native'
import React from 'react'
import InfoContainer from '../../../components/layout/InfoContainer'
import ButtonSecondary from '../../../components/buttons/ButtonSecondary'
import ButtonPrimary from '../../../components/buttons/ButtonPrimary'
import Paragraph from '../../../components/typography/Paragraph'
import { useNavigation } from '@react-navigation/native'
import H2 from '../../../components/typography/H2'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useStatus } from '../../../stores/useStatus'

export default function PortabilityPixKey() {
  const { navigate } = useNavigation() as NativeStackNavigationProp<any>
  const { statusType } = useStatus()

  function handleGoToResult() {
    if (statusType.status == 'success') {
      navigate('InfoResult', { title: 'Portabilidade confirmada', msg: 'Sua chave Pix CPF **.777.888-** agora está disponível no PSP XYZ' })
    } else {
      navigate('InfoResult', { title: 'Portabilidade confirmada', msg: 'Sua chave Pix CPF **.777.888-** agora está disponível no PSP XYZ' })
    }

  }

  return (
    <InfoContainer>
      <View>
        <H2 align='center'>Portabilidade de chave solicitada</H2>
        <Paragraph>Recebemos o pedido de portabilidade da chave Pix CPF (**.777.888-**). Isso significa que o PSP ZYX registrou pedido em seu nome para que essa chave seja vinculada a outra conta. Para conclusão desse processo é necessária a sua confirmação em até 7 (sete) dias. Você confirma o pedido de portabilidade?</Paragraph>
      </View>
      <View>
        <ButtonSecondary handler={() => handleGoToResult()}>
          <Text>Confirmar Portabilidade</Text>
        </ButtonSecondary>
        <ButtonPrimary handler={() => navigate('HomeScreen')}>
          <Text>Manter no Boa Bank</Text>
        </ButtonPrimary>
      </View>
    </InfoContainer >
  )
}
