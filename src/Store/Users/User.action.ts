import { createAsyncThunk } from "@reduxjs/toolkit";
import { $axios } from "../../helpers/axios";
import { setError } from "./User.slice";
import { LoginValues, ProfileType, RegisterValues } from "../../helpers/types";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (
    { data, navigate }: { data: RegisterValues; navigate: (path: string) => void },
    { dispatch, rejectWithValue }
  ) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("password_confirm", data.password_confirm);
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.email);

    try {
      const res: any = await axios.post("http://34.16.210.117/api/v1/accounts/register/", formData);
      navigate('/');
      return res.data;
    } catch (error: any) {
      const er = "Ошибка! Этот пользователь уже зарегистрирован, прошу проверьте все поля!";
      return rejectWithValue(er);
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (
    { data, navigate }: { data: { email: string; password: string }; navigate: (path: string) => void },
    { dispatch }
  ) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    try {
      console.log("Sending login request with data:", {
        email: data.email,
        password: data.password,
      });

      const response = await $axios.post("/accounts/login/", formData);
      console.log('Login response:', response.data);

      localStorage.setItem("tokens", JSON.stringify(response.data));
      dispatch(getCurrentUser(data.email));
      navigate("/");
      dispatch(setError(null));
    } catch (error: any) {
      console.error("Login error:", error);
      console.error("Login error response:", error.response);
      if (error.response?.status === 401) {
        dispatch(setError("Неправильный email или пароль!"));
      } else {
        dispatch(setError("Произошла ошибка, попробуйте еще раз!"));
      }
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "users/getCurrentUser",
  async (email: string) => {
    try {
      const { data } = await $axios.get<ProfileType>(`/accounts/${email}`);
      localStorage.setItem('currentUser', data.id+'');
      localStorage.setItem('emailUser', JSON.stringify(data.email));
      return data
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOneUser = createAsyncThunk(
  "users/getOneUser",
  async (id: string) => {
    try {
      const { data } = await $axios.get<ProfileType>(`/accounts/${id}/`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editOneUser = createAsyncThunk(
  "users/editOneUser",
  async ({ id, newData }: { id: number; newData: FormData }) => {
    try {
      const { data } = await $axios.patch<ProfileType>(`/accounts/${id}/`, newData);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);