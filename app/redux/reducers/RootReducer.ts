import {combineReducers} from 'redux';
import manageCustomers from './CustomerReducer';
import manageUsers from './UsersReducer';
import manageAddedUsers from './AddedUsersReducer';
import manageNotifications from './NotificationsReducer';
import manageTheme from './ThemeReducer';

export const rootReducer = combineReducers({
  manageCustomers,
  manageUsers,
  manageAddedUsers,
  manageNotifications,
  manageTheme,
});
