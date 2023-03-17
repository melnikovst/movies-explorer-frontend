import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface IGet {
  name: string;
  email: string;
}

interface IResponse extends IGet {
  password?: string;
}

type TReg = {
  email: string;
  password?: string;
};

type TStates = {
  isLogged: boolean;
  profileData: Partial<IGet>;
  pname: string;
  pemail: string;
};

export const login = createAsyncThunk<any, TReg>(
  'login',
  async ({ email, password }) => {
    const res = await fetch('http://localhost:3001/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      console.log(res);
      return data;
    }
    return Promise.reject('ошибка');
  }
);

export const signout = createAsyncThunk<any>('/signout', async () => {
  const res = await fetch('http://localhost:3001/signout', {
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  });
  if (res.ok) {
    const data = await res.json();
    console.log(data);
    return data;
  }
  return Promise.reject('не получилось почистить куку');
});

export const register = createAsyncThunk<IGet, IResponse>(
  'register',
  async ({ name, email, password }: IResponse) => {
    try {
      const res = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ name, email, password }),
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        return data;
      }
      return Promise.reject('ошибочка');
    } catch (error) {
      console.log(error);
    }
  }
);

export const getProfile = createAsyncThunk<any>('/me', async () => {
  const res = await fetch('http://localhost:3001/users/me', {
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  });
  if (res.ok) {
    const data = await res.json();
    return data;
  }
  return Promise.reject('ошибка получения профиля');
});

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
      console.log('ошибка')
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
