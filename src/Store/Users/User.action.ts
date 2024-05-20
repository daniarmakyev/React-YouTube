import { createAsyncThunk } from "@reduxjs/toolkit";
import { $axios } from "../../helpers/axios";
import { setError, usersSlice } from "./User.slice";
import { LoginValues, ProfileType, RegisterValues } from "../../helpers/types";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (
    {data,navigate,}: { data: RegisterValues; navigate: (path: string) => void },{ dispatch } ) => {
      
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("password_confirm", data.password_confirm);

      try {
        const res:any = await axios.post("http://34.16.210.117/api/v1/accounts/register/", formData);
        console.log(navigate);
        navigate('/')
      } catch (error) {
        console.log(error);
      }

    }
  
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (
    { data, navigate }: { data: LoginValues; navigate: (path: string) => void },
    { dispatch }
  ) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    try {
      const response = await $axios.post("/accounts/login/", formData);
      localStorage.setItem("tokens", JSON.stringify(response.data));
      dispatch(getCurrentUser());
      navigate("/");
      dispatch(setError(null));
    } catch (error: any) {
      console.error("Error:", error); 
      if (error.response?.status === 401) {
        dispatch(setError("Неправильный email или пароль"));
      } else {
        dispatch(setError("Неправильный email или пароль"));
      }
    }
  }
);


export const getCurrentUser = createAsyncThunk(
  "users/getCurrentUser",
  async () => {
    try {
      const { data } = await $axios.get<ProfileType>("/account/profile/");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
