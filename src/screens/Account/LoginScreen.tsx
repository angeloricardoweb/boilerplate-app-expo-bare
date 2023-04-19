import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { colors } from './../../styles/colors';
import { FontAwesome } from '@expo/vector-icons';
import { formStyles, typography } from '../../styles/globalStyles';
import ButtonSecondary from '../../components/buttons/ButtonSecondary';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigate } from '../../hooks/useNavigate';
import Constants from 'expo-constants';
import OneSignal from 'react-native-onesignal';

export default function LoginScreen() {
  const [text, onChangeText] = useState('');
  const [password, onChangePassword] = useState('');

  const { navigate } = useNavigate();

  const navigateToHome = () => {
    navigate('HomeTabNavigation');
  }
  
  //  Inicializa o OneSignal e solicita permissão
  OneSignal.setAppId('c249abd0-db09-4931-a748-6840807025d5')
  OneSignal.promptForPushNotificationsWithUserResponse()

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <LinearGradient
        colors={['#0a91c7', '#0a91c7']}
        start={[0.0, 0.5]}
        end={[1.0, 0.5]}
        locations={[0.0, 1.0]}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{ flex: 1, justifyContent: 'center', marginVertical: 32 }}
          >
            <View style={{ paddingHorizontal: 40 }}>
              <View>
                <View>
                  <Text>Version Name: {Constants.manifest?.version}</Text>
                  <Text>Version Code: {Constants.manifest?.android?.versionCode}</Text>
                </View>
                <Image
                  style={{
                    width: 90,
                    height: 60,
                    alignSelf: 'center',
                  }}
                  source={require('../../../assets/logo/logo.png')}
                  resizeMode="contain"
                />
              </View>
              <View style={{ marginBottom: 32 }}>
                <Text style={typography.titleClean}>Bem-vindo de volta</Text>
                <Text style={typography.subTitleClean}>Logar na sua conta</Text>
              </View>
              <View style={formStyles.compactInputWrapper}>
                <FontAwesome
                  name="user"
                  size={24}
                  color={colors.primaryBlack}
                />
                <TextInput
                  style={formStyles.compactInput}
                  onChangeText={onChangeText}
                  keyboardType="numeric"
                  maxLength={11}
                  value={text}
                  placeholder="CPF"
                />
              </View>

              <View style={{ marginTop: 8, marginBottom: 32 }}>
                <View style={formStyles.compactInputWrapper}>
                  <FontAwesome
                    name="lock"
                    size={24}
                    color={colors.primaryBlack}
                  />
                  <TextInput
                    style={formStyles.compactInput}
                    onChangeText={onChangePassword}
                    secureTextEntry={true}
                    maxLength={6}
                    value={password}
                    placeholder="Senha"
                  />
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={{ paddingHorizontal: 40, marginBottom: 40 }}>
          <ButtonSecondary handler={navigateToHome}>Entrar</ButtonSecondary>
          <TouchableOpacity
            onPress={() => {
              navigate('RegisterScreen');
            }}
          >
            <Text style={{ color: '#fff' }}>Abrir Conta</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
