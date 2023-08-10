import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {ROUTES} from '../constants';
import {
  ChangePassword,
  LoginScreen,
  NotificationScreen,
  SettingsScreen,
  SignUpDataScreen,
  SignUpScreen,
  SplashScreen,
  UserDetails,
  VideoPlayer,
  WelcomeScreen,
} from '../modules';
import DrawerNavigation from './DrawerNavigation';
import {stackNavigationOptions} from './StackNavigationOptions';
import {navigationRef} from '../App';
import {useColorScheme} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {manageThemeActions} from '../redux/reducers/ThemeReducer';
import {RootState} from '../redux';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const dispatch = useDispatch();
  const systemDefaultTheme = useColorScheme();
  const isSystemDefault = useSelector(
    (state: RootState) => state.manageTheme.isSystemDefault,
  );

  useEffect(() => {
    if (isSystemDefault)
      dispatch(
        manageThemeActions.systemDefaultTheme({
          systemTheme: systemDefaultTheme,
        }),
      );
  }, [systemDefaultTheme]);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={ROUTES.SplashScreen}
        screenOptions={stackNavigationOptions.screenOptions}>
        <Stack.Screen name={ROUTES.SplashScreen} component={SplashScreen} />
        <Stack.Screen name={ROUTES.WelcomeScreen} component={WelcomeScreen} />
        <Stack.Screen name={ROUTES.Login} component={LoginScreen} />
        <Stack.Screen name={ROUTES.SignUp} component={SignUpScreen} />
        <Stack.Screen name={ROUTES.SignUpData} component={SignUpDataScreen} />
        <Stack.Screen name={ROUTES.Drawer} component={DrawerNavigation} />
        <Stack.Screen
          name={ROUTES.UserDetailsScreen}
          component={UserDetails}
          options={stackNavigationOptions.userDetailsOptions}
        />
        <Stack.Screen
          name={ROUTES.VideoDetailsScreen}
          component={VideoPlayer}
          options={stackNavigationOptions.videoDetailsOptions}
        />
        <Stack.Screen
          name={ROUTES.SettingsScreen}
          component={SettingsScreen}
          options={stackNavigationOptions.settingsScreenOptions}
        />
        <Stack.Screen
          name={ROUTES.ChangePasswordScreen}
          component={ChangePassword}
          options={stackNavigationOptions.changePasswordOptions}
        />
        <Stack.Screen
          name={ROUTES.NotificationScreen}
          component={NotificationScreen}
          options={stackNavigationOptions.notificationScreenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
