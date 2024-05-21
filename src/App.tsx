
import { RouterProvider } from 'react-router-dom'
import { router } from './App/Providers/Router/AppRouter.tsx'
import './index.css'
import NavBar from './widgets/NavBar/index.ts';
import { SnackbarProvider } from 'notistack';
import { Divider } from '@nextui-org/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authAction } from './features/auth/model/authSlice.ts';

const App = () => {
    const isAuth = useSelector((state: any) => state.auth.isAuth);
    const dispatch = useDispatch();
    console.log(isAuth)

    useEffect(() => {
        dispatch(authAction.logIn())
    }, [dispatch])

    return (
        <div className="flex flex-col h-full">
            {isAuth && <NavBar />}
            <Divider />
            <SnackbarProvider />
            <div className='container mx-auto h-full'>
                <RouterProvider router={router} />
            </div>

        </div>
    );
};

export default App;