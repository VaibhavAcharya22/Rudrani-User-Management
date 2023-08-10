import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux';
import {CustomersType, ThemeStyles} from '../../../types';
import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

interface ThemeStyleType {
  container: ViewStyle;
  updateImageContainer: ViewStyle;
  updateImage: ImageStyle;
  detailsContainer: ViewStyle;
  labelStyle: TextStyle;
}

export interface ProfileHookReturnType {
  navigation: StackNavigationProp<ParamListBase>;
  loggedInUser: CustomersType;
  isEditScreenVisible: boolean;
  setIsEditScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isProfilePicUploadVisible: boolean;
  setIsProfilePicUploadVisible: React.Dispatch<React.SetStateAction<boolean>>;
  appStyles: ThemeStyles;
  themeStyles: ThemeStyleType;
}

const useProfile = (): ProfileHookReturnType => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [isEditScreenVisible, setIsEditScreenVisible] =
    useState<boolean>(false);

  const loggedInUser = useSelector(
    (state: RootState) => state.manageCustomers.loggedInUser,
  );

  const [isProfilePicUploadVisible, setIsProfilePicUploadVisible] =
    useState<boolean>(false);

  const appStyles = useSelector((state: RootState) => state.manageTheme.styles);
  const themeStyles: ThemeStyleType = {
    container: {
      backgroundColor: appStyles.backgroundColor,
    },
    updateImageContainer: {
      backgroundColor: appStyles.cardBackgroundColor,
    },
    updateImage: {
      tintColor: appStyles.backgroundColor,
    },
    detailsContainer: {
      backgroundColor: appStyles.cardBackgroundColor,
    },
    labelStyle: {
      color: appStyles.color,
    },
  };

  return {
    navigation,
    loggedInUser,
    appStyles,
    themeStyles,
    isEditScreenVisible,
    setIsEditScreenVisible,
    isProfilePicUploadVisible,
    setIsProfilePicUploadVisible,
  };
};
export default useProfile;
