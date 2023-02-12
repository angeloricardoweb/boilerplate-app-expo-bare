import { Text, View, TouchableOpacity } from 'react-native'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { colors } from '../../../styles/colors';
import { useNavigate } from '../../../hooks/useNavigate';

export function CustomDrawerContent(props: any) {
  const { navigate } = useNavigate();

  return (
    <DrawerContentScrollView {...props}
      style={{ backgroundColor: colors.primaryBlack, flex: 1 }}
    >
      {/* <DrawerItemList {...props} /> */}
      <View style={{ padding: 40 }}>
        <Text style={{ color: '#fff' }}>Sou um Custom Drawer</Text>
        <TouchableOpacity onPress={() => navigate('HomeTabNavigation')}>
          <Text style={{ color: '#fff' }}>Home tabs</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('SettingsScreen')}>
          <Text style={{ color: '#fff' }}>Configurações</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('NotificationsScreen')}>
          <Text style={{ color: '#fff' }}>Notificações</Text>
        </TouchableOpacity>
        {/* <DrawerItem label="Help" onPress={() => alert('Link to help')} /> */}
      </View>
    </DrawerContentScrollView>
  );
}
