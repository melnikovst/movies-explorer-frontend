import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const getSaved = createAsyncThunk<any>('/movies', async () => {
  const res = await fetch('http://localhost:3001/movies', {
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
    const res = await fetch('http://localhost:3001/movies', {
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
    const res = await fetch(`http://localhost:3001/movies/${card._id}`, {
      method: 'DELETE',
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
  }
);
