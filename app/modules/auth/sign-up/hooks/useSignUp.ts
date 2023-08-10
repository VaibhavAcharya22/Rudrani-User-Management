import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useRef} from 'react';
import {TextInput, TextStyle, ViewStyle} from 'react-native';
import {ROUTES, SignUpAlertStrings} from '../../../../constants';
import {FormikErrors, FormikTouched, useFormik} from 'formik';
import {SignUpSchema, customAlert} from '../../../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {manageCustomerActions} from '../../../../redux';
import {RootState} from '../../../../redux/store';
import {ThemeStyles} from '../../../../types';

interface SignUpTypes {
  avatar: string;
  password: string;
  confirmPassword: string;
  email: string;
}

interface ThemeStyleType {
  startButtonsContainer: ViewStyle;
  indicatorLine: ViewStyle;
  signInTitle: TextStyle;
  labelStyle: TextStyle;
  alreadyAccountText: TextStyle;
}

export interface SignUpHookReturnType {
  navigation: StackNavigationProp<ParamListBase>;
  passwordRef: React.RefObject<TextInput>;
  confirmPasswordRef: React.RefObject<TextInput>;

  values: {
    email: string;
    password: string;
    confirmPassword: string;
  };
  touched: FormikTouched<{
    email: string;
    password: string;
    confirmPassword: string;
  }>;
  errors: FormikErrors<{
    email: string;
    password: string;
    confirmPassword: string;
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
          email: string;
          password: string;
          confirmPassword: string;
        }>
      >;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  appStyles: ThemeStyles;
  themeStyles: ThemeStyleType;
  handleAlreadyAccountClick: () => void;
}

const useSignUp = (): SignUpHookReturnType => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);
  const dispatch = useDispatch();
  const customers = useSelector(
    (state: RootState) => state.manageCustomers.customers,
  );
  const appStyles: ThemeStyles = useSelector(
    (state: RootState) => state.manageTheme.styles,
  );
  const themeStyles = {
    startButtonsContainer: {
      backgroundColor: appStyles.modalBackgroundColor,
      shadowColor: appStyles.shadowColor,
    },
    indicatorLine: {
      backgroundColor: appStyles.backgroundColor,
    },
    signInTitle: {
      color: appStyles.modalTextColor,
    },
    labelStyle: {
      color: appStyles.modalTextColor,
    },
    alreadyAccountText: {
      color: appStyles.modalTextColor,
    },
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
      avatar: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: (values: SignUpTypes) => {
      const res = customers.filter(item => item.email === values.email);
      if (res.length > 0) {
        customAlert({
          title: SignUpAlertStrings.title,
          desc: SignUpAlertStrings.desc,
        });
      } else {
        dispatch(manageCustomerActions.signUpCustomerSuccess(values));
        navigation.replace(ROUTES.SignUpData, {signUpDetails: values});
      }
    },
  });

  const handleAlreadyAccountClick = (): void => {
    navigation.replace(ROUTES.Login);
  };

  return {
    navigation,
    passwordRef,
    confirmPasswordRef,
    values,
    touched,
    errors,
    isValid,
    appStyles,
    themeStyles,
    handleChange,
    setFieldTouched,
    handleSubmit,
    handleAlreadyAccountClick,
  };
};
export default useSignUp;
