import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import {
  getProfile,
  IGet,
  login,
  register,
  setProfile,
  signout,
} from './thunks/formThunks';

type TStates = {
  isLogged: boolean;
  profileData: Partial<IGet>;
  pname: string | undefined;
  pemail: string;
  isLoading: boolean;
};

const initialState: TStates = {
  isLogged: false,
  profileData: {},
  pname: '',
  pemail: '',
  isLoading: false,
};

const formSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    setIsLogged(state, action) {
      state.isLogged = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state) => {
      state.isLogged = true;
    });
    builder.addCase(login.rejected, (state) => {
      console.log('ошибка');
      state.isLogged = false;
    });
    builder.addCase(register.rejected, (state) => {
      state.isLogged = false;
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.profileData = action.payload;
      state.isLogged = true;
      state.pname = action.payload.name;
      state.pemail = action.payload.email;
      state.isLoading = false;
    });
    builder.addCase(getProfile.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(signout.fulfilled, (state) => {
      state.profileData = {};
      state.pname = '';
      state.pemail = '';
      state.isLogged = false;
    });
    builder.addCase(setProfile, (state, action) => {
      state.pname = action.payload;
    });
  },
});

export const { setIsLogged } = formSlice.actions;

export default formSlice.reducer;
export const selectForm = (state: RootState) => state.formSlice;
