import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import {
  getProfile,
  IGet,
  login,
  register,
  signout,
} from './thunks/formThunks';

type TStates = {
  isLogged: boolean;
  profileData: Partial<IGet>;
  pname: string;
  pemail: string;
};

const initialState: TStates = {
  isLogged: false,
  profileData: {},
  pname: '',
  pemail: '',
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
    });
    builder.addCase(signout.fulfilled, (state) => {
      state.profileData = {};
      state.pname = '';
      state.pemail = '';
      state.isLogged = false;
    });
  },
});

export const { setIsLogged } = formSlice.actions;

export default formSlice.reducer;
export const selectForm = (state: RootState) => state.formSlice;
