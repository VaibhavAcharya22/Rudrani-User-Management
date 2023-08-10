import {RouteProp, useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux';
import {CustomersType, ThemeStyles} from '../../../../types';
import {TextStyle, ViewStyle} from 'react-native';

interface ThemeStyleType {
  container: ViewStyle;
  detailsContainer: ViewStyle;
  labelStyle: TextStyle;
  nameStyle: TextStyle;
  emailStyle: TextStyle;
}

export interface UserDetailsHookReturnType {
  userDetails: CustomersType;
  users: CustomersType[];
  userFilter: (isPlus: boolean) => void;
  setUserId: React.Dispatch<React.SetStateAction<number>>;
  appStyles: ThemeStyles;
  themeStyles: ThemeStyleType;
}

type UserType = {
  UserDetails: {
    userDetails: {
      id: number;
      first_name: string;
      last_name: string;
      email: string;
      avatar: string;
    };
  };
};

const useUserDetails = (): UserDetailsHookReturnType => {
  const route = useRoute<RouteProp<UserType, 'UserDetails'>>();
  const [userId, setUserId] = useState<number>(route.params.userDetails?.id);
  const [userDetails, setUserDetails] = useState<CustomersType>(
    route.params.userDetails,
  );
  const users = useSelector((state: RootState) => state.manageUsers.users);

  const userFilter = (isPlus: boolean) => {
    if (isPlus) {
      if (userId < users.length) {
        setUserId(uId => uId + 1);
      }
    } else {
      if (userId > 1) {
        setUserId(uId => uId - 1);
      }
    }
  };

  useEffect(() => {
    const res = users.filter(item => item?.id === userId);
    if (res?.length == 1) setUserDetails(res?.[0]);
  }, [userId]);

  const appStyles = useSelector((state: RootState) => state.manageTheme.styles);
  const themeStyles: ThemeStyleType = {
    container: {
      backgroundColor: appStyles.backgroundColor,
    },
    detailsContainer: {
      backgroundColor: appStyles.cardBackgroundColor,
    },
    labelStyle: {
      color: appStyles.modalButtonTextColor,
    },
    nameStyle: {
      color: appStyles.modalButtonTextColor,
    },
    emailStyle: {
      color: appStyles.modalButtonTextColor,
    },
  };

  return {
    userDetails,
    users,
    appStyles,
    themeStyles,
    userFilter,
    setUserId,
  };
};

export default useUserDetails;
