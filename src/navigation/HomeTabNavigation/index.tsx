import { View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PlusIco from '../../svg/PlusIco';
import HomeScreen from '../../screens/Dashboard/HomeScreen';
import SettingsScreen from '../../screens/Dashboard/SettingsScreen';
import HelpScreen from '../../screens/Dashboard/HelpScreen';
import AddNewScreen from '../../screens/Dashboard/AddNewScreen';
import ProfileScreen from '../../screens/Dashboard/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function HomeTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'AddNew') {
            if ((iconName = focused)) {
              return (
                <View className="rounded-full items-center justify-center mb-10 bg-white w-16 h-16">
                  <PlusIco />
                </View>
              );
            } else {
              return (
                <View className="rounded-full items-center justify-center mb-10 bg-white w-16 h-16">
                  <PlusIco />
                </View>
              );
            }
          } else {
            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            } else if (route.name === 'Help') {
              iconName = focused
                ? 'ios-help-circle'
                : 'ios-help-circle-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            }
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#44b7e4',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#005586',
          borderTopColor: 'transparent',
          height: 60,
          paddingBottom: 10,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="AddNew" component={AddNewScreen} />
      <Tab.Screen name="Help" component={HelpScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
