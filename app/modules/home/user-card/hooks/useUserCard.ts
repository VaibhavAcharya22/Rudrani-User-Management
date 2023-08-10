import {DrawerNavigationProp} from '@react-navigation/drawer';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux';
import {TextStyle, ViewStyle} from 'react-native';

interface ThemeStyleType {
  mainContainer: ViewStyle;
  container: ViewStyle;
  nameContainer: ViewStyle;
  nameStyle: TextStyle;
  cityStyle: TextStyle;
}

export interface UserCardHookReturnType {
  navigation: DrawerNavigationProp<ParamListBase>;
  themeStyles: ThemeStyleType;
}
const useUserCard = (): UserCardHookReturnType => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();
  const appStyles = useSelector((state: RootState) => state.manageTheme.styles);
  const themeStyles: ThemeStyleType = {
    mainContainer: {
      backgroundColor: appStyles.backgroundColor,
    },
    container: {
      backgroundColor: appStyles.cardBackgroundColor,
      shadowColor: appStyles.shadowColor,
    },
    nameContainer: {
      borderColor: appStyles.borderColor,
      backgroundColor: appStyles.backgroundColor,
    },
    nameStyle: {
      color: appStyles.color,
    },
    cityStyle: {
      color: appStyles.color,
    },
  };
  return {
    navigation,
    themeStyles,
  };
};

export default useUserCard;
