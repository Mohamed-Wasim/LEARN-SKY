import { createSlice } from '@reduxjs/toolkit';

const initialStateValues = {
  delete: []
};

export const fileSlice = createSlice({
  name: 'files',
  initialState: initialStateValues,
  reducers: {
    addDeleteques: (state, action) => {
      state.delete = [...state.delete, action.payload];
    }
  }
});
export const { addDeleteques } = fileSlice.actions;
