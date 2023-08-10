import {useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux';
import {ThemeStyles} from '../../../types';

export interface SettingsHookReturnType {
  isTermsConditionsOpen: boolean;
  isPrivacyPolicyOpen: boolean;
  termsConditionPress: () => void;
  privacyPolicyPress: () => void;
  appStyles: ThemeStyles;
  themeStyles: {
    container: {
      backgroundColor: string;
    };
  };
}

export const useSettings = (): SettingsHookReturnType => {
  const [isTermsConditionsOpen, setIsTermsConditionsOpen] =
    useState<boolean>(false);

  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] =
    useState<boolean>(false);

  const termsConditionPress = (): void => {
    setIsTermsConditionsOpen(true);
  };

  const privacyPolicyPress = (): void => {
    setIsPrivacyPolicyOpen(true);
  };
  const appStyles = useSelector((state: RootState) => state.manageTheme.styles);
  const themeStyles = {
    container: {
      backgroundColor: appStyles.settingsBackgroundColor,
    },
  };

  return {
    isTermsConditionsOpen,
    isPrivacyPolicyOpen,
    termsConditionPress,
    privacyPolicyPress,
    appStyles,
    themeStyles,
  };
};
