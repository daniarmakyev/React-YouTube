import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import MainLayout from "./MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";

export const router = createBrowserRouter([
    {
       id: "root",
      errorElement: <ErrorPage />,
      element: <MainLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/profile", element: <ProfilePage /> },
      ],
    },
  ]);
  