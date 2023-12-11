import { createSlice } from '@reduxjs/toolkit';

const initialStateValues = {
  permissions: [],
  isDirty: false,
  messages: [],
};

export const commonSlice = createSlice({
  name: 'common',
  initialState: initialStateValues,
  reducers: {
    setIsDirty: (state, action) => {
      state.isDirty = action.payload;
    },
    setMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    deleteMessage: (state, action) => {
      state.messages = state.messages.toSpliced(action.payload, 1);
    }
  }
});

export const {
  setIsDirty,
  setMessage,
  deleteMessage,
} = commonSlice.actions;
