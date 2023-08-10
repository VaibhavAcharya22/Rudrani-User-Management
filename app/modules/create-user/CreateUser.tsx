import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Images} from '../../assets';
import {CustomButton, CustomTextInput} from '../../components';
import {
  CreateUserStrings,
  PersonalDataStrings,
  SignUpStrings,
  appConstants,
  formikKeys,
} from '../../constants';
import {themeColors} from '../../theme';
import UploadOptions from './UploadOptions';
import useCreateUser, {CreateUserHookReturnType} from './hooks/useCreateUser';
import styles from './CreateUserStyles';

const CreateUser = () => {
  const {
    lastNameRef,
    emailRef,
    values,
    touched,
    errors,
    isValid,
    appStyles,
    themeStyles,
    handleChange,
    setFieldTouched,
    handleSubmit,
    isPickerVisible,
    setIsPickerVisible,
    imageUri,
  }: CreateUserHookReturnType = useCreateUser();

  return (
    <View style={StyleSheet.flatten([styles.container, themeStyles.container])}>
      <KeyboardAwareScrollView
        bounces={false}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <SafeAreaView
          style={StyleSheet.flatten([styles.mainView, themeStyles.mainView])}>
          <TouchableOpacity onPress={() => setIsPickerVisible(true)}>
            {imageUri ? (
              <Image
                source={{uri: `${appConstants.fileImageUri}${imageUri}`}}
                style={styles.uploadImageStyle}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={Images.addUser}
                style={styles.imageStyle}
                resizeMode="contain"
              />
            )}
          </TouchableOpacity>
          <View style={styles.startButtonsContainer}>
            <View style={styles.signInFields}>
              <Text
                style={StyleSheet.flatten([
                  styles.labelStyle,
                  themeStyles.labelStyle,
                ])}>
                {PersonalDataStrings.firstNameLabel}
              </Text>
              <CustomTextInput
                placeholder={PersonalDataStrings.firstNamePlaceholder}
                passedRef={lastNameRef}
                value={values.firstName}
                keyboardType={'default'}
                height={50}
                width={320}
                padding={10}
                borderWidth={1.5}
                borderRadius={20}
                onChange={(val: string) =>
                  handleChange(formikKeys.firstName)(val)
                }
                onBlur={() => setFieldTouched(formikKeys.firstName)}
                bgColor={appStyles.color}
                borderColor={appStyles.color}
                inputColor={appStyles.backgroundColor}
                placeholderColor={appStyles.backgroundColor}
              />
              {touched?.firstName && errors?.firstName && (
                <View style={styles.errorMsgView}>
                  <Text style={styles.errorMsg}>{errors?.firstName}</Text>
                </View>
              )}
              <Text
                style={StyleSheet.flatten([
                  styles.labelStyle,
                  themeStyles.labelStyle,
                ])}>
                {PersonalDataStrings.lastNameLabel}
              </Text>
              <CustomTextInput
                placeholder={PersonalDataStrings.lastNamePlaceholder}
                ref={lastNameRef}
                passedRef={emailRef}
                value={values.lastName}
                keyboardType={'default'}
                height={50}
                width={320}
                padding={10}
                borderWidth={1.5}
                borderRadius={20}
                onChange={(val: string) =>
                  handleChange(formikKeys.lastName)(val)
                }
                onBlur={() => setFieldTouched(formikKeys.lastName)}
                bgColor={appStyles.color}
                borderColor={appStyles.color}
                inputColor={appStyles.backgroundColor}
                placeholderColor={appStyles.backgroundColor}
              />
              {touched?.lastName && errors?.lastName && (
                <View style={styles.errorMsgView}>
                  <Text style={styles.errorMsg}>{errors?.lastName}</Text>
                </View>
              )}
              <Text
                style={StyleSheet.flatten([
                  styles.labelStyle,
                  themeStyles.labelStyle,
                ])}>
                {SignUpStrings.emailLabel}
              </Text>
              <CustomTextInput
                placeholder={SignUpStrings.emailPlaceholder}
                ref={emailRef}
                value={values.email}
                keyboardType={'email-address'}
                height={50}
                width={320}
                padding={10}
                borderWidth={1.5}
                borderRadius={20}
                onChange={(val: string) => handleChange(formikKeys.email)(val)}
                onBlur={() => setFieldTouched(formikKeys.email)}
                bgColor={appStyles.color}
                borderColor={appStyles.color}
                inputColor={appStyles.backgroundColor}
                placeholderColor={appStyles.backgroundColor}
              />
              {touched?.email && errors?.email && (
                <View style={styles.errorMsgView}>
                  <Text style={styles.errorMsg}>{errors?.email}</Text>
                </View>
              )}
            </View>
            <View style={styles.signInButton}>
              <CustomButton
                btnText={CreateUserStrings.addButtonTitle}
                borderColor={themeColors.secondaryColor}
                color={themeColors.mainColor}
                textColor={themeColors.secondaryColor}
                width={150}
                height={50}
                borderRadius={40}
                fontSize={15}
                disabled={!isValid}
                onPress={handleSubmit}
              />
            </View>
          </View>
          <UploadOptions {...{isPickerVisible, setIsPickerVisible}} />
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default CreateUser;
