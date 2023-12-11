import { createSlice } from '@reduxjs/toolkit';

const initialStateValues = {
  userDetails: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialStateValues,
  reducers: {
    setUser: (state, action) => {
      state.userDetails = action.payload;
    }
  }
});

export const { setUser } = userSlice.actions;
