import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  themeColors,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.whiteColor,
    paddingBottom: verticalScale(50),
  },
  imageStyle: {
    alignSelf: 'center',
    tintColor: themeColors.lightPurple,
    marginVertical: verticalScale(50),
    height: horizontalScale(170),
    width: horizontalScale(170),
    borderRadius: moderateScale(10),
    borderWidth: moderateScale(4),
    borderColor: themeColors.lightPurple,
  },
  uploadImageStyle: {
    alignSelf: 'center',
    marginVertical: verticalScale(50),
    height: horizontalScale(170),
    width: horizontalScale(170),
    borderRadius: moderateScale(10),
    borderWidth: moderateScale(4),
    borderColor: themeColors.lightPurple,
  },
  mainView: {
    flex: 1,
    backgroundColor: themeColors.whiteColor,
  },
  startButtonsContainer: {
    flex: 1,
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
  signInButton: {
    alignSelf: 'center',
    marginBottom: verticalScale(50),
  },
  actualFieldContainView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fieldBelowView: {
    flexDirection: 'row',
  },
});

export default styles;
