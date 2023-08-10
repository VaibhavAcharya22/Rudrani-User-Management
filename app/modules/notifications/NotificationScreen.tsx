import React, {FC} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Images} from '../../assets';
import {NotificationStrings} from '../../constants';
import styles from './NotificationStyles';
import {useNotification} from './hooks';
import {NotificationHookReturnType} from './hooks/useNotification';
import {NotificationData} from '../../types';

interface NotificationCardProps {
  item: NotificationData;
  index: number;
  deleteNotification: (index: number) => void;
}

const EmptyNotification: FC = () => {
  return (
    <View style={styles.emptyNotificationContainer}>
      <Image
        source={Images.emptyNotifications}
        style={styles.emptyNotificationImage}
      />
      <Text style={styles.noNotificationDescription}>
        {NotificationStrings.noNotificationsPresentDesc}
      </Text>
    </View>
  );
};

const NotificationCard: FC<NotificationCardProps> = ({
  item,
  index,
  deleteNotification,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.notificationContainer}>
        <View style={styles.notificationIconContainer}>
          <Image
            source={Images.notifications}
            style={styles.notificationIconStyle}
          />
        </View>
        <View style={styles.notificationMessageContainer}>
          <Text style={styles.notificationTitle}>{item?.title}</Text>
          <Text style={styles.notificationBody}>{item?.body}</Text>
        </View>
        <TouchableOpacity onPress={() => deleteNotification(index)}>
          <View style={styles.closeIconContainer}>
            <Image source={Images.closeIcon} style={styles.closeIcon} />
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const NotificationScreen: FC = () => {
  const {savedNotifications, deleteNotification}: NotificationHookReturnType =
    useNotification();

  return (
    <View style={styles.mainView}>
      <FlatList
        contentContainerStyle={styles.flatlistContainerStyle}
        ListEmptyComponent={() => <EmptyNotification />}
        keyExtractor={(item, index) => item?.id + index}
        data={savedNotifications}
        renderItem={({item, index}) => (
          <NotificationCard
            item={item}
            index={index}
            deleteNotification={deleteNotification}
          />
        )}
      />
    </View>
  );
};

export default NotificationScreen;
