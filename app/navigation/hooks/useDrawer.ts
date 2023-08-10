import {useDispatch, useSelector} from 'react-redux';
import notifee, {EventType} from '@notifee/react-native';
import {RootState, manageNotificationActions} from '../../redux';
import {ROUTES} from '../../constants';
import {navigationWithoutParam} from '../../utils';

const useDrawer = () => {
  const dispatch = useDispatch();
  const appStyles = useSelector((state: RootState) => state.manageTheme.styles);
  notifee.onForegroundEvent(({type, detail}) => {
    const data = {
      id: detail?.notification?.id,
      body: detail?.notification?.body,
      title: detail?.notification?.title,
    };
    switch (type) {
      case EventType.DISMISSED:
        dispatch(manageNotificationActions.storeNewNotification({data}));
        break;
      case EventType.PRESS:
        setTimeout(() => {
          navigationWithoutParam(ROUTES.NotificationScreen);
        }, 1200);
        dispatch(manageNotificationActions.storeNewNotification({data}));
        break;
    }
  });

  notifee.onBackgroundEvent(async ({type, detail}) => {
    const data = {
      id: detail?.notification?.id,
      body: detail?.notification?.body,
      title: detail?.notification?.title,
    };
    switch (type) {
      case EventType.DISMISSED:
        dispatch(manageNotificationActions.storeNewNotification({data}));
        break;
      case EventType.PRESS:
        setTimeout(() => {
          navigationWithoutParam(ROUTES.NotificationScreen);
        }, 1200);
        dispatch(manageNotificationActions.storeNewNotification({data}));
        break;
    }
  });
  return {appStyles};
};

export default useDrawer;
