import {StyleSheet} from 'react-native';
import {
  dimensionMetrics,
  horizontalScale,
  moderateScale,
  themeColors,
  verticalScale,
} from '../../../theme';

const styles = StyleSheet.create({
  posterImageContainer: {
    flex: 1,
    paddingBottom: moderateScale(20),
    marginBottom: verticalScale(10),
    borderWidth: moderateScale(3),
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: themeColors.mainColor,
    elevation: moderateScale(3),
  },
  posterImage: {
    height: verticalScale(250),
    width: '100%',
  },
  durationContainer: {
    position: 'absolute',
    backgroundColor: themeColors.greyColor,
    padding: moderateScale(3),
    borderRadius: moderateScale(5),
    marginLeft: dimensionMetrics.windowWidth - horizontalScale(60),
    marginTop: verticalScale(210),
  },
  durationText: {
    fontSize: moderateScale(15),
    color: themeColors.whiteColor,
  },
  posterBelowContainer: {
    flexDirection: 'row',
  },
  uploaderImageContainer: {
    marginTop: verticalScale(20),
    marginLeft: horizontalScale(10),
  },
  uploaderImage: {
    height: horizontalScale(45),
    width: horizontalScale(45),
    borderRadius: horizontalScale(45),
  },
  videoTitle: {
    fontSize: moderateScale(15),
    marginTop: verticalScale(22),
    marginLeft: horizontalScale(10),
    color: themeColors.secondaryColor,
    fontWeight: 'bold',
  },
  viewsText: {
    marginTop: verticalScale(5),
    marginLeft: horizontalScale(10),
    color: themeColors.blackColor,
  },
});

export default styles;
