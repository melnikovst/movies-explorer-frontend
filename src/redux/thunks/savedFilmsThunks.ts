import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const getSaved = createAsyncThunk<any>('/movies', async () => {
  const res = await fetch('https://api.mvies.nomoredomains.work/movies', {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  if (res.ok) {
    const data = await res.json();
    return data;
  }
  return Promise.reject(await res.json());
});

export const postSaved = createAsyncThunk<any, any>(
  '/movies.',
  async (card: any) => {
    const res = await fetch('https://api.mvies.nomoredomains.work/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(card),
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    return Promise.reject(await res.json());
  }
);

export const deleteSaved = createAsyncThunk<any, any>(
  '/movies/delete',
  async (card: any) => {
    const res = await fetch(
      `https://api.mvies.nomoredomains.work/movies/${card._id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }
    );
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    return Promise.reject(await res.json());
  }
);

export const filterSaved = createAction('filter');
