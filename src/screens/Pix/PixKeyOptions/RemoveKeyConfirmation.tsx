import { View, Text } from 'react-native'
import React from 'react'
import InfoContainer from '../../../components/layout/InfoContainer'
import ButtonSecondary from '../../../components/buttons/ButtonSecondary'
import ButtonPrimary from '../../../components/buttons/ButtonPrimary'
import Paragraph from '../../../components/typography/Paragraph'
import { useNavigation } from '@react-navigation/native'
import { useGlobal } from '../../../context/GlobalContextProvider'
import H2 from '../../../components/typography/H2'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

export default function RemoveKeyConfirmation() {
  const { simulateState } = useGlobal()
  const { navigate, goBack } = useNavigation() as NativeStackNavigationProp<any>

  function handleGoToResult() {
    if (simulateState) {
      navigate('InfoResult', {
        title: 'Exclusão em andamento', msg: 'Aguarde, você receberá uma mensagem confirmando a exclusão da sua chave. A efetivação da exclusão é realizada durante o horário de funcionamento do DICT.'
      })
    } else {
      navigate('InfoResult', { title: 'Ops!', msg: 'Ocorreu um erro interno ao cadastrar sua chave, por favor, tente novamente mais tarde.' })
    }
  }

  return (
    <InfoContainer>
      <View>
        <H2 align='center'>Excluir chave Pix?</H2>
        <Paragraph>Ao confirmar, você não poderá receber mais pagamentos para essa chave Pix.</Paragraph>
      </View>
      <View>
        <ButtonSecondary handler={handleGoToResult}>
          <Text>Excluir chave</Text>
        </ButtonSecondary>
        <ButtonPrimary handler={() => goBack()}>
          <Text>Manter chave</Text>
        </ButtonPrimary>
      </View>
    </InfoContainer >
  )
}
