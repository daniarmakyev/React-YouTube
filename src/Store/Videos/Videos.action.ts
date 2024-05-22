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