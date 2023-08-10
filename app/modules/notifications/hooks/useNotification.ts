import {RouteProp, useRoute} from '@react-navigation/native';
import {useEffect} from 'react';
import {RootState, manageNotificationActions} from '../../../redux';
import {useDispatch, useSelector} from 'react-redux';
import {NotificationData} from '../../../types';

export interface NotificationHookReturnType {
  savedNotifications: NotificationData[];
  deleteNotification: (index: number) => void;
}

type NotificationRouteData = {
  BackgroundNotification: {
    data: {
      id?: string;
      body: string;
      title: string;
      isSeen?: boolean;
    };
  };
};

const useNotification = (): NotificationHookReturnType => {
  const dispatch = useDispatch();
  const route =
    useRoute<RouteProp<NotificationRouteData, 'BackgroundNotification'>>();

  const savedNotifications = useSelector(
    (state: RootState) => state.manageNotifications.notifications,
  );

  const deleteNotification = (index: number): void => {
    dispatch(manageNotificationActions.deleteNotification({index}));
  };

  useEffect(() => {
    if (route.params?.data) {
      dispatch(
        manageNotificationActions.storeNewNotification({
          data: route.params?.data,
        }),
      );
    }
  }, []);

  return {savedNotifications, deleteNotification};
};
export default useNotification;
