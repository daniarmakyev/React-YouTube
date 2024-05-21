import { createSlice } from "@reduxjs/toolkit";
import { StatesType } from "../../helpers/types";
import { getCurrentUser, getOneUser, loginUser } from "./User.action";
import { log } from "console";

const INIT_STATE: StatesType = {
  error: null,
  loading: false,
  user: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: INIT_STATE,
  reducers: {
    setError: (state, { payload }) => {
      state.error = payload;
    },
    logout: (state) => {
      localStorage.removeItem("tokens");
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
      }).addCase(getOneUser.fulfilled, (state, action) => {
        state.user = action.payload!;
        state.loading = false;
      })
      .addCase(getOneUser.pending, (state) => {
        state.loading = true;
      })
  },
});

export const { setError, logout } = usersSlice.actions;

export default usersSlice.reducer;
