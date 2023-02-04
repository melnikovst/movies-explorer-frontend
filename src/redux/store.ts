import { configureStore } from '@reduxjs/toolkit';
import tooltipSlice from './tooltipSlice';

export const store = configureStore({
  reducer: {
    tooltipSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
