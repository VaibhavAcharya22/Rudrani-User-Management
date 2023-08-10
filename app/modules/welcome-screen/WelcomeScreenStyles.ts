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
    backgroundColor: themeColors.whiteColor,
  },
  carouselStyle: {
    paddingBottom: verticalScale(350),
  },
  startImage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(350),
    width: horizontalScale(370),
  },
  startButtonsContainer: {
    flex: 1,
    borderTopLeftRadius: moderateScale(50),
    borderTopRightRadius: moderateScale(50),
    backgroundColor: themeColors.secondaryColor,
    shadowOffset: {width: 0, height: -4},
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
  welcomeText: {
    marginLeft: horizontalScale(40),
    marginTop: verticalScale(50),
    fontSize: moderateScale(28),
    fontWeight: 'bold',
    color: themeColors.whiteColor,
  },
  welcomeDesc: {
    marginLeft: horizontalScale(45),
    marginRight: horizontalScale(30),
    opacity: moderateScale(0.8),
    marginTop: verticalScale(10),
    textAlign: 'justify',
    fontSize: moderateScale(14),
    color: themeColors.whiteColor,
  },
  authButtons: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  SignInButton: {
    marginTop: verticalScale(50),
    marginBottom: verticalScale(20),
  },
});

export default styles;
