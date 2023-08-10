import {DrawerNavigationOptions} from '@react-navigation/drawer';
import {Image, ImageSourcePropType} from 'react-native';
import {Images} from '../assets';
import {DrawerStrings} from '../constants';
import {horizontalScale, themeColors, verticalScale} from '../theme';
import {ThemeStyles} from '../types';

// Drawer Navigation Configurations
export const screenOptions = (
  appStyles: ThemeStyles,
): DrawerNavigationOptions => {
  const screenOptions: DrawerNavigationOptions = {
    headerShown: false,
    drawerType: 'front',
    drawerActiveBackgroundColor: appStyles.cardBackgroundColor,
    drawerActiveTintColor: themeColors.whiteColor,
    drawerInactiveTintColor: themeColors.mainColor,
    headerTintColor: themeColors.mainColor,
  };

  return screenOptions;
};

export const options = (appStyles: ThemeStyles): DrawerNavigationOptions => {
  const options: DrawerNavigationOptions = {
    title: DrawerStrings.homeScreenTitle,
    drawerLabelStyle: {
      paddingLeft: horizontalScale(-10),
      color: appStyles.backgroundColor,
      fontWeight: 'bold',
    },
    drawerIcon: () => myDrawerBarIcon(Images.houseIcon, appStyles),
  };
  return options;
};

const myDrawerBarIcon = (icon: ImageSourcePropType, appStyles: ThemeStyles) => (
  <Image
    source={icon}
    resizeMode="contain"
    style={{
      height: verticalScale(30),
      width: horizontalScale(38),
      tintColor: appStyles.backgroundColor,
    }}
  />
);
