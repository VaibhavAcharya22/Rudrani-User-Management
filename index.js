/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import App from './app/App';

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  // Yet to implement this function
});

AppRegistry.registerComponent(appName, () => App);
