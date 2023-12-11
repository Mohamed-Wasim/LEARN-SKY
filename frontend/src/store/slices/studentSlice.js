import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
  studentDetails: {}
};

export const studentSlice = createSlice({
  name: "student",
  initialState: initialStateValues,
  reducers: {
    setStudent: (state, action) => {
      state.studentDetails = action.payload;
    }
  }
});

export const { setStudent } = studentSlice.actions;
