import { createSlice } from "@reduxjs/toolkit";

interface IStateSchema {
    isAuth: boolean,
}

const initialState: IStateSchema = {
    isAuth: false,
};
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn(state) {
            const token = localStorage.getItem('memorify');

            if (token) {
                state.isAuth = true;
            }
        },
        logout(state) {
            localStorage.removeItem('memorify');
            state.isAuth = false;
        }
    }
}
)

export const { actions: authAction } = authSlice;
export const { reducer: authReducer } = authSlice;