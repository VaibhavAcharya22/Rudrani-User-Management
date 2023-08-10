import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  themeColors,
  verticalScale,
} from '../../../theme';

const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'flex-end',
  },
  touchableOpacityStyle: {
    flex: 1,
  },
  mainContainer: {
    paddingBottom: verticalScale(10),
    borderTopLeftRadius: moderateScale(50),
    borderTopRightRadius: moderateScale(50),
    backgroundColor: themeColors.secondaryColor,
    shadowOffset: {
      width: 0,
      height: verticalScale(-4),
    },
    shadowColor: themeColors.blackColor,
    shadowOpacity: moderateScale(0.5),
    shadowRadius: moderateScale(3),
    elevation: moderateScale(20),
  },
  selectedThemeIcon: {
    height: verticalScale(30),
    width: horizontalScale(30),
    tintColor: themeColors.whiteColor,
  },
  optionsContainer: {
    marginTop: verticalScale(20),
  },
  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(40),
    justifyContent: 'space-between',
    marginTop: verticalScale(20),
  },
  textStyle: {
    color: themeColors.whiteColor,
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    textAlign: 'left',
  },
  borderStyle: {
    opacity: moderateScale(0.2),
    width: '80%',
    alignSelf: 'center',
    borderBottomColor: themeColors.whiteColor,
    borderBottomWidth: moderateScale(0.2),
    marginTop: verticalScale(20),
  },
});

export default styles;
