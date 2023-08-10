import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {CustomButton} from '../../../components';
import {UserDetailsStrings} from '../../../constants';
import styles from './UserDetailsStyles';
import {useUserDetails} from './hooks';
import {UserDetailsHookReturnType} from './hooks/useUserDetails';

const UserDetails: FC = () => {
  const {
    userDetails,
    userFilter,
    appStyles,
    themeStyles,
  }: UserDetailsHookReturnType = useUserDetails();

  return (
    <View style={StyleSheet.flatten([styles.container, themeStyles.container])}>
      <Image
        source={{uri: userDetails?.avatar}}
        style={styles.imageStyle}
        resizeMode="cover"
      />
      <View
        style={StyleSheet.flatten([
          styles.detailsContainer,
          themeStyles.detailsContainer,
        ])}>
        <View style={styles.detailsFieldsColumn}>
          <View style={styles.fieldsRowView}>
            <Text
              style={StyleSheet.flatten([
                styles.labelStyle,
                themeStyles.labelStyle,
              ])}>
              {UserDetailsStrings.firstNameLabel}
            </Text>
            <Text
              style={StyleSheet.flatten([
                styles.nameStyle,
                themeStyles.nameStyle,
              ])}>
              {userDetails.first_name}
            </Text>
          </View>
          <View style={styles.fieldsRowView}>
            <Text
              style={StyleSheet.flatten([
                styles.labelStyle,
                themeStyles.labelStyle,
              ])}>
              {UserDetailsStrings.lastNameLabel}
            </Text>
            <Text
              style={StyleSheet.flatten([
                styles.nameStyle,
                themeStyles.nameStyle,
              ])}>
              {userDetails.last_name}
            </Text>
          </View>
          <View style={styles.fieldsRowView}>
            <Text
              style={StyleSheet.flatten([
                styles.labelStyle,
                themeStyles.labelStyle,
              ])}>
              {UserDetailsStrings.emailLabel}
            </Text>
            <Text
              style={StyleSheet.flatten([
                styles.emailStyle,
                themeStyles.emailStyle,
              ])}>
              {userDetails.email}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.controlButtons}>
        <View style={styles.prevButton}>
          <CustomButton
            btnText={UserDetailsStrings.prevBtnTitle}
            borderColor={appStyles.color}
            color={appStyles.backgroundColor}
            textColor={appStyles.color}
            width={150}
            height={50}
            borderRadius={40}
            fontSize={15}
            onPress={() => userFilter(false)}
          />
        </View>
        <CustomButton
          btnText={UserDetailsStrings.nextBtnTitle}
          borderColor={appStyles.modalButtonColor}
          color={appStyles.modalButtonColor}
          textColor={appStyles.modalButtonTextColor}
          width={150}
          height={50}
          borderRadius={40}
          fontSize={15}
          onPress={() => userFilter(true)}
        />
      </View>
    </View>
  );
};

export default UserDetails;
