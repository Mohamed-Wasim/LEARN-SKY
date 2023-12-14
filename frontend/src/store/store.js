import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userSlice } from "./slices/userSlice";
import { deviceSlice } from "./slices/deviceSlice";
import { commonSlice } from "./slices/commonslice";
import { resetSlice } from "./slices/resetSlice";
import { fileSlice } from "./slices/fileslice";
import { studentSlice } from "./slices/studentSlice";
const appReducer = combineReducers({
  // put all your reducers here!
  user: userSlice.reducer,
  student: studentSlice.reducer,
  device: deviceSlice.reducer,
  reset: resetSlice.reducer,
  common: commonSlice.reducer,
  files: fileSlice.reducer
});

const rootReducer = (state, action) => {
  if (action.type === "reset/resetData") {
    storage.removeItem("persist:root");

    state = {};
  }
  return appReducer(state, action);
};
const persistConfig = {
  key: "root", // Key for the root level of your Redux store
  storage, // Storage engine to use (e.g., localStorage, sessionStorage)
  whitelist: ["student", "device", "common"] // Specify the state slices to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false // Disable serializability checks
    })
});

export default store;
