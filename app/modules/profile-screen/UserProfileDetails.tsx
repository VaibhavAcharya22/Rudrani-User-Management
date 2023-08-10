import React, {FC} from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Images} from '../../assets';
import {CustomButton, CustomTextInput} from '../../components';
import {ProfileStrings, formikKeys} from '../../constants';
import {themeColors} from '../../theme';
import styles from './ProfileScreenStyles';
import {useUserProfile} from './hooks';

const UserProfileDetails: FC<{
  setIsEditScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({setIsEditScreenVisible}) => {
  const {
    navigation,
    firstNameRef,
    lastNameRef,
    emailRef,
    cityRef,
    mobileRef,
    values,
    appStyles,
    themeStyles,
    touched,
    errors,
    isValid,
    handleChange,
    setFieldTouched,
    handleSubmit,
  } = useUserProfile(setIsEditScreenVisible);

  return (
    <Modal>
      <View
        style={StyleSheet.flatten([styles.container, themeStyles.mainView])}>
        <KeyboardAwareScrollView
          bounces={false}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <SafeAreaView
            style={StyleSheet.flatten([styles.mainView, themeStyles.mainView])}>
            <Text
              style={StyleSheet.flatten([
                styles.updateProfileTitle,
                themeStyles.updateProfileTitle,
              ])}>
              {ProfileStrings.updateProfileTitle}
            </Text>
            <TouchableOpacity
              style={styles.closeBtnContainer}
              onPress={() => setIsEditScreenVisible(false)}>
              <Image source={Images.closeIcon} style={styles.closeBtn} />
            </TouchableOpacity>
            <View style={styles.startButtonsContainer}>
              <View style={styles.signInFields}>
                <Text
                  style={StyleSheet.flatten([
                    styles.labelStyle,
                    themeStyles.labelStyle,
                  ])}>
                  {ProfileStrings.firstNameLabel}
                </Text>
                <CustomTextInput
                  placeholder={ProfileStrings.firstNamePlaceholder}
                  ref={firstNameRef}
                  passedRef={lastNameRef}
                  value={values.firstName}
                  keyboardType={'default'}
                  height={50}
                  width={320}
                  padding={10}
                  borderWidth={1.5}
                  borderRadius={10}
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
                  {ProfileStrings.lastNameLabel}
                </Text>
                <CustomTextInput
                  placeholder={ProfileStrings.lastNamePlaceholder}
                  ref={lastNameRef}
                  passedRef={emailRef}
                  value={values.lastName}
                  keyboardType={'default'}
                  height={50}
                  width={320}
                  padding={10}
                  borderWidth={1.5}
                  borderRadius={10}
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
                  {ProfileStrings.cityLabel}
                </Text>
                <CustomTextInput
                  placeholder={ProfileStrings.cityPlaceholder}
                  ref={cityRef}
                  passedRef={mobileRef}
                  value={values.city}
                  keyboardType={'default'}
                  height={50}
                  width={320}
                  padding={10}
                  borderWidth={1.5}
                  borderRadius={10}
                  onChange={(val: string) => handleChange(formikKeys.city)(val)}
                  onBlur={() => setFieldTouched(formikKeys.city)}
                  bgColor={appStyles.color}
                  borderColor={appStyles.color}
                  inputColor={appStyles.backgroundColor}
                  placeholderColor={appStyles.backgroundColor}
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
                  {ProfileStrings.mobileNumberLabel}
                </Text>
                <CustomTextInput
                  placeholder={ProfileStrings.mobileNumberPlaceholder}
                  ref={mobileRef}
                  value={values.mobileNumber}
                  keyboardType={'number-pad'}
                  height={50}
                  width={320}
                  padding={10}
                  borderWidth={1.5}
                  borderRadius={10}
                  onChange={(val: string) =>
                    handleChange(formikKeys.mobileNumber)(val)
                  }
                  onBlur={() => setFieldTouched(formikKeys.mobileNumber)}
                  bgColor={appStyles.color}
                  borderColor={appStyles.color}
                  inputColor={appStyles.backgroundColor}
                  placeholderColor={appStyles.backgroundColor}
                />
                {touched?.mobileNumber && errors?.mobileNumber && (
                  <View style={styles.errorMsgView}>
                    <Text style={styles.errorMsg}>{errors?.mobileNumber}</Text>
                  </View>
                )}
              </View>
              <View style={styles.signInButton}>
                <CustomButton
                  btnText={ProfileStrings.updateBtnTitle}
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
          </SafeAreaView>
        </KeyboardAwareScrollView>
      </View>
    </Modal>
  );
};

export default UserProfileDetails;
