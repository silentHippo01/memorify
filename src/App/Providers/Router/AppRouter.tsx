import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "@/Pages/ErrorPage";
import LoginPage from "@/Pages/LoginPage";
import MainPage from "@/Pages/MainPage";
import LearnPage from "@/Pages/LearnPage";
import EditPage from "@/Pages/EditPage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/profile',
        element: <div>Profile</div>
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/pack/learn/:id_pack',
        element: <LearnPage />
    },
    {
        path: '/pack/edit/:id_pack',
        element: <EditPage />
    }
])