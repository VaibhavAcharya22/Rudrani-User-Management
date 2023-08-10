import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  themeColors,
  verticalScale,
} from '../../../theme';

const styles = StyleSheet.create({
  mainView: {
    marginTop: verticalScale(15),
  },
  videoViewsUploadDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  videoViews: {
    fontSize: moderateScale(20),
    textAlign: 'center',
    color: themeColors.secondaryColor,
    fontWeight: 'bold',
  },
  videoViewsTitle: {
    fontSize: moderateScale(12),
    textAlign: 'center',
    color: themeColors.greyColor,
  },
  videoUploadYear: {
    fontSize: moderateScale(20),
    textAlign: 'center',
    fontWeight: 'bold',
    color: themeColors.secondaryColor,
  },
  videoUploadDate: {
    fontSize: moderateScale(12),
    textAlign: 'center',
    color: themeColors.greyColor,
  },
  tagsContainer: {
    marginTop: verticalScale(10),
  },
  tagsFlatListContainer: {
    flexDirection: 'row',
  },
  tagTitle: {
    fontSize: moderateScale(14),
    color: themeColors.secondaryColor,
    marginLeft: horizontalScale(50),
  },
  disclaimerContainer: {
    marginHorizontal: horizontalScale(10),
    flexDirection: 'row',
    marginTop: verticalScale(20),
  },
  disclaimerDescription: {
    fontSize: moderateScale(12),
    textAlign: 'justify',
    color: themeColors.greyColor,
  },
  disclaimerTitle: {
    fontSize: moderateScale(12),
    textAlign: 'justify',
    color: themeColors.greyColor,
    fontWeight: 'bold',
  },
});

export default styles;
