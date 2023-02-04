import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isAsideOpen: false,
};

const tooltipSlice = createSlice({
  name: 'aside',
  initialState,
  reducers: {
    setIsAsideOpen(state, action: PayloadAction<boolean>) {
      state.isAsideOpen = action.payload;
    },
  },
});

export const { setIsAsideOpen } = tooltipSlice.actions;
export default tooltipSlice.reducer;
