import { configureStore } from '@reduxjs/toolkit';
import filmsSlice from './filmsSlice';
import formSlice from './formSlice';
import tooltipSlice from './tooltipSlice';
import savedFilmsSlice from './savedFilmsSlice';

export const store = configureStore({
  reducer: {
    tooltipSlice,
    filmsSlice,
    formSlice,
    savedFilmsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
