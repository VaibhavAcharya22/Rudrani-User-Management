import {useEffect} from 'react';
import {ROUTES} from '../../../constants';
import {RootState} from '../../../redux';
import {useSelector} from 'react-redux';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {TextStyle, ViewStyle} from 'react-native';
import {ThemeStyles} from '../../../types';

interface ThemeStyleType {
  loaderView: ViewStyle;
  loadingText: TextStyle;
}
export interface SplashHookReturnType {
  themeStyles: ThemeStyleType;
}

const useSplash = (): SplashHookReturnType => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const loggedInUser = useSelector(
    (state: RootState) => state.manageCustomers.loggedInUser,
  );
  const styles: ThemeStyles = useSelector(
    (state: RootState) => state.manageTheme.styles,
  );
  const themeStyles = {
    loaderView: {
      backgroundColor: styles.backgroundColor,
    },
    loadingText: {
      color: styles.color,
    },
  };

  useEffect(() => {
    setTimeout(() => {
      if (loggedInUser?.email) navigation.replace(ROUTES.Drawer);
      else navigation.replace(ROUTES.WelcomeScreen);
    }, 2000);
  }, []);

  return {
    themeStyles,
  };
};

export default useSplash;
