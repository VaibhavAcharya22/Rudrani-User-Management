import {
  check,
  RESULTS,
  Permission,
  request,
  openSettings,
} from 'react-native-permissions';
import {customAlert} from './custom-alert';
import {
  ErrorPermissionCheckingStrings,
  FeatureNotAvailableAlertStrings,
  PermissionBlockedAlertStrings,
} from '../constants';

export const checkPermission = async (
  permission: Permission,
): Promise<boolean> => {
  try {
    const result = await check(permission);
    switch (result) {
      case RESULTS.UNAVAILABLE:
        customAlert({
          title: FeatureNotAvailableAlertStrings.title,
          desc: FeatureNotAvailableAlertStrings.desc,
        });
        return false;

      case RESULTS.DENIED:
        const requestedResult = await requestPermission(permission);
        return requestedResult;

      case RESULTS.GRANTED:
        return true;

      case RESULTS.LIMITED:
        return true;

      case RESULTS.BLOCKED:
        customAlert({
          title: PermissionBlockedAlertStrings.title,
          desc: PermissionBlockedAlertStrings.desc,
          positiveBtnText: PermissionBlockedAlertStrings.positiveBtnText,
          onPress: openSettings,
        });
        return false;

      default:
        return false;
    }
  } catch (e) {
    customAlert({
      title: ErrorPermissionCheckingStrings.title,
      desc: ErrorPermissionCheckingStrings.desc,
    });
    return false;
  }
};

const requestPermission = async (permission: Permission): Promise<boolean> => {
  try {
    const result = await request(permission);
    switch (result) {
      case RESULTS.UNAVAILABLE:
        return false;

      case RESULTS.DENIED:
        return false;

      case RESULTS.GRANTED:
        return true;

      case RESULTS.LIMITED:
        return true;

      case RESULTS.BLOCKED:
        customAlert({
          title: PermissionBlockedAlertStrings.title,
          desc: PermissionBlockedAlertStrings.desc,
          positiveBtnText: PermissionBlockedAlertStrings.positiveBtnText,
          onPress: openSettings,
        });
        return false;

      default:
        return false;
    }
  } catch (error) {
    customAlert({
      title: ErrorPermissionCheckingStrings.title,
      desc: ErrorPermissionCheckingStrings.desc,
    });
    return false;
  }
};
