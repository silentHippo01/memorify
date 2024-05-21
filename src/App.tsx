
import { RouterProvider } from 'react-router-dom'
import { router } from './App/Providers/Router/AppRouter.tsx'
import './index.css'
import NavBar from './widgets/NavBar/index.ts';
import { SnackbarProvider } from 'notistack';
import { Divider } from '@nextui-org/react';

const App = () => {
    return (
        <div className="flex flex-col h-full">
            <NavBar />
            <Divider />
            <SnackbarProvider />
            <div className='container mx-auto'>
                <RouterProvider router={router} />
            </div>

        </div>
    );
};

export default App;