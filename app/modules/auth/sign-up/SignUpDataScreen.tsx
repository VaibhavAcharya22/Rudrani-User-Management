import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Images} from '../../../assets';
import {CustomButton, CustomTextInput} from '../../../components';
import {PersonalDataStrings, formikKeys} from '../../../constants';
import {themeColors} from '../../../theme';
import styles from './SignUpDataScreenStyles';
import {usePersonalData} from './hooks';
import {PersonalDataHookReturnType} from './hooks/usePersonalData';

const SignUpDataScreen = () => {
  const {
    navigation,
    lastNameRef,
    cityRef,
    mobileRef,
    appStyles,
    themeStyles,
    values,
    touched,
    errors,
    isValid,
    handleChange,
    setFieldTouched,
    handleSubmit,
  }: PersonalDataHookReturnType = usePersonalData();

  return (
    <KeyboardAwareScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.mainView}>
        <Image
          source={Images.signUpData}
          style={styles.startImage}
          resizeMode="contain"
        />
        <View
          style={StyleSheet.flatten([
            styles.startButtonsContainer,
            themeStyles.startButtonsContainer,
          ])}>
          <View
            style={StyleSheet.flatten([
              styles.indicatorLine,
              themeStyles.indicatorLine,
            ])}
          />
          <Text
            style={StyleSheet.flatten([
              styles.signInTitle,
              themeStyles.signInTitle,
            ])}>
            {PersonalDataStrings.title}
          </Text>
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
              bgColor={themeColors.whiteColor}
              borderColor={themeColors.secondaryColor}
              inputColor={themeColors.secondaryColor}
              placeholderColor={themeColors.secondaryColor}
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
              passedRef={cityRef}
              value={values.lastName}
              keyboardType={'default'}
              height={50}
              width={320}
              padding={10}
              borderWidth={1.5}
              borderRadius={20}
              onChange={(val: string) => handleChange(formikKeys.lastName)(val)}
              onBlur={() => setFieldTouched(formikKeys.lastName)}
              bgColor={themeColors.whiteColor}
              borderColor={themeColors.secondaryColor}
              inputColor={themeColors.secondaryColor}
              placeholderColor={themeColors.secondaryColor}
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
              {PersonalDataStrings.cityLabel}
            </Text>
            <CustomTextInput
              placeholder={PersonalDataStrings.cityPlaceholder}
              ref={cityRef}
              passedRef={mobileRef}
              value={values.city}
              keyboardType={'default'}
              height={50}
              width={320}
              padding={10}
              borderWidth={1.5}
              borderRadius={20}
              onChange={(val: string) => handleChange(formikKeys.city)(val)}
              onBlur={() => setFieldTouched(formikKeys.city)}
              bgColor={themeColors.whiteColor}
              borderColor={themeColors.secondaryColor}
              inputColor={themeColors.secondaryColor}
              placeholderColor={themeColors.secondaryColor}
            />
            {touched?.city && errors?.city && (
              <View style={styles.errorMsgView}>
                <Text style={styles.errorMsg}>{errors?.city}</Text>
              </View>
            )}

            <Text
              style={StyleSheet.flatten([
                styles.labelStyle,
                themeStyles.labelStyle,
              ])}>
              {PersonalDataStrings.mobileNumberLabel}
            </Text>
            <CustomTextInput
              placeholder={PersonalDataStrings.mobileNumberPlaceholder}
              ref={mobileRef}
              value={values.mobileNumber}
              keyboardType={'number-pad'}
              height={50}
              width={320}
              padding={10}
              borderWidth={1.5}
              borderRadius={20}
              onChange={(val: string) =>
                handleChange(formikKeys.mobileNumber)(val)
              }
              onBlur={() => setFieldTouched(formikKeys.mobileNumber)}
              bgColor={themeColors.whiteColor}
              borderColor={themeColors.secondaryColor}
              inputColor={themeColors.secondaryColor}
              placeholderColor={themeColors.secondaryColor}
            />
            {touched?.mobileNumber && errors?.mobileNumber && (
              <View style={styles.errorMsgView}>
                <Text style={styles.errorMsg}>{errors?.mobileNumber}</Text>
              </View>
            )}
          </View>
          <View style={styles.signInButton}>
            <CustomButton
              btnText={PersonalDataStrings.nextBtnTitle}
              borderColor={appStyles.modalButtonTextColor}
              color={appStyles.modalButtonColor}
              textColor={appStyles.modalButtonTextColor}
              width={150}
              height={50}
              borderRadius={40}
              fontSize={15}
              disabled={!isValid}
              onPress={handleSubmit}
            />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default SignUpDataScreen;
