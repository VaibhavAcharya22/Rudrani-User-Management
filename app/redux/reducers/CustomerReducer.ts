import {Slice, createSlice} from '@reduxjs/toolkit';
import {sliceNames} from '../../constants';
import {CustomersType} from '../../types';

interface CustomersInitialState {
  customers: CustomersType[];
  loggedInUser: CustomersType;
  loading: boolean;
  error: object;
}

const initialState: CustomersInitialState = {
  customers: [],
  loading: false,
  loggedInUser: {},
  error: {},
};

export const manageCustomers: Slice = createSlice({
  name: sliceNames.customers,
  initialState,
  reducers: {
    signUpCustomerSuccess: (state, action) => {
      state.loading = false;
      state.customers = [...state.customers, action.payload];
    },
    addUserDataSuccess: (state, action) => {
      state.loading = false;
      state.customers[action.payload?.index] = action.payload?.data;
      state.loggedInUser = action.payload?.data;
    },
    signInUserSuccess: (state, action) => {
      state.loading = false;
      state.loggedInUser = action.payload?.data;
    },
    updateUserSuccess: (state, action) => {
      state.customers[action.payload?.customerIndex] = action.payload?.data;
      state.loggedInUser = action.payload?.data;
    },
    updateProfilePictureSuccess: (state, action) => {
      state.customers[action.payload?.customerIndex].avatar =
        action.payload?.uri;
      state.loggedInUser.avatar = action.payload?.uri;
    },
    changePasswordSuccess: (state, action) => {
      state.customers[action.payload?.customerIndex].password =
        action.payload?.password;
    },
    logoutUserSuccess: state => {
      state.loggedInUser = {};
    },
  },
});

export const manageCustomerActions = manageCustomers.actions;
export default manageCustomers.reducer;
