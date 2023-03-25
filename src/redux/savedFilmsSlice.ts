import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import {
  getSaved,
  postSaved,
  deleteSaved,
  filterSaved,
} from './thunks/savedFilmsThunks';

type states = {
  savedFilms: TFilm[];
  savedFilm: any;
  isChanged: boolean;
  filteredFilms: TFilm[];
};

const initialState: states = {
  savedFilms: [],
  savedFilm: {},
  isChanged: false,
  filteredFilms: [],
};

const savedFilmsSlice = createSlice({
  name: 'saved',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSaved.fulfilled, (state, action) => {
      console.log(action.payload);
      state.savedFilms = action.payload;
    });
    builder.addCase(postSaved.fulfilled, (state, action) => {
      state.savedFilms.push(action.payload);
    });
    builder.addCase(deleteSaved.fulfilled, (state, action) => {
      state.isChanged = !state.isChanged;
      state.savedFilms.filter((c) => c.nameRU === action.payload.nameRU);
    });
    builder.addCase(filterSaved, (state) => {
      state.filteredFilms = state.savedFilms.filter((i) => i.duration <= 40);
    });
  },
});

export default savedFilmsSlice.reducer;
export const selectSaved = (state: RootState) => state.savedFilmsSlice;
