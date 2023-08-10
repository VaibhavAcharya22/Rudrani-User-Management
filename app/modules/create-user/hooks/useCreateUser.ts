import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {FormikErrors, FormikTouched, useFormik} from 'formik';
import {useRef, useState} from 'react';
import {TextInput, TextStyle, ViewStyle} from 'react-native';
import {CreateUserSchema, customAlert} from '../../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux';
import {
  CreateUserStrings,
  UpdateProfileAlertStrings,
  UploadImageAlertStrings,
} from '../../../constants';
import {manageAddedUserActions} from '../../../redux/reducers/AddedUsersReducer';
import {ThemeStyles} from '../../../types';

interface ThemeStyleType {
  container: ViewStyle;
  mainView: ViewStyle;
  labelStyle: TextStyle;
}

export interface CreateUserHookReturnType {
  navigation: StackNavigationProp<ParamListBase>;
  lastNameRef: React.RefObject<TextInput>;
  emailRef: React.RefObject<TextInput>;
  values: {
    firstName: string;
    lastName: string;
    email: string;
  };
  touched: FormikTouched<{
    firstName: string;
    lastName: string;
    email: string;
  }>;
  errors: FormikErrors<{
    firstName: string;
    lastName: string;
    email: string;
  }>;
  isValid: boolean;
  handleChange: {
    (e: React.ChangeEvent<string>): void;
    <T = string | React.ChangeEvent<string>>(
      field: T,
    ): T extends React.ChangeEvent<string>
      ? void
      : (e: string | React.ChangeEvent) => void;
  };
  setFieldTouched: (
    field: string,
    touched?: boolean,
    shouldValidate?: boolean,
  ) =>
    | Promise<void>
    | Promise<
        FormikErrors<{
          firstName: string;
          lastName: string;
          email: string;
        }>
      >;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  isPickerVisible: boolean;
  setIsPickerVisible: React.Dispatch<React.SetStateAction<boolean>>;
  imageUri: string;
  appStyles: ThemeStyles;
  themeStyles: ThemeStyleType;
}

const useCreateUser = (): CreateUserHookReturnType => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const lastNameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const [isPickerVisible, setIsPickerVisible] = useState<boolean>(false);
  const imageUri = useSelector(
    (state: RootState) => state.manageAddedUsers.tmpImageUri,
  );
  const dispatch = useDispatch();
  const appStyles = useSelector((state: RootState) => state.manageTheme.styles);
  const themeStyles: ThemeStyleType = {
    container: {
      backgroundColor: appStyles.backgroundColor,
    },
    mainView: {
      backgroundColor: appStyles.backgroundColor,
    },
    labelStyle: {
      color: appStyles.modalTextColor,
    },
  };

  const redirectToHome = (): void => {
    navigation.goBack();
  };

  // For form validation
  const {
    values,
    touched,
    errors,
    isValid,
    handleChange,
    setFieldTouched,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: CreateUserSchema,
    onSubmit: (values, {resetForm}) => {
      if (!imageUri) {
        customAlert({
          title: UploadImageAlertStrings.title,
          desc: UploadImageAlertStrings.desc,
        });
      } else {
        const myUser = {
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email,
          avatar: imageUri,
        };
        dispatch(manageAddedUserActions.getAddedUsersSuccess({myUser}));
        dispatch(manageAddedUserActions.getImageUriSuccess(''));
        resetForm({values: {firstName: '', lastName: '', email: ''}});
        emailRef.current?.blur();
        customAlert({
          title: CreateUserStrings.successTitle,
          desc: CreateUserStrings.userAddedDesc,
          positiveBtnText: UpdateProfileAlertStrings.ok,
          onPress: redirectToHome,
        });
      }
    },
  });

  return {
    navigation,
    lastNameRef,
    emailRef,
    values,
    touched,
    errors,
    isValid,
    appStyles,
    themeStyles,
    handleChange,
    setFieldTouched,
    handleSubmit,
    isPickerVisible,
    setIsPickerVisible,
    imageUri,
  };
};
export default useCreateUser;
