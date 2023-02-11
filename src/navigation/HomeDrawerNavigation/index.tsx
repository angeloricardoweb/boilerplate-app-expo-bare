import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import HomeTabNavigation from '../HomeTabNavigation';

function HomeScreen() {
  const { navigate } = useNavigation() as NativeStackNavigationProp<any>
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen() {
  const { goBack } = useNavigation()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function HomeDrawerNavigation() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeTabNavigation} />
      </Drawer.Navigator>
  );
}
