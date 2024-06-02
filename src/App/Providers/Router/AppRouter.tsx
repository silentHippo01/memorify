import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "@/Pages/ErrorPage";
import LoginPage from "@/Pages/LoginPage";
import MainPage from "@/Pages/MainPage";
import LearnPage from "@/Pages/LearnPage";
import EditPage from "@/Pages/EditPage";
import { RequireAuth } from "./RequireAuth";
import LibraryPage from "@/Pages/LibraryPage";


export const router = createBrowserRouter([
    {
        path: '/',
        // element: <MainPage />,
        element: (<RequireAuth><MainPage /></RequireAuth>),
        errorElement: <ErrorPage />
    },
    {
        path: '/profile',
        element: (
            <RequireAuth>
                <div>Profile</div>
            </RequireAuth>
        )
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/pack/learn/:id_pack',
        // element: <LearnPage />
        element: (<RequireAuth><LearnPage /></RequireAuth>)
    },
    {
        path: '/pack/edit/:id_pack',
        // element: <EditPage />
        element: (<RequireAuth><EditPage /></RequireAuth>)
    },
    {
        path: '/library',
        element: (
            <RequireAuth>
                <LibraryPage />
            </RequireAuth>
        )
    },
])