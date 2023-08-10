import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  themeColors,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  inputsContainView: {
    marginVertical: verticalScale(15),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    padding: verticalScale(15),
  },
});

export const inputStyle = (
  borderColor: string,
  bgColor?: string,
  inputColor?: string,
  height?: number,
  width?: number,
  padding?: number,
  borderRadius?: number,
  borderWidth?: number,
) => ({
  marginLeft: horizontalScale(10),
  width: horizontalScale(width!),
  height: verticalScale(height!),
  padding: horizontalScale(padding!),
  backgroundColor: bgColor ? bgColor : themeColors.secondaryColor,
  color: inputColor ? inputColor : themeColors.secondaryColor,
  borderRadius: moderateScale(borderRadius!),
  borderColor: borderColor ? borderColor : themeColors.secondaryColor,
  borderWidth: moderateScale(borderWidth!),
});

export default styles;
