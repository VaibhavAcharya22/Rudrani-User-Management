import {Slice, createSlice} from '@reduxjs/toolkit';
import {sliceNames} from '../../constants';
import {CustomersType} from '../../types';

interface UsersInitialState {
  addedUsers: CustomersType[];
  tmpImageUri: string;
  loading: boolean;
  error: object;
}

const initialState: UsersInitialState = {
  addedUsers: [],
  loading: false,
  tmpImageUri: '',
  error: {},
};

export const manageAddedUsers: Slice = createSlice({
  name: sliceNames.users,
  initialState,
  reducers: {
    getImageUriSuccess: (state, action) => {
      state.loading = false;
      state.tmpImageUri = action.payload?.uri;
    },
    getAddedUsersSuccess: (state, action) => {
      state.loading = false;
      state.addedUsers = [...state.addedUsers, action.payload?.myUser];
    },
  },
});

export const manageAddedUserActions = manageAddedUsers.actions;
export default manageAddedUsers.reducer;
