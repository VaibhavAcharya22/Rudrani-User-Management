import {Slice, createSlice} from '@reduxjs/toolkit';
import {sliceNames} from '../../constants';
import {NotificationData} from '../../types';

interface NotificationInitialState {
  notifications: NotificationData[];
  loading: boolean;
  error: object;
}

const initialState: NotificationInitialState = {
  notifications: [],
  loading: false,
  error: {},
};

export const manageNotifications: Slice = createSlice({
  name: sliceNames.notifications,
  initialState,
  reducers: {
    storeNewNotification: (state, action) => {
      state.notifications = [...state.notifications, action.payload?.data];
    },
    deleteNotification: (state, action) => {
      state.notifications.splice(action.payload?.index, 1);
    },
  },
});

export const manageNotificationActions = manageNotifications.actions;
export default manageNotifications.reducer;
