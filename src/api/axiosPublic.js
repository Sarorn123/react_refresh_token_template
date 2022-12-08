import axios from "axios";

const useAxiosPublic = () => {
   
    const instance = axios.create({
        baseURL: 'http://localhost:4000',
        withCredentials: true,
    });

    return instance;
};

export default useAxiosPublic;