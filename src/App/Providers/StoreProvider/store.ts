import { authReducer } from "@/features/auth/model/authSlice";
import { rtkApi } from "@/shared/api/rtkApi";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";



export const store = configureStore({
    reducer: {
        [rtkApi.reducerPath]: rtkApi.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkApi.middleware),
})

setupListeners(store.dispatch)