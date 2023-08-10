import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  themeColors,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  headerView: {
    flex: 1,
    paddingTop: verticalScale(40),
    backgroundColor: themeColors.whiteColor,
  },
  profileImageView: {
    flex: 1,
    alignItems: 'center',
  },
  userNameStyle: {
    marginVertical: verticalScale(5),
    color: themeColors.secondaryColor,
    fontWeight: 'bold',
  },
  userEmailStyle: {
    fontSize: moderateScale(12),
    color: themeColors.secondaryColor,
  },
  drawerItemsContainView: {
    marginTop: verticalScale(20),
  },
  drawerItemIconStyle: {
    height: verticalScale(30),
    width: horizontalScale(38),
    tintColor: themeColors.secondaryColor,
  },
  profileImage: {
    height: moderateScale(100),
    width: moderateScale(100),
    borderRadius: moderateScale(60),
    borderColor: themeColors.mainColor,
    borderWidth: moderateScale(4),
  },
  profileNameView: {
    marginVertical: verticalScale(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerLabelView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerLabel: {
    color: themeColors.secondaryColor,
    fontSize: moderateScale(13),
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: verticalScale(20),
  },
  logoutLogo: {
    marginRight: horizontalScale(30),
  },
  logoutItem: {
    marginVertical: verticalScale(10),
  },
  drawerItemLabel: {
    paddingLeft: horizontalScale(-20),
    color: themeColors.secondaryColor,
  },
  drawerItemStyle: {
    paddingHorizontal: horizontalScale(20),
  },
});

export default styles;
