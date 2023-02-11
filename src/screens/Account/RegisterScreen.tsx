import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView } from 'react-native'
import { colors } from './../../styles/colors';
import { useNavigation } from '@react-navigation/native';
import { formStyles, typography } from '../../styles/globalStyles';
import ButtonSecondary from '../../components/buttons/ButtonSecondary';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
export default function RegisterScreen() {
  const [text, onChangeText] = useState("");
  const [fullName, onChangeFullName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [phone, onChangePhone] = useState("");
  const [dateOfBirth, onChangeDateOfBirth] = useState("");
  const [password, onChangePassword] = useState("");
  const [confirmPassword, onChangeConfirmPassword] = useState("");

  const { navigate } = useNavigation() as NativeStackNavigationProp<any>;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <LinearGradient
        colors={["#12A19A", "#0C4F4B"]}
        start={[0.0, 0.5]}
        end={[1.0, 0.5]}
        locations={[0.0, 1.0]}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
          <ScrollView style={{ flex: 1, marginVertical: 32 }}>
            <View style={{ paddingHorizontal: 40 }}>
              <View>
                <Image
                  style={{
                    width: 90,
                    height: 60,
                    alignSelf: "center",
                  }}
                  source={require("../../../assets/logo/logo.png")}
                  resizeMode="contain"
                />
              </View>
              <View style={{ marginBottom: 32 }}>
                <Text style={typography.titleClean}>Registro</Text>
                <Text style={typography.subTitleClean}>Crie sua conta</Text>
              </View>
              <View style={formStyles.compactInputWrapper}>
                <FontAwesome name="user" size={24} color={colors.primaryBlack} />
                <TextInput
                  style={formStyles.compactInput}
                  onChangeText={onChangeText}
                  keyboardType="numeric"
                  maxLength={11}
                  value={text}
                  placeholder="CPF"
                />
              </View>
              <View style={[formStyles.compactInputWrapper, { marginTop: 8 }]}>
                <FontAwesome name="user" size={24} color={colors.primaryBlack} />
                <TextInput
                  style={formStyles.compactInput}
                  placeholder="Nome Completo"
                  onChangeText={onChangeFullName}
                  value={fullName}
                />
              </View>
              <View style={[formStyles.compactInputWrapper, { marginTop: 8 }]}>
              <MaterialIcons name="email" size={24} color={colors.primaryBlack} />
                <TextInput
                  style={formStyles.compactInput}
                  placeholder="E-mail"
                  onChangeText={onChangeEmail}
                  value={email}
                />
              </View>

              <View style={[formStyles.compactInputWrapper, { marginTop: 8 }]}>
                <FontAwesome name="lock" size={24} color={colors.primaryBlack} />
                <TextInput
                  style={formStyles.compactInput}
                  placeholder="Senha"
                  onChangeText={onChangePassword}
                  secureTextEntry={true}
                  maxLength={6}
                  value={password}
                />
              </View>
              <View style={[formStyles.compactInputWrapper, { marginTop: 8 }]}>
                <FontAwesome name="lock" size={24} color={colors.primaryBlack} />
                <TextInput
                  style={formStyles.compactInput}
                  placeholder="Confirmação de Senha"
                  onChangeText={onChangeConfirmPassword}
                  secureTextEntry={true}
                  maxLength={6}
                  value={confirmPassword}
                />
              </View>



              <View style={{ marginTop: 32 }}>
                <View style={{ marginTop: 16 }}>
                  <ButtonSecondary handler={() => { navigate('LoginScreen') }}>
                    Criar Conta
                  </ButtonSecondary>
                </View>
                <TouchableOpacity onPress={() => { navigate('LoginScreen') }}>
                  <Text style={{ color: '#fff' }}>Voltar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback >
      </LinearGradient>
    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  }
})
