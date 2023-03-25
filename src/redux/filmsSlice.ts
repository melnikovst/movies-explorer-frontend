import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

type states = {
  films: TFilm[];
  load: TFilm[];
  isFirstRequest: boolean;
  value: string;
  filteredArray: TFilm[];
  isChecked: boolean;
};

const initialState: states = {
  films: JSON.parse(localStorage.getItem('films') as string),
  load: [],
  isFirstRequest: false,
  value: '',
  filteredArray: JSON.parse(localStorage.getItem('filtered') as string) || [],
  isChecked: JSON.parse(localStorage.getItem('checkbox') as string) || false,
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
  const data = await res.json();
  return data;
});

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setFilteredArray(state, action) {
      state.filteredArray = state.films.filter((item) =>
        item.nameRU.includes(action.payload)
      );
    },
    setFiltered(state, action) {
      state.filteredArray = action.payload;
    },
    setFilms(state, action) {
      state.films = action.payload;
    },
    setLoad(state, action) {
      state.load = action.payload;
    },
    setValue(state, action) {
      state.value = action.payload;
    },
    setIsFirst(state, action) {
      state.isFirstRequest = action.payload;
    },
    concatMore(state, action: PayloadAction<number>) {
      if (state.films) {
        state.load = state.load.concat(
          state.filteredArray.slice(
            state.load.length,
            state.load.length + action.payload
          )
        );
      }
    },
    setIsChecked(state, action) {
      state.isChecked = action.payload;

      if (window.location.pathname !== '/films/saved') {
        state.filteredArray = state.isChecked
          ? state.filteredArray.filter((item) => item.duration <= 40)
          : state.films.filter((item) => {
              return item.nameRU.includes(state.value);
            });
      }
    },
  },
});

export const selectFilms = (state: RootState) => state.filmsSlice;
export const {
  setLoad,
  setIsFirst,
  concatMore,
  setValue,
  setFilms,
  setFilteredArray,
  setIsChecked,
  setFiltered,
} = filmsSlice.actions;
export default filmsSlice.reducer;
