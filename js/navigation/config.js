import { colors } from '../config/styles';

export const sharedNavigationOptions = () => ({
  headerBackTitle: null,
  headerStyle: {
    backgroundColor: colors.primary,
    height: 65,
  },
  headerTintColor: colors.white,
  headerTitleStyle: {
    fontSize: 40,
  },
});
