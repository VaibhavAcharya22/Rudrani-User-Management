import React, {FC} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {AccountCard} from './account-card';
import {LegalCard} from './legal-card';
import styles from './legal-card/LegalCardStyles';
import {ThemeCard} from './theme-card';
import {SettingsHookReturnType, useSettings} from './hooks';
import WebView from 'react-native-webview';
import {appConstants} from '../../constants';

const SettingsScreen: FC = () => {
  const {
    isTermsConditionsOpen,
    isPrivacyPolicyOpen,
    termsConditionPress,
    privacyPolicyPress,
    themeStyles,
  }: SettingsHookReturnType = useSettings();

  return (
    <SafeAreaView
      style={StyleSheet.flatten([styles.mainContainer, themeStyles.container])}>
      {isTermsConditionsOpen || isPrivacyPolicyOpen ? (
        <WebView
          source={{uri: appConstants.googleUri}}
          style={styles.mainContainer}
        />
      ) : (
        <>
          <ThemeCard />
          <LegalCard {...{termsConditionPress, privacyPolicyPress}} />
          <AccountCard />
        </>
      )}
    </SafeAreaView>
  );
};

export default SettingsScreen;
