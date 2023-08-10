import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Images} from '../../assets';
import {DrawerStrings, ROUTES} from '../../constants';
import styles from './CustomDrawerStyle';
import {useCustomDrawer} from './hooks';
import {CustomDrawerHookReturnType} from './hooks/useCustomDrawer';

// Custom Drawer Component
const CustomDrawer = (props: DrawerContentComponentProps) => {
  const {navigation, loggedInUser, themeStyles}: CustomDrawerHookReturnType =
    useCustomDrawer();

  return (
    <View
      style={StyleSheet.flatten([styles.headerView, themeStyles.headerView])}>
      <DrawerContentScrollView {...props}>
        <>
          <View style={styles.profileImageView}>
            <Image
              source={
                loggedInUser?.avatar
                  ? {uri: loggedInUser?.avatar}
                  : Images.profileAvatar
              }
              style={styles.profileImage}
              resizeMode="contain"
            />
            <Text
              style={StyleSheet.flatten([
                styles.userNameStyle,
                themeStyles.userNameStyle,
              ])}>
              {`${loggedInUser.first_name} ${loggedInUser.last_name}`}
            </Text>
            <Text
              style={StyleSheet.flatten([
                styles.userEmailStyle,
                themeStyles.userEmailStyle,
              ])}>
              {loggedInUser.email}
            </Text>
          </View>
        </>
        <DrawerItemList {...props} />
        <View style={styles.drawerItemsContainView}>
          <DrawerItem
            {...props}
            labelStyle={StyleSheet.flatten([
              styles.drawerItemLabel,
              themeStyles.drawerItemLabel,
            ])}
            style={styles.drawerItemStyle}
            label={DrawerStrings.profileTitle}
            icon={() => (
              <Image
                source={Images.profileUser}
                resizeMode="contain"
                style={StyleSheet.flatten([
                  styles.drawerItemIconStyle,
                  themeStyles.drawerItemIconStyle,
                ])}
              />
            )}
            onPress={() => props?.navigation?.navigate(ROUTES.ProfileScreen)}
          />
          <DrawerItem
            {...props}
            labelStyle={StyleSheet.flatten([
              styles.drawerItemLabel,
              themeStyles.drawerItemLabel,
            ])}
            style={styles.drawerItemStyle}
            label={DrawerStrings.settingsTitle}
            icon={() => (
              <Image
                source={Images.settings}
                resizeMode="contain"
                style={StyleSheet.flatten([
                  styles.drawerItemIconStyle,
                  themeStyles.drawerItemIconStyle,
                ])}
              />
            )}
            onPress={() => props?.navigation?.navigate(ROUTES.SettingsScreen)}
          />
        </View>
      </DrawerContentScrollView>
      <SafeAreaView style={styles.footerLabelView}>
        <SafeAreaView style={styles.footerLabelView}>
          <View style={styles.logoutContainer}>
            <Text
              style={StyleSheet.flatten([
                styles.footerLabel,
                themeStyles.footerLabel,
              ])}>
              {DrawerStrings.versionNumberLabel}
            </Text>
          </View>
        </SafeAreaView>
      </SafeAreaView>
    </View>
  );
};
export default CustomDrawer;
