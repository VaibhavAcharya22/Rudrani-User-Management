import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  themeColors,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: themeColors.mainColor,
  },
  notificationContainer: {
    backgroundColor: themeColors.whiteColor,
    flexDirection: 'row',
    width: '100%',
    marginTop: verticalScale(10),
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(10),
    borderRadius: moderateScale(30),
  },
  notificationIconContainer: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationIconStyle: {
    tintColor: themeColors.secondaryColor,
    opacity: moderateScale(0.2),
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: moderateScale(50),
  },
  notificationMessageContainer: {
    width: '75%',
    marginLeft: horizontalScale(10),
  },
  notificationTitle: {
    color: themeColors.secondaryColor,
    fontWeight: 'bold',
  },
  notificationBody: {
    color: themeColors.greyColor,
    fontSize: moderateScale(13),
    marginTop: verticalScale(5),
  },
  closeIconContainer: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    height: moderateScale(35),
    width: moderateScale(35),
    borderRadius: moderateScale(50),
  },
  emptyNotificationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeColors.whiteColor,
  },
  emptyNotificationImage: {
    height: verticalScale(300),
    width: horizontalScale(300),
  },
  flatlistContainerStyle: {
    flex: 1,
  },
  noNotificationDescription: {
    color: themeColors.greyColor,
    marginBottom: verticalScale(150),
    opacity: moderateScale(0.4),
  },
});

export default styles;
