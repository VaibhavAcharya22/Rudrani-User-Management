import React from 'react';
import {TextInput, View} from 'react-native';
import {themeColors} from '../../theme';
import styles, {inputStyle} from './CustomTextInputStyle';
import {CustomTextInputProps} from './CustomTextInputTypes';

// Custom TextInput Component
const CustomTextInput = (
  {
    icon,
    placeholder,
    value,
    defaultVal,
    keyboardType,
    readOnly,
    secureText,
    passedRef,
    mulLine,
    onChange,
    onBlur,
    onEndEditing,
    borderColor,
    inputColor,
    placeholderColor,
    bgColor,
    height,
    width,
    padding,
    borderRadius,
    borderWidth,
  }: CustomTextInputProps,
  ref: React.Ref<TextInput>,
) => {
  const onSubmitEdit = () =>
    passedRef && 'current' in passedRef && passedRef.current?.focus();

  return (
    <View style={styles.inputsContainView}>
      {icon}
      <TextInput
        ref={ref}
        autoCapitalize={'none'}
        onEndEditing={onEndEditing}
        multiline={mulLine}
        keyboardType={keyboardType}
        value={value}
        returnKeyType={passedRef ? 'next' : 'done'}
        onSubmitEditing={onSubmitEdit}
        secureTextEntry={secureText}
        style={inputStyle(
          borderColor,
          bgColor,
          inputColor,
          height,
          width,
          padding,
          borderRadius,
          borderWidth,
        )}
        defaultValue={defaultVal}
        editable={readOnly}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor ?? themeColors.whiteColor}
        onChangeText={onChange}
        onBlur={onBlur}
      />
    </View>
  );
};

export default React.forwardRef<TextInput, CustomTextInputProps>(
  CustomTextInput,
);
