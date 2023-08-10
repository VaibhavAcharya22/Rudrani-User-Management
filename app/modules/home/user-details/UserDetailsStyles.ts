import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  themeColors,
  verticalScale,
} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.whiteColor,
  },
  imageStyle: {
    alignSelf: 'center',
    marginTop: verticalScale(80),
    height: horizontalScale(170),
    width: horizontalScale(170),
    borderRadius: moderateScale(10),
    borderWidth: moderateScale(4),
    borderColor: themeColors.mainColor,
    position: 'absolute',
    zIndex: 1,
  },
  detailsContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(180),
    height: verticalScale(320),
    width: horizontalScale(320),
    borderRadius: moderateScale(20),
    alignSelf: 'center',
    backgroundColor: themeColors.secondaryColor,
    position: 'absolute',
  },
  detailsFieldsColumn: {
    flexDirection: 'column',
    width: '100%',
    marginTop: verticalScale(130),
  },
  fieldsRowView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  labelStyle: {
    color: themeColors.whiteColor,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: moderateScale(18),
    marginRight: horizontalScale(10),
    marginBottom: verticalScale(20),
  },
  nameStyle: {
    color: themeColors.whiteColor,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: moderateScale(18),
  },
  emailStyle: {
    color: themeColors.whiteColor,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: verticalScale(3),
    fontSize: moderateScale(15),
  },
  controlButtons: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: verticalScale(600),
  },
  prevButton: {
    marginRight: horizontalScale(10),
  },
});

export default styles;
