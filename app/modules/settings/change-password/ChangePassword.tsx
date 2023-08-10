import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {CustomButton, CustomTextInput} from '../../../components';
import {ChangePasswordStrings, formikKeys} from '../../../constants';
import {themeColors} from '../../../theme';
import {useAccountCard} from '../account-card/hooks';
import styles from './ChangePasswordStyles';
import {AccountCardHookReturnType} from '../account-card/hooks/useAccountCard';

const ChangePassword: FC = () => {
  const {
    passwordRef,
    confirmPasswordRef,
    values,
    touched,
    errors,
    isValid,
    handleChange,
    setFieldTouched,
    handleSubmit,
  }: AccountCardHookReturnType = useAccountCard();

  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.signInFields}>
          <Text style={styles.labelStyle}>
            {ChangePasswordStrings.currentPasswordTitle}
          </Text>
          <View style={styles.textInputContainer}>
            <CustomTextInput
              placeholder={ChangePasswordStrings.currentPasswordPlaceholder}
              value={values.currentPassword}
              passedRef={passwordRef}
              keyboardType={'default'}
              secureText
              height={50}
              width={320}
              padding={10}
              borderWidth={1.5}
              borderRadius={5}
              onChange={val => handleChange(formikKeys.currentPassword)(val)}
              onBlur={() => setFieldTouched(formikKeys.currentPassword)}
              bgColor={themeColors.whiteColor}
              borderColor={themeColors.secondaryColor}
              inputColor={themeColors.secondaryColor}
              placeholderColor={themeColors.secondaryColor}
            />
          </View>
          {touched?.currentPassword && errors?.currentPassword && (
            <View style={styles.errorMsgView}>
              <Text style={styles.errorMsg}>{errors?.currentPassword}</Text>
            </View>
          )}
          <View style={styles.fieldsContainer}>
            <Text style={styles.labelStyle}>
              {ChangePasswordStrings.newPasswordTitle}
            </Text>
            <View style={styles.textInputContainer}>
              <CustomTextInput
                placeholder={ChangePasswordStrings.newPasswordPlaceholder}
                value={values.password}
                ref={passwordRef}
                passedRef={confirmPasswordRef}
                keyboardType={'default'}
                secureText
                height={50}
                width={320}
                padding={10}
                borderWidth={1.5}
                borderRadius={5}
                onChange={val => handleChange(formikKeys.password)(val)}
                onBlur={() => setFieldTouched(formikKeys.password)}
                bgColor={themeColors.whiteColor}
                borderColor={themeColors.secondaryColor}
                inputColor={themeColors.secondaryColor}
                placeholderColor={themeColors.secondaryColor}
              />
            </View>
          </View>
          {touched?.password && errors?.password && (
            <View style={styles.errorMsgView}>
              <Text style={styles.errorMsg}>{errors?.password}</Text>
            </View>
          )}
          <View style={styles.fieldsContainer}>
            <Text style={styles.labelStyle}>
              {ChangePasswordStrings.confirmPasswordTitle}
            </Text>
            <View style={styles.textInputContainer}>
              <CustomTextInput
                placeholder={ChangePasswordStrings.confirmPasswordPlaceholder}
                value={values.confirmPassword}
                ref={confirmPasswordRef}
                secureText
                keyboardType={'default'}
                height={50}
                width={320}
                padding={10}
                borderWidth={1.5}
                borderRadius={5}
                onChange={val => handleChange(formikKeys.confirmPassword)(val)}
                onBlur={() => setFieldTouched(formikKeys.confirmPassword)}
                bgColor={themeColors.whiteColor}
                borderColor={themeColors.secondaryColor}
                inputColor={themeColors.secondaryColor}
                placeholderColor={themeColors.secondaryColor}
              />
            </View>
          </View>
          {touched?.confirmPassword && errors?.confirmPassword && (
            <View style={styles.errorMsgView}>
              <Text style={styles.errorMsg}>{errors?.confirmPassword}</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.signInButton}>
        <CustomButton
          btnText={ChangePasswordStrings.changeBtnTitle}
          borderColor={themeColors.secondaryColor}
          color={themeColors.secondaryColor}
          textColor={themeColors.whiteColor}
          width={150}
          height={50}
          borderRadius={10}
          fontSize={15}
          disabled={!isValid}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default ChangePassword;
