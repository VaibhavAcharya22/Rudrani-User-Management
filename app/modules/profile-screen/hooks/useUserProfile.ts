import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {FormikTouched, useFormik, FormikErrors} from 'formik';
import {useRef} from 'react';
import {TextInput, TextStyle, ViewStyle} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, manageCustomerActions} from '../../../redux';
import {ProfileScreenSchema} from '../../../utils';
import {CustomersType, ThemeStyles} from '../../../types';

interface ThemeStyleType {
  mainView: ViewStyle;
  updateProfileTitle: TextStyle;
  labelStyle: TextStyle;
}
export interface UserProfileHookReturnType {
  navigation: StackNavigationProp<ParamListBase>;
  firstNameRef: React.RefObject<TextInput>;
  lastNameRef: React.RefObject<TextInput>;
  emailRef: React.RefObject<TextInput>;
  cityRef: React.RefObject<TextInput>;
  mobileRef: React.RefObject<TextInput>;
  loggedInUser: CustomersType;
  values: {
    firstName?: string;
    lastName?: string;
    city?: string;
    mobileNumber?: string;
  };
  touched: FormikTouched<{
    firstName: string;
    lastName: string;
    city: string;
    mobileNumber: string;
  }>;
  errors: FormikErrors<{
    firstName: string;
    lastName: string;
    city: string;
    mobileNumber: string;
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
          city: string;
          mobileNumber: string;
        }>
      >;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  appStyles: ThemeStyles;
  themeStyles: ThemeStyleType;
}

const useUserProfile = (
  setIsEditScreenVisible: Function,
): UserProfileHookReturnType => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const firstNameRef = useRef<TextInput>(null);
  const lastNameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const cityRef = useRef<TextInput>(null);
  const mobileRef = useRef<TextInput>(null);
  const dispatch = useDispatch();
  const customers = useSelector(
    (state: RootState) => state.manageCustomers.customers,
  );
  const loggedInUser = useSelector(
    (state: RootState) => state.manageCustomers.loggedInUser,
  );

  const appStyles = useSelector((state: RootState) => state.manageTheme.styles);
  const themeStyles: ThemeStyleType = {
    mainView: {
      backgroundColor: appStyles.backgroundColor,
    },
    updateProfileTitle: {
      color: appStyles.color,
    },
    labelStyle: {
      color: appStyles.color,
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
      firstName: loggedInUser.first_name,
      lastName: loggedInUser.last_name,
      city: loggedInUser.city,
      mobileNumber: loggedInUser.mobileNumber,
    },
    validationSchema: ProfileScreenSchema,
    onSubmit: values => {
      const customerIndex = customers.findIndex(
        customer => customer.email === loggedInUser.email,
      );
      const data = {
        city: values.city,
        first_name: values.firstName,
        last_name: values.lastName,
        mobileNumber: values.mobileNumber,
        avatar: customers[customerIndex].avatar,
        email: loggedInUser.email,
        password: loggedInUser.password,
        confirmPassword: loggedInUser.confirmPassword,
      };
      dispatch(manageCustomerActions.updateUserSuccess({data, customerIndex}));
      setIsEditScreenVisible(false);
    },
  });

  return {
    navigation,
    firstNameRef,
    lastNameRef,
    emailRef,
    cityRef,
    mobileRef,
    loggedInUser,
    appStyles,
    themeStyles,
    values,
    touched,
    errors,
    isValid,
    handleChange,
    setFieldTouched,
    handleSubmit,
  };
};
export default useUserProfile;
