import { View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PlusIco from '../../svg/PlusIco';
import SettingsScreen from '../../screens/Dashboard/SettingsScreen';
import HelpScreen from '../../screens/Dashboard/HelpScreen';
import AddNewScreen from '../../screens/Dashboard/AddNewScreen';
import ProfileScreen from '../../screens/Dashboard/ProfileScreen';
import CustomHeader from '../../components/header';
import HomeStack from '../../screens/Dashboard/HomeStack/HomeStack';

const Tab = createBottomTabNavigator();

export default function HomeTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: (props) => <CustomHeader {...props} />,

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
              iconName = focused ? 'home' : 'home';
              size = focused ? 24 : 20;
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
              size = focused ? 28 : 26;
            } else if (route.name === 'Help') {
              iconName = focused
                ? 'ios-help-circle'
                : 'ios-help-circle-outline';
              size = focused ? 28 : 26;
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
              size = focused ? 24 : 22;
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
      {/* cada screen deve possuir sua própria stack navigation */}
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="AddNew" component={AddNewScreen} />
      <Tab.Screen name="Help" component={HelpScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
