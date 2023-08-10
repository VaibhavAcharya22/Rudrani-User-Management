import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, ImageSourcePropType, StyleProp, TextStyle} from 'react-native';
import {Images} from '../assets';
import {TabNavigationStrings} from '../constants';
import {horizontalScale, moderateScale, verticalScale} from '../theme';
import {ThemeStyles} from '../types';

const myTabBarLabelStyle: StyleProp<TextStyle> = {
  paddingBottom: verticalScale(5),
  marginTop: verticalScale(-10),
  fontWeight: 'bold',
};

export const tabBarScreenOptions = (
  appStyles: ThemeStyles,
): BottomTabNavigationOptions => {
  const screenOptions = {
    tabBarActiveTintColor: appStyles.tabBarActiveTintColor,
    tabBarInactiveTintColor: appStyles.tabBarInactiveTintColor,
    tabBarActiveBackgroundColor: appStyles.tabBarActiveBackgroundColor,
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
      bottom: verticalScale(15),
      paddingBottom: verticalScale(0.5),
      backgroundColor: appStyles.tabBarActiveTintColor,
      left: horizontalScale(10),
      right: horizontalScale(10),
      height: verticalScale(60),
      borderRadius: moderateScale(20),
      borderWidth: moderateScale(2),
      borderTopWidth: moderateScale(2),
      borderTopColor: appStyles.color,
      position: 'absolute',
      overflow: 'hidden',
      borderColor: appStyles.color,
    },
  };
  return screenOptions as BottomTabNavigationOptions;
};

export const tabHomeScreenOptions = (
  appStyles: ThemeStyles,
): BottomTabNavigationOptions => {
  const homeScreenOptions = {
    title: TabNavigationStrings.homeScreenTitle,
    tabBarLabelStyle: myTabBarLabelStyle,
    tabBarIcon: ({focused}: {focused: boolean}) =>
      myTabBarIcon({focused}, Images.houseIcon, appStyles),
  };
  return homeScreenOptions;
};

export const tabCreateUserScreenOptions = (
  appStyles: ThemeStyles,
): BottomTabNavigationOptions => {
  const createUserScreenOptions = {
    title: TabNavigationStrings.createUserTitle,
    tabBarLabelStyle: myTabBarLabelStyle,
    tabBarIcon: ({focused}: {focused: boolean}) =>
      myTabBarIcon({focused}, Images.addUser, appStyles),
  };
  return createUserScreenOptions;
};

export const tabVideoScreenOptions = (
  appStyles: ThemeStyles,
): BottomTabNavigationOptions => {
  const videoScreenOptions = {
    title: TabNavigationStrings.videoScreenTitle,
    tabBarLabelStyle: myTabBarLabelStyle,
    tabBarIcon: ({focused}: {focused: boolean}) =>
      myTabBarIcon({focused}, Images.videoIcon, appStyles),
  };
  return videoScreenOptions;
};

export const tabProfileScreenOptions = (
  appStyles: ThemeStyles,
): BottomTabNavigationOptions => {
  const profileScreenOptions = {
    title: TabNavigationStrings.profileTitle,
    tabBarLabelStyle: myTabBarLabelStyle,
    tabBarIcon: ({focused}: {focused: boolean}) =>
      myTabBarIcon({focused}, Images.profileUser, appStyles),
  };
  return profileScreenOptions;
};

const myTabBarIcon = (
  {focused}: {focused: boolean},
  icon: ImageSourcePropType,
  appStyles: ThemeStyles,
) => (
  <Image
    source={icon}
    resizeMode="contain"
    style={{
      height: verticalScale(20),
      width: horizontalScale(23),
      tintColor: focused ? appStyles.color : appStyles.backgroundColor,
    }}
  />
);
