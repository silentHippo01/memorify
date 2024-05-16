
import { RouterProvider } from 'react-router-dom'
import { router } from './App/Providers/Router/AppRouter.tsx'
import './index.css'
import NavBar from './widgets/NavBar/index.ts';
import { SnackbarProvider } from 'notistack';

const App = () => {
    return (
        <div className="flex flex-col h-screen">
            <NavBar />
            <SnackbarProvider />
            <div className='container mx-auto h-screen'>
                <RouterProvider router={router} />
            </div>

        </div>
    );
};

export default App;