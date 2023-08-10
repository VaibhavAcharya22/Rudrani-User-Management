import {StyleSheet} from 'react-native';
import {themeColors, verticalScale} from '../../theme';

const styles = StyleSheet.create({
  mainSafeAreaView: {
    flex: 1,
    backgroundColor: themeColors.whiteColor,
    marginBottom: verticalScale(50),
  },
});

export default styles;
