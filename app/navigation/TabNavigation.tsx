import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import {ROUTES} from '../constants';
import {
  tabBarScreenOptions,
  tabCreateUserScreenOptions,
  tabHomeScreenOptions,
  tabProfileScreenOptions,
  tabVideoScreenOptions,
} from './TabNavigationOptions';
import {CreateUser, HomeScreen, ProfileScreen, VideoScreen} from '../modules';
import {useSelector} from 'react-redux';
import {RootState} from '../redux';

const Tab = createBottomTabNavigator();

const TabNavigation: FC = () => {
  const appStyles = useSelector((state: RootState) => state.manageTheme.styles);
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.TabHome}
      screenOptions={tabBarScreenOptions(appStyles)}>
      <Tab.Screen
        name={ROUTES.TabHome}
        component={HomeScreen}
        options={tabHomeScreenOptions(appStyles)}
      />
      <Tab.Screen
        name={ROUTES.CreateUserScreen}
        component={CreateUser}
        options={tabCreateUserScreenOptions(appStyles)}
      />
      <Tab.Screen
        name={ROUTES.VideoScreen}
        component={VideoScreen}
        options={tabVideoScreenOptions(appStyles)}
      />
      <Tab.Screen
        name={ROUTES.ProfileScreen}
        component={ProfileScreen}
        options={tabProfileScreenOptions(appStyles)}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
