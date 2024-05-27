import { createSlice } from "@reduxjs/toolkit";
import { StatesType } from "../../helpers/types";
import { getCurrentUser, getOneUser, loginUser, registerUser } from "./User.action";

const INIT_STATE: StatesType = {
  error: null,
  loading: false,
  user: null,
  currentUser: null,
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
      localStorage.removeItem("currentUser");
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(getOneUser.fulfilled, (state, action) => {
        state.user = action.payload!;
        state.loading = false;
      })
      .addCase(getOneUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.currentUser = action.payload!;
        state.loading = false;
      });
  },
});

export const { setError, logout } = usersSlice.actions;

export default usersSlice.reducer;
