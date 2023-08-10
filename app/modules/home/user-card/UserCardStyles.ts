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
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themeColors.whiteColor,
  },
  container: {
    flex: 1,
    marginVertical: verticalScale(15),
    marginBottom: verticalScale(30),
    borderRadius: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themeColors.mainColor,
    shadowOffset: {
      width: 0,
      height: verticalScale(-3),
    },
    shadowColor: themeColors.blackColor,
    shadowOpacity: moderateScale(0.4),
    shadowRadius: moderateScale(5),
    elevation: moderateScale(20),
  },
  imageStyle: {
    marginTop: verticalScale(20),
    height: horizontalScale(90),
    width: horizontalScale(90),
    borderRadius: moderateScale(50),
  },
  nameContainer: {
    width: horizontalScale(165),
    marginTop: verticalScale(30),
    borderRadius: moderateScale(10),
    padding: moderateScale(5),
    alignSelf: 'center',
    borderWidth: moderateScale(2),
    borderColor: themeColors.whiteColor,
    backgroundColor: themeColors.secondaryColor,
  },
  nameStyle: {
    marginTop: verticalScale(5),
    color: themeColors.whiteColor,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cityStyle: {
    marginVertical: verticalScale(5),
    color: themeColors.whiteColor,
    fontSize: moderateScale(10),
    textAlign: 'center',
  },
});

export default styles;
