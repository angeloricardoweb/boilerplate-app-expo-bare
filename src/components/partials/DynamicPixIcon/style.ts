import { StyleSheet } from 'react-native';
import { colors } from '../../../styles/colors';

export const styles = StyleSheet.create({
  icoWrapperActive: {
    width: 62,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryBlack,
  },
  icoWrapperInactive: {
    width: 62,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: colors.gray,
  },
  iconType: {
    color: colors.white,
    fontSize: 24,
  },
});
