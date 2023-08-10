import notifee, {AndroidImportance, EventType} from '@notifee/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import {ROUTES, appConstants} from '../constants';
import {globalMetrics} from '../theme';
import {navigationWithParam} from './NavigationServices';

interface NotificationData {
  data: {
    channel_id: string;
    channel_name: string;
    redirect_to: string;
    sound_name: string;
  };
  notification: {
    body: string;
    title: string;
  };
}

export const requestUserPermission = async (): Promise<void> => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) getFcmToken();
};

const getFcmToken = async () => {
  try {
    const androidFcmToken = await AsyncStorage.getItem(
      appConstants.androidFcmToken,
    );
    // Here, i have used console.log to get token & i test notification by testfcm.com
    console.log(androidFcmToken);
    if (!androidFcmToken) {
      const fcmToken = await messaging().getToken();
      await AsyncStorage.setItem(appConstants.androidFcmToken, fcmToken);
    }
  } catch (error) {
    /* here i haven't show anything because it is common for android and IOS 
     so in emulator generate token is not possible so that's why for IOS it will go in this block every time */
  }
};

const onDisplayNotification = async (data: NotificationData) => {
  // Request permissions (required for iOS)
  if (globalMetrics.isIos) {
    await notifee.requestPermission();
  }

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: data?.data?.channel_id,
    name: data?.data?.channel_name,
    sound: data?.data?.sound_name,
    importance: AndroidImportance.HIGH,
  });

  // Display a notification
  await notifee.displayNotification({
    title: data?.notification.title,
    body: data?.notification.body,
    android: {
      channelId,
    },
  });
};

export const notificationListener = async () => {
  const unsubscribe = messaging().onMessage(async remoteMessage => {
    onDisplayNotification(remoteMessage as unknown as NotificationData);
  });

  messaging().onNotificationOpenedApp(remoteMessage => {
    if (
      !!remoteMessage?.data &&
      remoteMessage?.data?.redirect_to === ROUTES.NotificationScreen
    ) {
      const data = {
        body: remoteMessage?.notification?.body,
        title: remoteMessage?.notification?.title,
      };
      setTimeout(() => {
        navigationWithParam(ROUTES.NotificationScreen, {
          data: data,
        });
      }, 1200);
    }
  });
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    if (
      !!remoteMessage?.data &&
      remoteMessage?.data?.redirect_to === ROUTES.NotificationScreen
    ) {
      const data = {
        body: remoteMessage?.notification?.body,
        title: remoteMessage?.notification?.title,
      };
      setTimeout(() => {
        navigationWithParam(ROUTES.NotificationScreen, {
          data: data,
        });
      }, 1200);
    }
  });

  return unsubscribe;
};
