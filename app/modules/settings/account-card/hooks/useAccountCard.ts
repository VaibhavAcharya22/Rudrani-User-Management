import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {FormikErrors, FormikTouched, useFormik} from 'formik';
import {useRef} from 'react';
import {TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  LoginAlertStrings,
  ROUTES,
  WrongCurrentPasswordAlertStrings,
} from '../../../../constants';
import {
  ChangePasswordAlertStrings,
  UpdateProfileAlertStrings,
} from '../../../../constants/Strings';
import {RootState, manageCustomerActions} from '../../../../redux';
import {ChangePasswordSchema, customAlert} from '../../../../utils';
import {manageUserActions} from '../../../../redux/reducers/UsersReducer';

interface ChangePasswordInterface {
  currentPassword: string;
  password: string;
  confirmPassword: string;
}
export interface AccountCardHookReturnType {
  passwordRef: React.RefObject<TextInput>;
  confirmPasswordRef: React.RefObject<TextInput>;
  values: {
    currentPassword: string;
    password: string;
    confirmPassword: string;
  };
  touched: FormikTouched<{
    currentPassword: string;
    password: string;
    confirmPassword: string;
  }>;
  errors: FormikErrors<{
    currentPassword: string;
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
          currentPassword: string;
          password: string;
          confirmPassword: string;
        }>
      >;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  handleLogoutPress: () => void;
  handleChangePassword: () => void;
}

const useAccountCard = (): AccountCardHookReturnType => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);
  const dispatch = useDispatch();
  const customers = useSelector(
    (state: RootState) => state.manageCustomers.customers,
  );
  const loggedInUser = useSelector(
    (state: RootState) => state.manageCustomers.loggedInUser,
  );

  const logoutLogic = (): void => {
    dispatch(manageCustomerActions.logoutUserSuccess());
    dispatch(manageUserActions.emptyUsers());
    navigation.reset({index: 0, routes: [{name: ROUTES.WelcomeScreen}]});
  };

  const handleLogoutPress = (): void => {
    customAlert({
      title: LoginAlertStrings.logoutDesc,
      desc: LoginAlertStrings.logoutTitle,
      positiveBtnText: LoginAlertStrings.positiveBtnTitle,
      negativeBtnText: LoginAlertStrings.cancelBtnTitle,
      onPress: logoutLogic,
    });
  };

  const handleChangePassword = (): void => {
    navigation.push(ROUTES.ChangePasswordScreen);
  };

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
      currentPassword: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: ChangePasswordSchema,
    onSubmit: (values: ChangePasswordInterface) => {
      const customerIndex = customers.findIndex(
        customer => customer.email === loggedInUser.email,
      );
      const customerDetails = customers[customerIndex];

      if (customerDetails.password === values.currentPassword) {
        customAlert({
          title: ChangePasswordAlertStrings.title,
          desc: ChangePasswordAlertStrings.desc,
          positiveBtnText: UpdateProfileAlertStrings.ok,
          onPress: () => navigation.pop(),
        });
        dispatch(
          manageCustomerActions.changePasswordSuccess({
            customerIndex,
            password: values.password,
          }),
        );
      } else
        customAlert({
          title: WrongCurrentPasswordAlertStrings.title,
          desc: WrongCurrentPasswordAlertStrings.desc,
        });
    },
  });

  return {
    passwordRef,
    confirmPasswordRef,
    values,
    touched,
    errors,
    isValid,
    handleChange,
    setFieldTouched,
    handleSubmit,
    handleLogoutPress,
    handleChangePassword,
  };
};

export default useAccountCard;
