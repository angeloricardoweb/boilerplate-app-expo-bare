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
import { useStatus } from '../../../stores/useStatus'

export default function RegisterKeyConfirmation() {
  const { navigate, goBack } = useNavigation() as NativeStackNavigationProp<any>
  const { statusType } = useStatus()

  function handleGoToResult() {
    if (statusType.status == 'server_error') {
      navigate('InfoResult', { title: 'Ops!', msg: 'Ocorreu um erro interno ao cadastrar sua chave, por favor, tente novamente mais tarde.' })
    }

    if (statusType.status == 'limited_by_time') {
      navigate('InfoResult', { title: 'Ops!', msg: 'Cadastro de chave pendente. Sua efetivação ocorrerá [“amanhã” para horário anterior a meia-noite e “hoje” para horário posterior] às 8:00 horas.' })
    }
    if (statusType.status == 'portability') {
      navigate('PortabilityPixKey')
    }
    else {
      navigate('InfoResult', { title: 'Sucesso', msg: 'Sua chave foi cadastrada com sucesso!' })
    }
  }

  return (
    <InfoContainer>
      <View>
        <H2 align='center'>Registrar chave Pix?</H2>
        <Paragraph>Ao registrar essa chave, os pagadores visualizarão os seguintes dados de quem vai receber:</Paragraph>
        <Paragraph>{`- Angelo Ricardo \n- **.777.888-** \n- Instituição XYZ`}</Paragraph>
        <Paragraph>Além disso, qualquer usuário com acesso ao seu e-mail e/ou número de telefone que você usar como chave PIX, poderá saber que você usou essa chave PIX.</Paragraph>
      </View>
      <View>
        <ButtonSecondary handler={() => goBack()}>
          <Text>Voltar</Text>
        </ButtonSecondary>
        <ButtonPrimary handler={handleGoToResult}>
          <Text>Registrar chave</Text>
        </ButtonPrimary>
      </View>
    </InfoContainer >
  )
}
