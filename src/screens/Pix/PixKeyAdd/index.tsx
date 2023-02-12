import { View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Container from '../../../components/layout/Container'
import H2 from '../../../components/typography/H2'
import { useNavigation, useRoute } from '@react-navigation/native'
import DynamicPixIcon from '../../../components/partials/DynamicPixIcon'
import CardContainer from '../../../components/layout/CardContainer'
import ButtonSecondary from './../../../components/buttons/ButtonSecondary';
import { formStyles } from '../../../styles/globalStyles'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useStatus } from '../../../stores/useStatus'
import useShowSimulator from '../../../stores/useShowSimulator'



export default function PixKeyAdd() {
  const { type } = useRoute().params as any
  const [text, onChangeText] = useState("");
  const { navigate } = useNavigation() as NativeStackNavigationProp<any>;
  const [icon, setIcon] = useState<any>("");
  const [name, setName] = useState<any>("");
  const [keyboardType, setKeyboardType] = useState<any>("");

  const { showSimulator } = useShowSimulator()
  const { setStatus } = useStatus()

  useEffect(() => {
    switch (type) {
      case "cpf":
        setIcon("person");
        setName("CPF");
        setKeyboardType("numeric");
        break;
      case "cnpj":
        setIcon("business");
        setName("CNPJ");
        setKeyboardType("numeric");
        break;
      case "email":
        setIcon("mail");
        setName("E-mail");
        setKeyboardType("email-address");
        break;
      case "telefone":
        setIcon("call");
        setName("Telefone");
        setKeyboardType("phone-pad");
        break;
      case "aleatorio":
        setIcon("key");
        setName("Aleatório");
        break;
    }

  }, [])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, justifyContent: 'space-between' }}
    >
      <ScrollView style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <View style={{ justifyContent: 'center' }}>
              <H2 align='center'>Chave {name}</H2>
            </View>
            <View style={{ alignItems: 'center' }}>
              <DynamicPixIcon icon={icon} active={true} />
            </View>

            <CardContainer>
              <H2>Digite o número abaixo</H2>
              <TextInput
                style={formStyles.input}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                value={text}
              />
            </CardContainer>

            <View style={{ marginTop: 8 }}>
              <ButtonSecondary handler={() => navigate("RegisterKeyConfirmation")}>
                Continuar
              </ButtonSecondary>
              {
                showSimulator && (
                  <>
                    <Button onPress={() => {
                      setStatus({
                        status: 'success'
                      })
                    }} title="Simular Sucesso" />
                    <Button onPress={() => {
                      setStatus({
                        status: 'server_error'
                      })
                    }} title="Simular Erro no servidor" />
                    <Button onPress={() => {
                      setStatus({
                        status: 'limited_by_time'
                      })
                    }} title="Simular Fora do horário" />
                    <Button onPress={() => {
                      setStatus({
                        status: 'portability'
                      })
                    }} title="Simular Portabilidade" />
                  </>
                )
              }
            </View>
          </Container>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
