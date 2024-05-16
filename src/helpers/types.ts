import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Store/Store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export type StatesType = {
  error: null | string;
  loading: boolean;
  user: null | ProfileType;
};
export type RegisterValues = {
  email: string;
  password: string;
  password_confirm: string;
  [key: string]: string;
};

export type LoginValues = Omit<RegisterValues, "password_confirm">;

export interface ProfileType {
  id: number;
  email: string;
}