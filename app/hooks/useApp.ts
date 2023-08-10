import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {notificationListener, requestUserPermission} from '../utils';
import {globalMetrics} from '../theme';
import {PermissionsAndroid} from 'react-native';

export const useApp = () => {
  useEffect(() => {
    SplashScreen.hide();
    if (globalMetrics.isAndroid) {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      ).then(res => {
        if (res === 'never_ask_again' || res === 'granted') {
          requestUserPermission();
          notificationListener();
        }
      });
    }
  }, []);
};
