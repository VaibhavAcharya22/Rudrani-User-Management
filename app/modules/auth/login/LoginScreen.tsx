import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Images} from '../../../assets';
import {CustomButton, CustomTextInput} from '../../../components';
import {LoginStrings} from '../../../constants';
import {formikKeys} from '../../../constants/FormikKeyNames';
import {horizontalScale, themeColors} from '../../../theme';
import styles from './LoginScreenStyles';
import {useLogin} from './hooks';
import {LoginHookReturnType} from './hooks/useLogin';

const LoginScreen: FC = () => {
  const {
    passwordRef,
    values,
    touched,
    errors,
    isValid,
    appStyles,
    themeStyles,
    isPasswordVisible,
    handleChange,
    setFieldTouched,
    handleSubmit,
    handleDontAccountClick,
    handlePasswordEyePress,
  }: LoginHookReturnType = useLogin();

  return (
    <KeyboardAwareScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.mainView}>
        <Image
          source={Images.loginOne}
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
            {LoginStrings.loginTitle}
          </Text>
          <View style={styles.signInFields}>
            <Text
              style={StyleSheet.flatten([
                styles.labelStyle,
                themeStyles.labelStyle,
              ])}>
              {LoginStrings.emailLabel}
            </Text>
            <View style={styles.emailPlaceholderView}>
              <CustomTextInput
                placeholder={LoginStrings.emailPlaceholder}
                passedRef={passwordRef}
                value={values.email}
                keyboardType={'default'}
                height={50}
                width={300}
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
            </View>
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
                {LoginStrings.passwordLabel}
              </Text>
              <View style={styles.passwordContainerView}>
                <CustomTextInput
                  placeholder={LoginStrings.passwordPlaceholder}
                  value={values.password}
                  ref={passwordRef}
                  secureText={isPasswordVisible}
                  keyboardType={'default'}
                  height={50}
                  width={300}
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
                <TouchableOpacity
                  hitSlop={20}
                  onPress={handlePasswordEyePress}
                  style={styles.passwordEyeView}>
                  <Image
                    source={
                      isPasswordVisible
                        ? Images.hidePassword
                        : Images.passwordEye
                    }
                    resizeMode="contain"
                    style={StyleSheet.flatten([
                      styles.passwordEyeStyle,
                      themeStyles.passwordEyeStyle,
                    ])}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {touched?.password && errors?.password && (
              <View style={styles.errorMsgView}>
                <Text style={styles.errorMsg}>{errors?.password}</Text>
              </View>
            )}
          </View>
          <View style={styles.signInButton}>
            <CustomButton
              btnText={LoginStrings.loginBtnTitle}
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
                style={styles.dontHaveAccountView}
                onPress={handleDontAccountClick}>
                <Text
                  style={StyleSheet.flatten([
                    styles.dontHaveAccountText,
                    themeStyles.dontHaveAccountText,
                  ])}>
                  {LoginStrings.dontHaveAccount}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
