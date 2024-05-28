import { createAsyncThunk } from "@reduxjs/toolkit";
import { VideoType } from "../../helpers/types";
import axios from "axios";
import { $axios } from "../../helpers/axios";

export const getVideos = createAsyncThunk(
    "videos/getVideos",
    async () => {
      try {
        const { data } = await $axios.get<VideoType>(`/videos/`);        
        return data
      } catch (error) {
        console.log(error);
    }
  }
  );

  export const postVideos = createAsyncThunk(
    "videos/postVideos",
    async ({ newData }: { newData: FormData }) => {
      try {
        await $axios.post<VideoType>(`/videos/`, newData);
      } catch (error) {
        console.log(error);
    }
  }
  );
  export const getVideoById = createAsyncThunk(
    "users/getCurrentUser",
    async (id: string) => {
      try {
        const { data } = await $axios.get<VideoType>(`/videos/${id}/`);
        console.log(data);
        return data
      } catch (error) {
        console.log(error);
    }
  }
  );