import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  themeColors,
  verticalScale,
} from '../../../theme';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: themeColors.whiteColor,
  },
  startImage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(250),
    width: horizontalScale(370),
  },
  startButtonsContainer: {
    flex: 1,
    paddingBottom: verticalScale(60),
    borderTopLeftRadius: moderateScale(50),
    borderTopRightRadius: moderateScale(50),
    backgroundColor: themeColors.secondaryColor,
    shadowOffset: {
      width: horizontalScale(0),
      height: verticalScale(-4),
    },
    shadowColor: themeColors.blackColor,
    shadowOpacity: moderateScale(0.5),
    shadowRadius: moderateScale(3),
    elevation: moderateScale(20),
  },
  indicatorLine: {
    marginTop: verticalScale(15),
    height: verticalScale(5),
    width: horizontalScale(35),
    borderRadius: moderateScale(10),
    alignSelf: 'center',
    backgroundColor: themeColors.whiteColor,
  },
  signInTitle: {
    marginTop: verticalScale(30),
    marginBottom: verticalScale(20),
    fontSize: moderateScale(25),
    fontWeight: 'bold',
    textAlign: 'center',
    color: themeColors.whiteColor,
  },
  labelStyle: {
    fontWeight: 'bold',
    color: themeColors.whiteColor,
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
    alignSelf: 'flex-end',
    marginRight: horizontalScale(20),
  },
  actualFieldContainView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fieldBelowView: {
    flexDirection: 'row',
  },
  alreadyAccountView: {
    marginTop: verticalScale(10),
  },
  alreadyAccountText: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: themeColors.mainColor,
  },
});

export default styles;
