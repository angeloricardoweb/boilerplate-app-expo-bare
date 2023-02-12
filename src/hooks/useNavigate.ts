import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export function useNavigate() {
  return useNavigation() as NativeStackNavigationProp<any>;
}
