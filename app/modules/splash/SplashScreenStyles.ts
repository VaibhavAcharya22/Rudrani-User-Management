import {StyleSheet} from 'react-native';
import {horizontalScale, themeColors, verticalScale} from '../../theme';

const styles = StyleSheet.create({
  splashLogoImage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(400),
    width: horizontalScale(400),
  },
  loaderView: {
    flex: 1,
    backgroundColor: themeColors.mainColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: themeColors.secondaryColor,
  },
});

export default styles;
