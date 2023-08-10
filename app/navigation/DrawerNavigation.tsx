import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {FC} from 'react';
import {CustomDrawer} from '../components';
import {ROUTES} from '../constants';
import {options, screenOptions} from './DrawerNavigationOptions';
import TabNavigation from './TabNavigation';
import {useDrawer} from './hooks';

const Drawer = createDrawerNavigator();

// Component for home screen navigation
const DrawerNavigation: FC = () => {
  const {appStyles} = useDrawer();

  return (
    <Drawer.Navigator
      screenOptions={screenOptions(appStyles)}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name={ROUTES.DrawerHome}
        component={TabNavigation}
        options={options(appStyles)}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
