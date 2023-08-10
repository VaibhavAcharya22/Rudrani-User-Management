import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {CustomButton} from '../../components';
import {ROUTES, WelcomeScreenStrings} from '../../constants';
import {dimensionMetrics} from '../../theme';
import styles from './WelcomeScreenStyles';
import {useWelcome} from './hooks';

const WelcomeScreen: FC = () => {
  const {navigation, welcomeImages, themeStyles, appStyle} = useWelcome();

  return (
    <View style={styles.mainView}>
      <Carousel
        style={styles.carouselStyle}
        loop
        width={dimensionMetrics.windowWidth}
        height={dimensionMetrics.windowWidth / 2}
        autoPlay={true}
        data={welcomeImages}
        scrollAnimationDuration={5000}
        renderItem={({item}) => (
          <Image source={item} style={styles.startImage} resizeMode="contain" />
        )}
      />
      <View
        style={StyleSheet.flatten([
          styles.startButtonsContainer,
          themeStyles.startButtonsContainer,
        ])}>
        <View
          style={StyleSheet.flatten([
            styles.indicatorLine,
            themeStyles.indicatorLine,
          ])}
        />
        <View>
          <Text
            style={StyleSheet.flatten([
              styles.welcomeText,
              themeStyles.welcomeText,
            ])}>
            {WelcomeScreenStrings.title}
          </Text>
          <Text
            style={StyleSheet.flatten([
              styles.welcomeDesc,
              themeStyles.welcomeText,
            ])}>
            {WelcomeScreenStrings.welcomeDesc}
          </Text>
        </View>
        <View style={styles.authButtons}>
          <View style={styles.SignInButton}>
            <CustomButton
              btnText={WelcomeScreenStrings.loginBtnTitle}
              onPress={() => navigation.replace(ROUTES.Login)}
              borderColor={appStyle.modalButtonTextColor}
              color={appStyle.modalButtonColor}
              textColor={appStyle.modalButtonTextColor}
              width={250}
              height={50}
              borderRadius={40}
              fontSize={15}
            />
          </View>
          <CustomButton
            btnText={WelcomeScreenStrings.signUpBtnTitle}
            onPress={() => navigation.replace(ROUTES.SignUp)}
            borderColor={appStyle.modalButtonTextColor}
            color={appStyle.modalButtonColor}
            textColor={appStyle.modalButtonTextColor}
            width={250}
            height={50}
            borderRadius={40}
            fontSize={15}
          />
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
