import {StyleSheet} from 'react-native';
import {colors} from '../../config/theme';

export const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 40,
  },
});
