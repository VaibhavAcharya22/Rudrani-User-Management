import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  themeColors,
  verticalScale,
} from '../../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: themeColors.whiteColor,
  },
  ChangePasswordContainer: {
    height: '42%',
    backgroundColor: themeColors.whiteColor,
    borderRadius: moderateScale(20),
    margin: moderateScale(10),
    shadowOffset: {
      width: horizontalScale(0),
      height: verticalScale(-1),
    },
    shadowColor: themeColors.blackColor,
    shadowOpacity: moderateScale(0.2),
    shadowRadius: moderateScale(5),
    elevation: moderateScale(20),
  },
  signInFields: {
    marginTop: verticalScale(30),
    marginBottom: verticalScale(20),
  },
  labelStyle: {
    fontWeight: 'bold',
    color: themeColors.greyColor,
    marginLeft: horizontalScale(25),
  },
  errorMsgView: {
    marginTop: verticalScale(20),
    marginLeft: horizontalScale(40),
  },
  errorMsg: {
    color: themeColors.redColor,
  },
  signInButton: {
    marginTop: verticalScale(40),
    alignSelf: 'center',
  },
  actualFieldContainView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fieldBelowView: {
    flexDirection: 'row',
  },
  fieldsContainer: {
    marginTop: verticalScale(30),
  },
  textInputContainer: {
    marginTop: verticalScale(20),
  },
});

export default styles;
