import { createSlice } from "@reduxjs/toolkit";
import { StatesType } from "../../helpers/types";
import { getVideos } from "./Videos.action";

const INIT_STATE: StatesType = {
  error: null,
  loading: false,
  videos: [],
};

export const videosSlice = createSlice({
  name: "videos",
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getVideos.fulfilled, (state, { payload }) => {
        state.videos = Array.isArray(payload) ? payload : [];
        state.loading = false;
      })
  },
});

export default videosSlice.reducer;
