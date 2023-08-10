import React, {FC} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Images} from '../../../assets';
import {CustomButton, CustomTextInput} from '../../../components';
import {themeColors} from '../../../theme';
import {SignUpStrings, formikKeys} from '../../../constants';
import styles from './SignUpScreenStyles';
import {useSignUp} from './hooks';
import {SignUpHookReturnType} from './hooks/useSignUp';

const SignUpScreen: FC = () => {
  const {
    passwordRef,
    confirmPasswordRef,
    values,
    touched,
    errors,
    isValid,
    appStyles,
    themeStyles,
    handleChange,
    setFieldTouched,
    handleSubmit,
    handleAlreadyAccountClick,
  }: SignUpHookReturnType = useSignUp();

  return (
    <KeyboardAwareScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.mainView}>
        <Image
          source={Images.signUpOne}
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
            {SignUpStrings.title}
          </Text>
          <View style={styles.signInFields}>
            <Text
              style={StyleSheet.flatten([
                styles.labelStyle,
                themeStyles.labelStyle,
              ])}>
              {SignUpStrings.emailLabel}
            </Text>
            <CustomTextInput
              placeholder={SignUpStrings.emailPlaceholder}
              passedRef={passwordRef}
              value={values.email}
              keyboardType={'default'}
              height={50}
              width={320}
              padding={10}
              borderWidth={1.5}
              borderRadius={20}
              onChange={(val: string) => handleChange(formikKeys.email)(val)}
              onBlur={() => setFieldTouched(formikKeys.email)}
              bgColor={themeColors.whiteColor}
              borderColor={themeColors.secondaryColor}
              inputColor={themeColors.secondaryColor}
              placeholderColor={themeColors.secondaryColor}
            />
            {touched?.email && errors?.email && (
              <View style={styles.errorMsgView}>
                <Text style={styles.errorMsg}>{errors?.email}</Text>
              </View>
            )}
            <View>
              <Text
                style={StyleSheet.flatten([
                  styles.labelStyle,
                  themeStyles.labelStyle,
                ])}>
                {SignUpStrings.passwordLabel}
              </Text>
              <CustomTextInput
                placeholder={SignUpStrings.passwordPlaceholder}
                value={values.password}
                ref={passwordRef}
                passedRef={confirmPasswordRef}
                keyboardType={'default'}
                secureText
                height={50}
                width={320}
                padding={10}
                borderWidth={1.5}
                borderRadius={20}
                onChange={val => handleChange(formikKeys.password)(val)}
                onBlur={() => setFieldTouched(formikKeys.password)}
                bgColor={themeColors.whiteColor}
                borderColor={themeColors.secondaryColor}
                inputColor={themeColors.secondaryColor}
                placeholderColor={themeColors.secondaryColor}
              />
            </View>
            {touched?.password && errors?.password && (
              <View style={styles.errorMsgView}>
                <Text style={styles.errorMsg}>{errors?.password}</Text>
              </View>
            )}
            <View>
              <Text
                style={StyleSheet.flatten([
                  styles.labelStyle,
                  themeStyles.labelStyle,
                ])}>
                {SignUpStrings.confirmPasswordLabel}
              </Text>
              <CustomTextInput
                placeholder={SignUpStrings.confirmPasswordPlaceholder}
                value={values.confirmPassword}
                ref={confirmPasswordRef}
                secureText
                keyboardType={'default'}
                height={50}
                width={320}
                padding={10}
                borderWidth={1.5}
                borderRadius={20}
                onChange={val => handleChange(formikKeys.confirmPassword)(val)}
                onBlur={() => setFieldTouched(formikKeys.confirmPassword)}
                bgColor={themeColors.whiteColor}
                borderColor={themeColors.secondaryColor}
                inputColor={themeColors.secondaryColor}
                placeholderColor={themeColors.secondaryColor}
              />
            </View>
            {touched?.confirmPassword && errors?.confirmPassword && (
              <View style={styles.errorMsgView}>
                <Text style={styles.errorMsg}>{errors?.confirmPassword}</Text>
              </View>
            )}
          </View>
          <View style={styles.signInButton}>
            <CustomButton
              btnText={SignUpStrings.signUpBtnTitle}
              borderColor={appStyles.modalButtonTextColor}
              color={appStyles.modalButtonColor}
              textColor={appStyles.modalButtonTextColor}
              width={250}
              height={50}
              borderRadius={40}
              fontSize={15}
              disabled={!isValid}
              onPress={handleSubmit}
            />
          </View>
          <View style={styles.actualFieldContainView}>
            <View style={styles.fieldBelowView}>
              <TouchableOpacity
                style={styles.alreadyAccountView}
                onPress={handleAlreadyAccountClick}>
                <Text
                  style={StyleSheet.flatten([
                    styles.alreadyAccountText,
                    themeStyles.alreadyAccountText,
                  ])}>
                  {SignUpStrings.alreadyHaveAccount}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default SignUpScreen;
