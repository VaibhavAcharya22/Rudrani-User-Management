import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  themeColors,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: themeColors.whiteColor,
  },
  breadCrumbStyle: {
    height: verticalScale(25),
    width: horizontalScale(28),
    tintColor: themeColors.secondaryColor,
  },
  searchIconStyle: {
    height: verticalScale(35),
    width: horizontalScale(38),
    tintColor: themeColors.secondaryColor,
  },
  searchBarView: {
    flexDirection: 'row',
    marginTop: verticalScale(-5),
  },
  iconStyle: {
    padding: verticalScale(15),
  },
  badgeContainer: {
    bottom: verticalScale(40),
    left: horizontalScale(5),
    backgroundColor: themeColors.mainColor,
    borderRadius: moderateScale(10),
    position: 'absolute',
    width: horizontalScale(18),
    height: horizontalScale(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontSize: moderateScale(11),
    fontWeight: 'bold',
    color: themeColors.whiteColor,
  },
  searchTextView: {
    justifyContent: 'center',
    marginRight: horizontalScale(10),
  },
  flatListStyle: {
    marginBottom: verticalScale(45),
  },
  emptyDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeColors.whiteColor,
  },
  emptyDataImage: {
    height: verticalScale(550),
    width: horizontalScale(550),
  },
});

export default styles;
