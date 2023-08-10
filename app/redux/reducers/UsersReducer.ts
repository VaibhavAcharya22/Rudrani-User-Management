import {Slice, createSlice} from '@reduxjs/toolkit';
import {sliceNames} from '../../constants';
import {CustomersType} from '../../types';

interface UsersInitialState {
  users: CustomersType[];
  loadedPages: number;
  loading: boolean;
  error: object;
}

const initialState: UsersInitialState = {
  users: [],
  loadedPages: 0,
  loading: false,
  error: {},
};

export const manageUsers: Slice = createSlice({
  name: sliceNames.users,
  initialState,
  reducers: {
    getUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = [...state.users, ...action.payload?.data];
    },
    succeedPages: (state, action) => {
      state.loadedPages = action.payload.page;
    },
    emptyUsers: state => {
      state.loadedPages = 0;
      state.users = [];
    },
  },
});

export const manageUserActions = manageUsers.actions;
export default manageUsers.reducer;
