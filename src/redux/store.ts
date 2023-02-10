import { configureStore } from '@reduxjs/toolkit';
import filmsSlice from './filmsSlice';
import tooltipSlice from './tooltipSlice';

export const store = configureStore({
  reducer: {
    tooltipSlice,
    filmsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
