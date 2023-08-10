import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  themeColors,
  verticalScale,
} from '../../../theme';

const styles = StyleSheet.create({
  themeDetailsContainer: {
    height: '14%',
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
    elevation: moderateScale(5),
  },
  accountContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(10),
    alignItems: 'center',
    marginLeft: horizontalScale(15),
  },
  themeOptionsContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(10),
    alignItems: 'center',
    marginLeft: horizontalScale(15),
  },
  accountIcon: {
    height: verticalScale(27),
    width: horizontalScale(27),
    tintColor: themeColors.secondaryColor,
  },
  accountTitle: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: themeColors.secondaryColor,
    marginLeft: horizontalScale(10),
  },
  borderContainer: {
    marginTop: verticalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderView: {
    borderWidth: moderateScale(0.5),
    width: '95%',
    opacity: moderateScale(0.04),
  },
  themeFieldsContainer: {
    marginLeft: horizontalScale(30),
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedThemeIcon: {
    height: verticalScale(27),
    width: horizontalScale(27),
    marginLeft: horizontalScale(15),
    tintColor: themeColors.secondaryColor,
    position: 'absolute',
  },
  fieldsText: {
    fontSize: moderateScale(14),
    color: themeColors.greyColor,
    marginLeft: horizontalScale(10),
  },
});

export default styles;
