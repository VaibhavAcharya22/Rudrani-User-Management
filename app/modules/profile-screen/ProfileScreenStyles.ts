import {StyleSheet} from 'react-native';
import {
  dimensionMetrics,
  horizontalScale,
  moderateScale,
  themeColors,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.whiteColor,
  },
  profileImageContainer: {
    zIndex: 1,
    position: 'absolute',
    alignSelf: 'center',
    marginTop: verticalScale(80),
  },
  imageStyle: {
    alignSelf: 'center',
    height: horizontalScale(170),
    width: horizontalScale(170),
    borderRadius: moderateScale(100),
    borderWidth: moderateScale(4),
    borderColor: themeColors.mainColor,
    backgroundColor: themeColors.whiteColor,
  },
  updateImageContainer: {
    zIndex: 1,
    marginTop: verticalScale(-60),
    padding: moderateScale(7),
    backgroundColor: themeColors.secondaryColor,
    borderRadius: moderateScale(30),
    marginLeft: horizontalScale(dimensionMetrics.windowWidth / 2.9),
    borderWidth: moderateScale(3),
    borderColor: themeColors.mainColor,
    alignItems: 'center',
  },
  updateImage: {
    tintColor: themeColors.mainColor,
    height: moderateScale(25),
    width: moderateScale(25),
  },
  detailsContainer: {
    height: verticalScale(160),
    width: '100%',
    backgroundColor: themeColors.secondaryColor,
  },
  mainView: {
    flex: 1,
    backgroundColor: themeColors.whiteColor,
    marginTop: verticalScale(40),
  },
  startButtonsContainer: {
    flex: 1,
    marginTop: verticalScale(40),
    paddingBottom: verticalScale(60),
  },
  labelStyle: {
    fontWeight: 'bold',
    color: themeColors.secondaryColor,
    marginLeft: horizontalScale(45),
  },
  signInFields: {
    marginTop: verticalScale(10),
    marginBottom: verticalScale(20),
  },
  errorMsgView: {
    marginTop: verticalScale(-10),
    marginLeft: horizontalScale(50),
    marginBottom: verticalScale(10),
  },
  errorMsg: {
    color: themeColors.redColor,
  },
  profileDetailsMainView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(150),
  },
  firstLastNameStyle: {
    fontSize: moderateScale(25),
    fontWeight: 'bold',
    color: themeColors.secondaryColor,
  },
  nameBelowStyle: {
    marginTop: verticalScale(10),
    fontSize: moderateScale(17),
    color: themeColors.secondaryColor,
  },
  signInButton: {
    alignSelf: 'center',
    marginTop: verticalScale(30),
  },
  actualFieldContainView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fieldBelowView: {
    flexDirection: 'row',
  },
  updateProfileTitle: {
    fontSize: moderateScale(25),
    color: themeColors.secondaryColor,
    textAlign: 'center',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  closeBtnContainer: {
    width: '95%',
    position: 'absolute',
    flexDirection: 'row-reverse',
  },
  closeBtn: {
    height: horizontalScale(35),
    width: horizontalScale(35),
  },
});

export default styles;
