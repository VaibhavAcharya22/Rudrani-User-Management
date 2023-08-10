import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux';
import {ColorSchemeName, useColorScheme} from 'react-native';
import {Dispatch} from 'react';
import {AnyAction} from 'redux';
import {manageThemeActions} from '../../../../redux/reducers/ThemeReducer';

export interface ChangeThemeOptionHookReturnType {
  dispatch: Dispatch<AnyAction>;
  themeStyles: {
    selectedThemeIcon: {
      tintColor: string;
    };
    textStyle: {
      color: string;
    };
    borderStyle: {
      borderBottomColor: string;
    };
  };
  systemDefaultTheme: ColorSchemeName;
  isSystemDefault: boolean;
  lightThemePress: () => void;
  darkThemePress: () => void;
  systemThemePress: () => void;
  isDark: boolean;
  isLight: boolean;
}

const useChangeThemeOption = (
  selectedTheme: string,
): ChangeThemeOptionHookReturnType => {
  const dispatch = useDispatch();
  const styles = useSelector((state: RootState) => state.manageTheme.styles);
  const isSystemDefault = useSelector(
    (state: RootState) => state.manageTheme.isSystemDefault,
  );
  const systemDefaultTheme = useColorScheme();

  const themeStyles = {
    selectedThemeIcon: {
      tintColor: styles.modalTintColor,
    },
    textStyle: {
      color: styles.modalTextColor,
    },
    borderStyle: {
      borderBottomColor: styles.modalBorderColor,
    },
  };

  const lightThemePress = (): void => {
    dispatch(manageThemeActions.lightTheme());
  };

  const darkThemePress = (): void => {
    dispatch(manageThemeActions.darkTheme());
  };

  const systemThemePress = (): void => {
    dispatch(
      manageThemeActions.systemDefaultTheme({
        systemTheme: systemDefaultTheme,
      }),
    );
  };

  const isDark = selectedTheme === 'dark' && !isSystemDefault;
  const isLight = selectedTheme === 'light' && !isSystemDefault;

  return {
    dispatch,
    themeStyles,
    systemDefaultTheme,
    isSystemDefault,
    lightThemePress,
    darkThemePress,
    systemThemePress,
    isDark,
    isLight,
  };
};

export default useChangeThemeOption;
