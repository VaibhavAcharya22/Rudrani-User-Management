import React, {FC} from 'react';
import {View} from 'react-native';
import {SettingsStrings} from '../../../constants';
import ChangeOption from './ChangeOption';
import styles from './ChangeThemeBottomSheetStyles';
import {useChangeThemeOption} from './hooks';
import {ChangeThemeOptionHookReturnType} from './hooks/useChangeThemeOption';

const ChangeThemeOption: FC<{selectedTheme: string}> = ({selectedTheme}) => {
  const {
    themeStyles,
    isSystemDefault,
    lightThemePress,
    darkThemePress,
    systemThemePress,
    isDark,
    isLight,
  }: ChangeThemeOptionHookReturnType = useChangeThemeOption(selectedTheme);

  return (
    <View style={styles.optionsContainer}>
      <ChangeOption
        onPress={lightThemePress}
        themeStyle={themeStyles}
        title={SettingsStrings.lightTitle}
        isVisible={isLight}
      />
      <ChangeOption
        onPress={darkThemePress}
        themeStyle={themeStyles}
        title={SettingsStrings.darkTitle}
        isVisible={isDark}
      />
      <ChangeOption
        onPress={systemThemePress}
        themeStyle={themeStyles}
        title={SettingsStrings.systemDefaultTitle}
        isVisible={isSystemDefault}
      />
    </View>
  );
};

export default ChangeThemeOption;
