import { configureStore } from '@reduxjs/toolkit';
import filmsSlice from './filmsSlice';
import formSlice from './formSlice';
import tooltipSlice from './tooltipSlice';

export const store = configureStore({
  reducer: {
    tooltipSlice,
    filmsSlice,
    formSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
