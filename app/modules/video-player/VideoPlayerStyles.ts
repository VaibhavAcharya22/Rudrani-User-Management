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
  },
  backgroundVideo: {
    height: '38%',
    width: '100%',
  },
  videoBelowView: {
    flexDirection: 'row',
    width: '100%',
  },
  videoFlatList: {
    marginTop: verticalScale(20),
  },
  uploaderImageView: {
    marginTop: verticalScale(20),
    marginLeft: horizontalScale(10),
    width: '12%',
  },
  uploaderImage: {
    height: horizontalScale(45),
    width: horizontalScale(45),
    borderRadius: horizontalScale(45),
  },
  videoTitleContainer: {
    width: '72%',
  },
  videoTitle: {
    fontSize: moderateScale(13),
    marginTop: verticalScale(20),
    marginLeft: horizontalScale(10),
    color: themeColors.secondaryColor,
    fontWeight: 'bold',
  },
  videoViewsText: {
    fontSize: moderateScale(12),
    marginTop: verticalScale(5),
    marginLeft: horizontalScale(10),
    color: themeColors.blackColor,
  },
  detailsArrowIcon: {
    height: horizontalScale(25),
    width: horizontalScale(25),
    marginTop: verticalScale(25),
    marginLeft: horizontalScale(10),
    alignSelf: 'center',
    tintColor: themeColors.secondaryColor,
  },
});

export default styles;
