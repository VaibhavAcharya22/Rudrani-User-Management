import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {FormikErrors, FormikTouched, useFormik} from 'formik';
import {useRef} from 'react';
import {TextInput, TextStyle, ViewStyle} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ROUTES} from '../../../../constants';
import {RootState, manageCustomerActions} from '../../../../redux';
import {SignUpDataSchema} from '../../../../utils';
import {ThemeStyles} from '../../../../types';

interface ThemeStyleType {
  startButtonsContainer: ViewStyle;
  indicatorLine: ViewStyle;
  signInTitle: TextStyle;
  labelStyle: TextStyle;
  alreadyAccountText: TextStyle;
}

export interface PersonalDataHookReturnType {
  navigation: StackNavigationProp<ParamListBase>;
  lastNameRef: React.RefObject<TextInput>;
  cityRef: React.RefObject<TextInput>;
  mobileRef: React.RefObject<TextInput>;
  appStyles: ThemeStyles;
  themeStyles: ThemeStyleType;
  values: {
    firstName: string;
    lastName: string;
    mobileNumber: string;
    city: string;
  };
  touched: FormikTouched<{
    firstName: string;
    lastName: string;
    mobileNumber: string;
    city: string;
  }>;
  errors: FormikErrors<{
    firstName: string;
    lastName: string;
    mobileNumber: string;
    city: string;
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
          mobileNumber: string;
          city: string;
        }>
      >;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
}

interface UserPersonalDetails {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  city: string;
}

type SignUpTypes = {
  SignUpDetails: {
    signUpDetails: {
      email: string;
      password: string;
      confirmPassword: string;
    };
  };
};

const usePersonalData = (): PersonalDataHookReturnType => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const route = useRoute<RouteProp<SignUpTypes, 'SignUpDetails'>>();
  const lastNameRef = useRef<TextInput>(null);
  const cityRef = useRef<TextInput>(null);
  const mobileRef = useRef<TextInput>(null);
  const dispatch = useDispatch();
  const customers = useSelector(
    (state: RootState) => state.manageCustomers.customers,
  );

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
      mobileNumber: '',
      city: '',
    },
    validationSchema: SignUpDataSchema,
    onSubmit: (values: UserPersonalDetails) => {
      const index = customers.findIndex(
        item => item.email === route?.params?.signUpDetails?.email,
      );
      const data = {
        ...route?.params?.signUpDetails,
        city: values.city,
        first_name: values.firstName,
        last_name: values.lastName,
        mobileNumber: values.mobileNumber,
        avatar: '',
      };
      dispatch(manageCustomerActions.addUserDataSuccess({index, data}));
      navigation.replace(ROUTES.Drawer);
    },
  });
  const appStyles = useSelector((state: RootState) => state.manageTheme.styles);
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
    alreadyAccountText: {
      color: appStyles.modalTextColor,
    },
  };

  return {
    navigation,
    lastNameRef,
    cityRef,
    mobileRef,
    values,
    appStyles,
    themeStyles,
    touched,
    errors,
    isValid,
    handleChange,
    setFieldTouched,
    handleSubmit,
  };
};
export default usePersonalData;
