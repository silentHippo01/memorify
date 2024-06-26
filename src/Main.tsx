import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { NextUIProvider } from '@nextui-org/react'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './App/Providers/StoreProvider/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <NextUIProvider>
            <Provider store={store}>
                <main className='text-foreground bg-background light flex flex-col h-full min-h-[100vh]'>
                    <App />
                </main>
            </Provider>
        </NextUIProvider>
    </React.StrictMode>
);