import {Slice, createSlice} from '@reduxjs/toolkit';
import {myColors} from '../../theme/Colors';
import {ThemeStyles} from '../../types';
import {sliceNames} from '../../constants';

interface ThemeInitialState {
  theme: string;
  styles: ThemeStyles;
  isSystemDefault: boolean;
  loading: boolean;
  error: object;
}

const initialState: ThemeInitialState = {
  theme: 'dark',
  loading: false,
  isSystemDefault: false,
  styles: myColors.light,
  error: {},
};

export const manageTheme: Slice = createSlice({
  name: sliceNames.theme,
  initialState,
  reducers: {
    lightTheme: state => {
      state.theme = 'light';
      state.isSystemDefault = false;
      state.styles = myColors.light;
    },
    darkTheme: state => {
      state.theme = 'dark';
      state.isSystemDefault = false;
      state.styles = myColors.dark;
    },
    systemDefaultTheme: (state, action) => {
      state.theme = 'default';
      state.isSystemDefault = true;
      state.styles =
        action.payload?.systemTheme === 'light'
          ? myColors.light
          : myColors.dark;
    },
  },
});

export const manageThemeActions = manageTheme.actions;
export default manageTheme.reducer;
