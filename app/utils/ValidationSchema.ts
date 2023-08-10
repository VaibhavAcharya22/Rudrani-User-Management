// All Yup Validation Schemas
import * as Yup from 'yup';
import {LoginErrorStrings, SignUpErrorStrings} from '../constants';

// Regular Expression for pattern matching
const letterRegExp: RegExp =
  /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi;
const phoneRegExp: RegExp = /^[0-9]+$/;

export const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email(SignUpErrorStrings.invalidEmailError)
    .required(SignUpErrorStrings.requiredEmailError),
  password: Yup.string()
    .trim()
    .min(8, SignUpErrorStrings.minPasswordError)
    .max(16, SignUpErrorStrings.maxPasswordError)
    .required(SignUpErrorStrings.requiredPasswordError),
  confirmPassword: Yup.string()
    .trim()
    .min(8, SignUpErrorStrings.minPasswordError)
    .max(16, SignUpErrorStrings.maxPasswordError)
    .oneOf([Yup.ref('password')], SignUpErrorStrings.confirmPasswordError)
    .required(SignUpErrorStrings.requiredConfirmPasswordError),
});

// Login Validation yup schema
export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email(LoginErrorStrings.invalidEmailError)
    .required(LoginErrorStrings.requiredEmailError),
  password: Yup.string()
    .trim()
    .required(LoginErrorStrings.requiredPasswordError),
});

export const SignUpDataSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .matches(letterRegExp, SignUpErrorStrings.invalidFirstName)
    .min(2, SignUpErrorStrings.minFullNameError)
    .max(25, SignUpErrorStrings.maxFullNameError)
    .required(SignUpErrorStrings.requiredFirstNameError),
  lastName: Yup.string()
    .trim()
    .matches(letterRegExp, SignUpErrorStrings.invalidLastName)
    .min(2, SignUpErrorStrings.minFullNameError)
    .max(25, SignUpErrorStrings.maxFullNameError)
    .required(SignUpErrorStrings.requiredLastNameError),
  mobileNumber: Yup.string()
    .trim()
    .matches(phoneRegExp, SignUpErrorStrings.onlyNumberError)
    .min(10, SignUpErrorStrings.mobileNumberError)
    .max(10, SignUpErrorStrings.mobileNumberError)
    .required(SignUpErrorStrings.requiredMobileNumberError),
  city: Yup.string()
    .trim()
    .matches(letterRegExp, SignUpErrorStrings.invalidCity)
    .min(2, SignUpErrorStrings.minFullNameError)
    .max(25, SignUpErrorStrings.maxFullNameError)
    .required(SignUpErrorStrings.requiredCityError),
});

export const CreateUserSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .matches(letterRegExp, SignUpErrorStrings.invalidFirstName)
    .min(2, SignUpErrorStrings.minFullNameError)
    .max(25, SignUpErrorStrings.maxFullNameError)
    .required(SignUpErrorStrings.requiredFirstNameError),
  lastName: Yup.string()
    .trim()
    .matches(letterRegExp, SignUpErrorStrings.invalidLastName)
    .min(2, SignUpErrorStrings.minFullNameError)
    .max(25, SignUpErrorStrings.maxFullNameError)
    .required(SignUpErrorStrings.requiredLastNameError),
  email: Yup.string()
    .trim()
    .email(LoginErrorStrings.invalidEmailError)
    .required(LoginErrorStrings.requiredEmailError),
});

export const ProfileScreenSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .matches(letterRegExp, SignUpErrorStrings.invalidFirstName)
    .min(2, SignUpErrorStrings.minFullNameError)
    .max(25, SignUpErrorStrings.maxFullNameError)
    .required(SignUpErrorStrings.requiredFirstNameError),
  lastName: Yup.string()
    .trim()
    .matches(letterRegExp, SignUpErrorStrings.invalidLastName)
    .min(2, SignUpErrorStrings.minFullNameError)
    .max(25, SignUpErrorStrings.maxFullNameError)
    .required(SignUpErrorStrings.requiredLastNameError),
  city: Yup.string()
    .trim()
    .matches(letterRegExp, SignUpErrorStrings.invalidCity)
    .min(2, SignUpErrorStrings.minFullNameError)
    .max(25, SignUpErrorStrings.maxFullNameError)
    .required(SignUpErrorStrings.requiredCityError),
  mobileNumber: Yup.string()
    .trim()
    .matches(phoneRegExp, SignUpErrorStrings.onlyNumberError)
    .min(10, SignUpErrorStrings.mobileNumberError)
    .max(10, SignUpErrorStrings.mobileNumberError)
    .required(SignUpErrorStrings.requiredMobileNumberError),
});

export const ChangePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .trim()
    .required(SignUpErrorStrings.requiredPasswordError),
  password: Yup.string()
    .trim()
    .min(8, SignUpErrorStrings.minPasswordError)
    .max(16, SignUpErrorStrings.maxPasswordError)
    .required(SignUpErrorStrings.requiredPasswordError),
  confirmPassword: Yup.string()
    .trim()
    .min(8, SignUpErrorStrings.minPasswordError)
    .max(16, SignUpErrorStrings.maxPasswordError)
    .oneOf([Yup.ref('password')], SignUpErrorStrings.confirmPasswordError)
    .required(SignUpErrorStrings.requiredConfirmPasswordError),
});
