import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {FormikErrors, FormikTouched, useFormik} from 'formik';
import {ImageStyle, TextInput, TextStyle, ViewStyle} from 'react-native';
import {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  ROUTES,
  UserNotFoundAlertStrings,
  WrongDetailsAlertStrings,
} from '../../../../constants';
import {RootState, manageCustomerActions} from '../../../../redux';
import {LoginSchema, customAlert} from '../../../../utils';
import {ThemeStyles} from '../../../../types';

interface SignInTypes {
  email: string;
  password: string;
}

interface ThemeStyleType {
  startButtonsContainer: ViewStyle;
  indicatorLine: ViewStyle;
  signInTitle: TextStyle;
  labelStyle: TextStyle;
  dontHaveAccountText: TextStyle;
  passwordEyeStyle: ImageStyle;
}

export interface LoginHookReturnType {
  navigation: StackNavigationProp<ParamListBase>;
  passwordRef: React.RefObject<TextInput>;
  values: {
    email: string;
    password: string;
  };
  touched: FormikTouched<{
    email: string;
    password: string;
  }>;
  errors: FormikErrors<{
    email: string;
    password: string;
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
          city: string;
          mobileNumber: string;
        }>
      >;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  handleDontAccountClick: () => void;
  appStyles: ThemeStyles;
  themeStyles: ThemeStyleType;
  isPasswordVisible: boolean;
  handlePasswordEyePress: () => void;
}

const useLogin = (): LoginHookReturnType => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const passwordRef = useRef<TextInput>(null);
  const dispatch = useDispatch();
  const customers = useSelector(
    (state: RootState) => state.manageCustomers.customers,
  );

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);
  const appStyles: ThemeStyles = useSelector(
    (state: RootState) => state.manageTheme.styles,
  );
  const themeStyles: ThemeStyleType = {
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
    passwordEyeStyle: {
      tintColor: appStyles.tintColor,
    },
    dontHaveAccountText: {
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
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values: SignInTypes) => {
      const res = customers.filter(item => item?.email === values.email);
      const userIndex = customers.findIndex(
        customer => customer.email === values.email,
      );
      if (res?.length > 0) {
        if (res?.[0].password === values.password) {
          const data = {
            ...res?.[0],
            avatar: customers[userIndex]?.avatar,
          };
          dispatch(manageCustomerActions.signInUserSuccess({data}));
          navigation.replace(ROUTES.Drawer);
        } else {
          customAlert({
            title: WrongDetailsAlertStrings.title,
            desc: WrongDetailsAlertStrings.desc,
          });
        }
      } else {
        customAlert({
          title: UserNotFoundAlertStrings.title,
          desc: UserNotFoundAlertStrings.desc,
        });
      }
    },
  });

  const handleDontAccountClick = (): void => {
    navigation.replace(ROUTES.SignUp);
  };

  const handlePasswordEyePress = (): void => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return {
    navigation,
    passwordRef,
    values,
    touched,
    errors,
    isValid,
    appStyles,
    themeStyles,
    isPasswordVisible,
    handleChange,
    setFieldTouched,
    handleSubmit,
    handleDontAccountClick,
    handlePasswordEyePress,
  };
};

export default useLogin;
