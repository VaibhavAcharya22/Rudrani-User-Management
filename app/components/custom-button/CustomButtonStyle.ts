import {TextStyle, ViewStyle} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../../theme';

export const buttonContainer = (
  color?: string,
  borderColor?: string,
  disabled?: boolean,
  width?: number,
  height?: number,
  borderRadius?: number,
): ViewStyle => ({
  backgroundColor: color,
  opacity: disabled ? moderateScale(0.6) : moderateScale(1),
  justifyContent: 'center',
  alignItems: 'center',
  height: verticalScale(height!),
  width: horizontalScale(width!),
  borderRadius: moderateScale(borderRadius!),
  borderColor: borderColor,
  borderWidth: moderateScale(2),
  flexDirection: 'row',
});

export const buttonContainerPressed = (
  color: string,
  borderColor: string,
  width: number,
  height: number,
  borderRadius?: number,
): ViewStyle => ({
  backgroundColor: color,
  opacity: moderateScale(0.5),
  justifyContent: 'center',
  alignItems: 'center',
  height: verticalScale(height),
  width: horizontalScale(width),
  borderColor: borderColor,
  borderWidth: moderateScale(2),
  borderRadius: moderateScale(borderRadius!),
  flexDirection: 'row',
});

export const buttonText = (textColor: string, fontSize: number): TextStyle => ({
  color: textColor,
  fontSize: moderateScale(fontSize),
  fontWeight: 'bold',
});
