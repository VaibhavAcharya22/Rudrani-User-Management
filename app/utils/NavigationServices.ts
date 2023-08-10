import {CommonActions, StackActions} from '@react-navigation/native';
import {navigationRef} from '../App';

const navigationCheck = (moveCallback: Function) => {
  if (!navigationRef.isReady()) {
    setTimeout(() => navigationCheck(moveCallback), 50);
  } else {
    moveCallback?.();
  }
};

const navigationReplace = (routeName: string, params = {}) => {
  navigationCheck(() => {
    const replaceAction = StackActions.replace(routeName, params);
    navigationRef.dispatch(replaceAction);
  });
};

const navigateBack = () => {
  navigationCheck(() => {
    const backAction = CommonActions.goBack();
    navigationRef.dispatch(backAction);
  });
};

const navigationWithParam = (routeName: string, params = {}) => {
  navigationCheck(() => {
    const navigateAction = CommonActions.navigate({
      name: routeName,
      params,
    });
    navigationRef.dispatch(navigateAction);
  });
};

const navigationWithoutParam = (routeName: string) => {
  navigationCheck(() => {
    const navigateAction = CommonActions.navigate({
      name: routeName,
    });
    navigationRef.dispatch(navigateAction);
  });
};

export {
  navigationReplace,
  navigationWithParam,
  navigateBack,
  navigationWithoutParam,
};
