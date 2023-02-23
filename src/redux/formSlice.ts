import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const login = createAsyncThunk<any, any>(
  'login',
  async ({ email, password }) => {
    const res = await fetch(
      'https://api.melnikovst.films.nomoredomainsclub.ru/signin',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      }
    );
    const data = await res.json();
    if (res.ok) {
      return data;
    }
    Promise.reject('ошибка');
    console.log(res);
  }
);

const initialState = {
  user: {},
};

const formSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default formSlice.reducer;
