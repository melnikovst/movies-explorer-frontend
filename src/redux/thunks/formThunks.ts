import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

interface IResponse extends IGet {
  password?: string;
}

type TReg = {
  email?: string;
  password?: string;
};

export interface IGet {
  name?: string;
  email?: string;
}

export const login = createAsyncThunk<any, TReg>(
  'login',
  async ({ email, password }) => {
    const res = await fetch('https://api.mvies.nomoredomains.work/signin', {
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
  const res = await fetch('https://api.mvies.nomoredomains.work/signout', {
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
      const res = await fetch('https://api.mvies.nomoredomains.work/signup', {
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
  const res = await fetch('https://api.mvies.nomoredomains.work/users/me', {
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  });
  if (res.ok) {
    const data = await res.json();
    return data;
  }
  return Promise.reject('ошибка получения профиля');
});

export const setProfile = createAction<string | undefined>('profiler');
