import {StackNavigationOptions} from '@react-navigation/stack';
import {
  ChangePasswordStrings,
  DrawerStrings,
  NotificationStrings,
  SearchStrings,
  StackStrings,
  UserDetailsStrings,
  VideoScreenStrings,
} from '../constants';
import {themeColors} from '../theme';

interface StackNavigationOps {
  screenOptions: StackNavigationOptions;
  updateProfileOptions: StackNavigationOptions;
  userDetailsOptions: StackNavigationOptions;
  videoDetailsOptions: StackNavigationOptions;
  settingsScreenOptions: StackNavigationOptions;
  changePasswordOptions: StackNavigationOptions;
  notificationScreenOptions: StackNavigationOptions;
}

// Stack Navigation Configurations
export const stackNavigationOptions: StackNavigationOps = {
  screenOptions: {
    orientation: 'portrait',
    headerShown: false,
  },
  userDetailsOptions: {
    headerShown: true,
    headerBackTitle: 'Back',
    headerBackTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitle: UserDetailsStrings.userDetailsTitle,
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTintColor: themeColors.secondaryColor,
  },
  videoDetailsOptions: {
    headerShown: true,
    headerBackTitle: 'Back',
    headerBackTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitle: VideoScreenStrings.videoPlayerTitle,
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTintColor: themeColors.secondaryColor,
  },
  settingsScreenOptions: {
    headerShown: true,
    headerBackTitle: 'Back',
    headerBackTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitle: DrawerStrings.settingsTitle,
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTintColor: themeColors.secondaryColor,
  },
  changePasswordOptions: {
    headerShown: true,
    headerBackTitle: 'Back',
    headerBackTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitle: ChangePasswordStrings.changePasswordTitle,
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTintColor: themeColors.secondaryColor,
  },
  notificationScreenOptions: {
    headerShown: true,
    headerBackTitle: 'Back',
    headerBackTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitle: NotificationStrings.notificationTitle,
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTintColor: themeColors.secondaryColor,
  },
  searchResultsOptions: {
    headerShown: true,
    headerTitle: SearchStrings.searchResults,
    headerBackTitle: StackStrings.homeScreenTitle,
    headerTintColor: themeColors.mainColor,
    headerBackTitleStyle: {
      color: themeColors.mainColor,
      fontWeight: 'bold',
    },
  },
};
