import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./Users/User.slice";
import { videosSlice } from "./Videos/Videos.slice";

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    videos: videosSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;