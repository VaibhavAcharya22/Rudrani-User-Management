import React, {FC} from 'react';
import {Pressable, PressableProps, Text} from 'react-native';
import {
  buttonContainer,
  buttonContainerPressed,
  buttonText,
} from './CustomButtonStyle';
import {CustomButtonProps} from './CustomButtonTypes';

const CustomButton: FC<CustomButtonProps & PressableProps> = ({
  onPress,
  disabled = false,
  btnText,
  color,
  borderColor,
  width,
  height,
  textColor,
  borderRadius,
  fontSize,
  ...rest
}) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({pressed}) =>
        pressed
          ? buttonContainerPressed(
              color,
              borderColor,
              width,
              height,
              borderRadius,
            )
          : buttonContainer(
              color,
              borderColor,
              disabled!,
              width,
              height,
              borderRadius,
            )
      }
      {...rest}>
      <Text style={buttonText(textColor!, fontSize!)}>{btnText}</Text>
    </Pressable>
  );
};

export default CustomButton;
