import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useGlobal } from '../../context/GlobalContextProvider'
import InfoContainer from '../../components/layout/InfoContainer'
import H1 from '../../components/typography/H1'
import Paragraph from '../../components/typography/Paragraph'
import ButtonSecondary from '../../components/buttons/ButtonSecondary'
import ButtonPrimary from '../../components/buttons/ButtonPrimary'
import H2 from '../../components/typography/H2'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export default function InfoResult() {
  const { simulateState } = useGlobal()
  const { navigate, goBack } = useNavigation() as NativeStackNavigationProp<any>;
  const { msg, title } = useRoute().params as { msg: string, title: string }

  return (
    <InfoContainer>
      <View style={{ alignItems: 'center' }}>
        <H2 align='center'>{title}</H2>
        <View style={{ maxWidth: 220 }}>

          <Paragraph align='center'>
            {msg}
          </Paragraph>
        </View>
      </View>
      <View>
        {
          simulateState ? (
            <ButtonPrimary handler={() => navigate('HomeScreen')}>
              <Text>Entendi</Text>
            </ButtonPrimary>
          ) : (
            <>
              <ButtonSecondary handler={() => navigate('HomeScreen')}>
                <Text>Voltar para o início</Text>
              </ButtonSecondary>
              <ButtonPrimary handler={() => goBack()}>
                <Text>Tentar novamente</Text>
              </ButtonPrimary>
            </>
          )
        }

      </View>
    </InfoContainer>
  )
}
