import { logout, setCredential, useAuth } from "../redux/slice/authSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import dayjs from "dayjs";
import useAxiosPublic from "./axiosPublic";
import { useNavigate } from "react-router-dom";

const useAxiosPrivate = () => {

    const { access_token } = useAuth();
    const axiosPublic = useAxiosPublic();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const instance = axios.create({
        baseURL: 'http://localhost:4000',
        withCredentials: true,
        headers: {
            'Authorization': 'Bearer ' + access_token,
        }
    });

    instance.interceptors.request.use(async req => {
        const user = jwtDecode(access_token);
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
        if (!isExpired) return req;

        try {
            const response = await axiosPublic.get('/refresh');
            dispatch(setCredential(response.data));

            req.headers.Authorization = 'Bearer ' + response.data.access_token;
            return req;

        } catch (error) {
            dispatch(setCredential(logout()));
            return navigate('/login');
        }

    });

    return instance;
};

export default useAxiosPrivate;