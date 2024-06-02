import { createSlice } from "@reduxjs/toolkit";

interface IStateSchema {
    isAuth: boolean,
    id_user: number,
}

const initialState: IStateSchema = {
    isAuth: false,
    id_user: 0,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn(state) {
            const token = localStorage.getItem('memorify');
            const decodedToken = JSON.parse(atob(token!.split('.')[1]));
            console.log(decodedToken)

            if (token && decodedToken) {
                state.isAuth = true;
                state.id_user = decodedToken.id;
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