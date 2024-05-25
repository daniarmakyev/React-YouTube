import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import MainLayout from "./MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import RegisterPage from "../Pages/Auth/RegisterPage";
import LoginPage from "../Pages/Auth/LoginPage";
import ProfileEditPage from "../Pages/ProfilePage/ProfileEditPage";
import AddVideoPage from "../Pages/AddVideo/AddVideoPage";
import DetailView from "../Pages/DetailView/DetailView";

export const router = createBrowserRouter([
    {
       id: "root",
      errorElement: <ErrorPage />,
      element: <MainLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/profile", element: <ProfilePage /> },
        { path: "/register", element: <RegisterPage /> },
        { path: "/login", element: <LoginPage/> },
        { path: "/editProfile", element: <ProfileEditPage/> },
        { path: "/addVideo", element: <AddVideoPage/> },
        { path: "/detailView/:id", element: <DetailView/> },
      ],
    },
  ]);
  