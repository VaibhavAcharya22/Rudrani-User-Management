import {ParamListBase, useNavigation} from '@react-navigation/native';
import {Images} from '../../../assets';
import {ImageSourcePropType, TextStyle, ViewStyle} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux';
import {ThemeStyles} from '../../../types';

interface ThemeStylesTypes {
  startButtonsContainer: ViewStyle;
  indicatorLine: ViewStyle;
  welcomeText: TextStyle;
  welcomeDesc: TextStyle;
}
export interface WelcomeScreenHookReturnType {
  navigation: StackNavigationProp<ParamListBase>;
  welcomeImages: ImageSourcePropType[];
  appStyle: ThemeStyles;
  themeStyles: ThemeStylesTypes;
}

const useWelcome = (): WelcomeScreenHookReturnType => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const welcomeImages: ImageSourcePropType[] = [
    Images.startScreenImage,
    Images.startScreenMobile,
    Images.startScreenDesk,
  ];

  const appStyle: ThemeStyles = useSelector(
    (state: RootState) => state.manageTheme.styles,
  );
  const themeStyles: ThemeStylesTypes = {
    startButtonsContainer: {
      backgroundColor: appStyle.modalBackgroundColor,
      shadowColor: appStyle.shadowColor,
    },
    indicatorLine: {
      backgroundColor: appStyle.backgroundColor,
    },
    welcomeText: {
      color: appStyle.modalTextColor,
    },
    welcomeDesc: {
      color: appStyle.modalTextColor,
    },
  };

  return {
    navigation,
    welcomeImages,
    appStyle,
    themeStyles,
  };
};

export default useWelcome;
