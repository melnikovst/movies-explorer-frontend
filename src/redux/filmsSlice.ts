import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

type states = {
  films: any;
};

const initialState: states = {
  films: [],
};

export const fetchFilms = createAsyncThunk<
  TFilm[],
  undefined,
  { rejectValue: string }
>('films/data', async (_, { rejectWithValue }) => {
  const res = await fetch('https://api.nomoreparties.co/beatfilm-movies');
  if (!res.ok) {
    return rejectWithValue('Что-то пошло не так');
  }
  return await res.json();
});

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setMore(state, action) {
      state.films.concat(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.films = action.payload;
    });
  },
});

export const { setMore } = filmsSlice.actions;
export const selectFilms = (state: RootState) => state.filmsSlice;
export default filmsSlice.reducer;
