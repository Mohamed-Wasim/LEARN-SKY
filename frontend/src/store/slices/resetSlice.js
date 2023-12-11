import { createSlice } from '@reduxjs/toolkit';

export const resetSlice = createSlice({
  name: 'reset',
  initialState: {},
  reducers: {
    // ...
    resetData() {
      // Note that this should be left intentionally empty.
      // Clearing redux state and localForage happens in rootReducer.ts.
    }
  }
});

export const { resetData } = resetSlice.actions;
