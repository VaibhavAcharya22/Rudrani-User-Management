import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  themeColors,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  mainTouchableOpacityStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeColors.purpleWithAlphaPlace,
  },
  mainContainer: {
    backgroundColor: themeColors.whiteColor,
    paddingVertical: moderateScale(30),
    paddingHorizontal: horizontalScale(60),
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: moderateScale(20),
  },
  galleryIconContainer: {
    backgroundColor: themeColors.secondaryColor,
    borderRadius: moderateScale(20),
    height: verticalScale(80),
    justifyContent: 'center',
    alignItems: 'center',
    width: horizontalScale(80),
    marginRight: horizontalScale(40),
  },
  galleryTextStyle: {
    color: themeColors.secondaryColor,
    textAlign: 'center',
    marginTop: verticalScale(10),
    marginRight: horizontalScale(43),
    fontWeight: 'bold',
  },
  cameraIconContainer: {
    backgroundColor: themeColors.secondaryColor,
    borderRadius: moderateScale(20),
    height: verticalScale(80),
    justifyContent: 'center',
    alignItems: 'center',
    width: horizontalScale(80),
  },
  cameraTextStyle: {
    color: themeColors.secondaryColor,
    textAlign: 'center',
    marginTop: verticalScale(10),
    fontWeight: 'bold',
  },
  iconsImageStyle: {
    tintColor: themeColors.whiteColor,
    height: verticalScale(40),
    width: horizontalScale(40),
  },
});

export default styles;
