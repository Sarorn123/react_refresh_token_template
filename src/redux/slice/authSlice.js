import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState = {
    access_token: null,
    user: null,
    loading: true,
}

export const counterSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredential: (state, action) => {
            state.access_token = action.payload.access_token;
            state.user = action.payload.user;
        },
        setAuthLoading: (state, action) => {
            state.loading = action.payload;
        },
        logout: (state) => {
            state.access_token = null;
            state.user = null;
        }
    },
})

export const { setCredential, setAuthLoading, logout } = counterSlice.actions
export const useAuth = () => useSelector(state => state.auth);

export default counterSlice.reducer