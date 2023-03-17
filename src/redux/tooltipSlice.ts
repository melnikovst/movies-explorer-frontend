import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IS {
  isAsideOpen: boolean;
  isTechOpen: null | number;
}

const initialState: IS = {
  isAsideOpen: false,
  isTechOpen: null,
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

export const { setIsAsideOpen, } = tooltipSlice.actions;
export default tooltipSlice.reducer;
