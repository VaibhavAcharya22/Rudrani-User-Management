import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {ROUTES} from '../../../constants';
import {RootState} from '../../../redux';
import {CustomersType} from '../../../types';
import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

interface ThemeStyleTypes {
  headerView: ViewStyle;
  userNameStyle: TextStyle;
  userEmailStyle: TextStyle;
  drawerItemIconStyle: ImageStyle;
  footerLabel: TextStyle;
  drawerItemLabel: TextStyle;
}

export interface CustomDrawerHookReturnType {
  navigation: StackNavigationProp<ParamListBase>;
  logoutOnPress: () => Promise<void>;
  loggedInUser: CustomersType;
  themeStyles: ThemeStyleTypes;
}

const useCustomDrawer = (): CustomDrawerHookReturnType => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  // Function to handle user logout
  const logoutOnPress = async () => {
    navigation.replace(ROUTES.Login);
  };
  const loggedInUser = useSelector(
    (state: RootState) => state.manageCustomers.loggedInUser,
  );
  const appStyles = useSelector((state: RootState) => state.manageTheme.styles);
  const themeStyles: ThemeStyleTypes = {
    headerView: {
      backgroundColor: appStyles.backgroundColor,
    },
    userNameStyle: {
      color: appStyles.color,
    },
    userEmailStyle: {
      color: appStyles.color,
    },
    drawerItemIconStyle: {
      tintColor: appStyles.color,
    },
    footerLabel: {
      color: appStyles.color,
    },
    drawerItemLabel: {
      color: appStyles.color,
    },
  };

  return {
    navigation,
    logoutOnPress,
    loggedInUser,
    themeStyles,
  };
};

export default useCustomDrawer;
