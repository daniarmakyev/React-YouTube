import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Store/Store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export type StatesType = {
  error: null | string;
  loading: boolean;
  user?: null | ProfileType;
  videos?: VideoType[];
  video?:null | VideoType;
  currentUser?:null | ProfileType;
};

export type RegisterValues = {
  email: string;
  password: string;
  password_confirm: string;
  first_name:string;
  last_name:string;
  [key: string]: string;
};

export type LoginValues = Omit<RegisterValues, "password_confirm">;

export interface ProfileType {
  id?(id?: any): unknown;
  email?: string;
  first_name: string;
  last_name: string;
  profile_picture: string | File;
  subs_count?: string | number;
}



export interface VideoType {
  results?: any;
  id?: any;
  likes_count?: string;
  title?: string;
  description?: string;
  file?: string | File;
  thumbnail?: string | File;
  uploaded_at?: string | Date;
  owner?: number;
}


// {
//   id	integer
//   title: ID
//   readOnly: true
//   likes_count	string
//   title: Likes count
//   readOnly: true
//   title*	string
//   title: Title
//   maxLength: 255
//   minLength: 1
//   description*	string
//   title: Description
//   minLength: 1
//   file	string($uri)
//   title: File
//   readOnly: true
//   thumbnail	string($uri)
//   title: Thumbnail
//   readOnly: true
//   x-nullable: true
//   uploaded_at	string($date-time)
//   title: Uploaded at
//   readOnly: true
//   owner*	integer
//   title: Owner
   
//   }

