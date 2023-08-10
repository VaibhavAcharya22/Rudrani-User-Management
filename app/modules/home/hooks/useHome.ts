import {DrawerNavigationProp} from '@react-navigation/drawer';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {useEffect, useRef, useState} from 'react';
import {ImageStyle, TextInput, ViewStyle} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux';
import {manageUserActions} from '../../../redux/reducers/UsersReducer';
import {getData} from '../../../services';
import {CustomersType, NotificationData} from '../../../types';

interface ThemeStyleType {
  safeAreaView: ViewStyle;
  breadCrumbStyle: ImageStyle;
  searchIconStyle: ImageStyle;
}

export interface HomeHookReturnType {
  navigation: DrawerNavigationProp<ParamListBase>;
  searchRef: React.RefObject<TextInput>;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  displayUsers: CustomersType[];
  savedNotifications: NotificationData[];
  themeStyles: ThemeStyleType;
}

const useHome = (): HomeHookReturnType => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();
  const searchRef = useRef<TextInput>(null);
  const [searchText, setSearchText] = useState<string>('');
  const [result, setResult] = useState<CustomersType[]>([]);
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1);
  const users = useSelector((state: RootState) => state.manageUsers.users);
  const addedUsers = useSelector(
    (state: RootState) => state.manageAddedUsers.addedUsers,
  );
  const loadedPages = useSelector(
    (state: RootState) => state.manageUsers.loadedPages,
  );
  const savedNotifications = useSelector(
    (state: RootState) => state.manageNotifications.notifications,
  );

  const appStyles = useSelector((state: RootState) => state.manageTheme.styles);
  const themeStyles: ThemeStyleType = {
    safeAreaView: {
      backgroundColor: appStyles.backgroundColor,
    },
    breadCrumbStyle: {
      tintColor: appStyles.tintColor,
    },
    searchIconStyle: {
      tintColor: appStyles.tintColor,
    },
  };

  const retrieveUsers = async (): Promise<void> => {
    const res = await getData(page);
    dispatch(manageUserActions.getUsersSuccess(res?.data));
    dispatch(manageUserActions.succeedPages({page}));
  };

  const search = async (): Promise<void> => {
    const combinedUsers = addedUsers.concat(users);
    const res = combinedUsers.filter(
      user =>
        user?.first_name?.search(searchText) !== -1 ||
        user?.last_name?.search(searchText) !== -1,
    );
    setResult(res);
  };

  useEffect(() => {
    const isHasLoadPages = loadedPages === 1 && users?.length === 6;
    if (loadedPages === 0 || isHasLoadPages) retrieveUsers();
  }, [page]);

  useEffect(() => {
    if (searchText.length !== 0) search();
    else setResult([]);
  }, [searchText]);

  const displayUsers =
    result?.length !== 0 || (searchText.length !== 0 && result?.length === 0)
      ? result
      : addedUsers.concat(users);

  return {
    displayUsers,
    page,
    savedNotifications,
    setPage,
    themeStyles,
    navigation,
    searchRef,
    searchText,
    setSearchText,
  };
};

export default useHome;
