export type CustomersType = {
  id?: number;
  first_name?: string;
  last_name?: string;
  password?: string;
  confirmPassword?: string;
  email?: string;
  avatar?: string;
  city?: string;
  mobileNumber?: string;
};

export interface NotificationData {
  id: string;
  body: string;
  title: string;
  isSeen: boolean;
}

export interface ThemeStyles {
  backgroundColor: string;
  color: string;
  borderColor: string;
  tintColor: string;
  shadowColor: string;
  placeholderTextColor: string;
  modalBackgroundColor: string;
  modalTintColor: string;
  modalTextColor: string;
  modalBorderColor: string;
  modalButtonColor: string;
  modalButtonTextColor: string;
  cardBackgroundColor?: string;
  tabBarActiveTintColor: string;
  tabBarInactiveTintColor: string;
  tabBarActiveBackgroundColor: string;
  settingsBackgroundColor: string;
}
