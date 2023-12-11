import { createSlice } from '@reduxjs/toolkit';
import { isMobile } from '../../utils/device';

const initialStateValues = {
  is_mobile: false,
  isApi: false
};

export const deviceSlice = createSlice({
  name: 'device',
  initialState: initialStateValues,
  reducers: {
    setDevice: (state) => {
      state.is_mobile = isMobile();
    },
    setIsApi: (state, action) => {
      state.isApi = action.payload;
    }
  }
});
export const { setDevice, setIsApi } = deviceSlice.actions;
