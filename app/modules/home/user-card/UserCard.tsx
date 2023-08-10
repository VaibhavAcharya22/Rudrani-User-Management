import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ROUTES} from '../../../constants';
import {CustomersType} from '../../../types';
import styles from './UserCardStyles';
import {useUserCard} from './hooks';
import {UserCardHookReturnType} from './hooks/useUserCard';

const UserCard: FC<{user: CustomersType}> = ({user}) => {
  const {navigation, themeStyles}: UserCardHookReturnType = useUserCard();

  return (
    <View
      style={StyleSheet.flatten([
        styles.mainContainer,
        themeStyles.mainContainer,
      ])}>
      <TouchableOpacity
        style={StyleSheet.flatten([styles.container, themeStyles.container])}
        onPress={() =>
          navigation.navigate(ROUTES.UserDetailsScreen, {userDetails: user})
        }>
        <Image
          source={{uri: user?.avatar}}
          resizeMode="contain"
          style={styles.imageStyle}
        />
        <View
          style={StyleSheet.flatten([
            styles.nameContainer,
            themeStyles.nameContainer,
          ])}>
          <Text
            style={StyleSheet.flatten([
              styles.nameStyle,
              themeStyles.nameStyle,
            ])}>
            {user?.first_name} {user?.last_name}
          </Text>
          <Text
            style={StyleSheet.flatten([
              styles.cityStyle,
              themeStyles.cityStyle,
            ])}>
            {user?.email}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UserCard;
