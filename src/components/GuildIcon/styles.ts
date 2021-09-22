import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 62,
    height: 66,
    backgroundColor: theme.colors.discord,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: 63,
    height: 67,
    borderRadius: 8,
  },
});
