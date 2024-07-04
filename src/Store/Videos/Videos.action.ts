import { createAsyncThunk } from "@reduxjs/toolkit";
import { VideoType } from "../../helpers/types";
import axios from "axios";
import { $axios } from "../../helpers/axios";
import { useEffect } from "react";


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
  })

  // export const DELETEVIDEO = createAsyncThunk(
  //   "videos/DELETEVIDEO",
  //   async ( id: number ) => {
  //     try {
  //       await $axios.delete<VideoType>(`/videos/${id}/`);
  //     } catch (error) {
  //       console.log(error);
  //   }
  // }

  export const getVideoById = createAsyncThunk(
    "users/getVideoById",
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

  export const postLikes = createAsyncThunk(
    "videos/postLikes",
    async (id: string, thunkAPI) => {
      try {
        await $axios.post<VideoType>(`/like/${id}/`);
        thunkAPI.dispatch(getVideoById(id));
      } catch (error) {
        console.log(error);
    }
  })

  export const subScribe = createAsyncThunk(
    "videos/subScribe",
    async (id:string) => {
      try {
        await $axios.post<VideoType>(`/subscribe/${id}/`);
      } catch (error) {
        console.log(error);
    }
  })