import {KeyboardTypeOptions, TextInput} from 'react-native';

export interface CustomTextInputProps {
  icon?: React.ReactNode;
  placeholder: string;
  value?: string;
  defaultVal?: string;
  readOnly?: boolean;
  keyboardType?: KeyboardTypeOptions;
  secureText?: boolean;
  passedRef?: React.Ref<TextInput>;
  mulLine?: boolean;
  onChange: (val: string) => void;
  onBlur?: () => void;
  onEndEditing?: () => void;
  borderColor: string;
  inputColor: string;
  placeholderColor: string;
  bgColor?: string;
  height: number;
  width: number;
  padding: number;
  borderRadius: number;
  borderWidth: number;
}
