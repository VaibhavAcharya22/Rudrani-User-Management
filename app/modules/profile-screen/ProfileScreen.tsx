import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Images} from '../../assets';
import {CustomButton} from '../../components';
import {ProfileStrings} from '../../constants';
import {themeColors} from '../../theme';
import styles from './ProfileScreenStyles';
import {useProfile} from './hooks';
import UserProfileDetails from './UserProfileDetails';
import {UploadOptions} from '../create-user';
import {ProfileHookReturnType} from './hooks/useProfile';

const ProfileScreen: FC = () => {
  const {
    loggedInUser,
    isEditScreenVisible,
    setIsEditScreenVisible,
    isProfilePicUploadVisible,
    setIsProfilePicUploadVisible,
    appStyles,
    themeStyles,
  }: ProfileHookReturnType = useProfile();

  return (
    <View style={StyleSheet.flatten([styles.container, themeStyles.container])}>
      <View
        style={StyleSheet.flatten([
          styles.detailsContainer,
          themeStyles.detailsContainer,
        ])}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.profileImageContainer}
        onPress={() => setIsProfilePicUploadVisible(true)}>
        <Image
          source={
            loggedInUser?.avatar
              ? {uri: loggedInUser?.avatar}
              : Images.profileAvatar
          }
          style={styles.imageStyle}
          resizeMode="contain"
        />
        <View
          style={StyleSheet.flatten([
            styles.updateImageContainer,
            themeStyles.updateImageContainer,
          ])}>
          <Image
            source={Images.addImage}
            style={StyleSheet.flatten([
              styles.updateImage,
              themeStyles.updateImage,
            ])}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
      <View style={styles.profileDetailsMainView}>
        <Text
          style={StyleSheet.flatten([
            styles.firstLastNameStyle,
            themeStyles.labelStyle,
          ])}>
          {loggedInUser.first_name} {loggedInUser.last_name}
        </Text>
        <Text
          style={StyleSheet.flatten([
            styles.nameBelowStyle,
            themeStyles.labelStyle,
          ])}>
          {loggedInUser.email}
        </Text>
        <Text
          style={StyleSheet.flatten([
            styles.nameBelowStyle,
            themeStyles.labelStyle,
          ])}>
          {`${loggedInUser.city}, ${loggedInUser.mobileNumber}.`}
        </Text>
      </View>
      <View style={styles.signInButton}>
        <CustomButton
          btnText={ProfileStrings.editBtnTitle}
          borderColor={themeColors.secondaryColor}
          color={themeColors.mainColor}
          textColor={themeColors.secondaryColor}
          width={250}
          height={50}
          borderRadius={40}
          fontSize={15}
          onPress={() => setIsEditScreenVisible(true)}
        />
      </View>
      {isEditScreenVisible && (
        <UserProfileDetails {...{setIsEditScreenVisible}} />
      )}
      {isProfilePicUploadVisible && (
        <UploadOptions
          isPickerVisible={isProfilePicUploadVisible}
          setIsPickerVisible={setIsProfilePicUploadVisible}
          isProfile={true}
        />
      )}
    </View>
  );
};

export default ProfileScreen;
