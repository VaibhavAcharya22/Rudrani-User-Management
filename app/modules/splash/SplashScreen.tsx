import React, {FC} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Images} from '../../assets';
import {LoaderStrings} from '../../constants';
import {RootState} from '../../redux';
import {moderateScale} from '../../theme';
import styles from './SplashScreenStyles';
import {useSplash} from './hooks';

const SplashScreen: FC = () => {
  // Custom Hook Calling
  const componentStyles = useSelector(
    (state: RootState) => state.manageTheme.styles,
  );
  const {themeStyles} = useSplash();

  return (
    <View
      style={StyleSheet.flatten([styles.loaderView, themeStyles.loaderView])}>
      <Image
        source={Images.splashLogo}
        style={styles.splashLogoImage}
        resizeMode="contain"
      />
      <ActivityIndicator
        size={moderateScale(30)}
        color={componentStyles.color}
      />
      <Text
        style={StyleSheet.flatten([
          styles.loadingText,
          themeStyles.loadingText,
        ])}>
        {LoaderStrings.loadingTitle}
      </Text>
    </View>
  );
};

export default SplashScreen;
