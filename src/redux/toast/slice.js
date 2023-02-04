import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
  message: '',
  condition: '',
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    setToast(_, action) {
      return action.payload;
    },
    closeToast() {
      return initialState;
    },
  },
});

export const { setToast, closeToast } = toastSlice.actions;

export const selectToast = state => state.toast;
