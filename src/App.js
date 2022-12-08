import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { setAuthLoading, setCredential, useAuth } from "./redux/slice/authSlice";
import Header from "./components/Header";
import useAxiosPublic from "./api/axiosPublic";
import Loading from "./components/Loading";
import routes from './routes/routes';

function App() {
  const dispatch = useDispatch();
  const { access_token, loading } = useAuth();
  const axios = useAxiosPublic();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get('/refresh');
        dispatch(setCredential(res.data));
      } catch (error) { }
      finally {
        dispatch(setAuthLoading(false));
      }
    }
    if (!access_token) {
      checkAuth();
    }
  }, []);

  if (loading) return <Loading />

  return (
    <>
      <Header />
      {routes}
    </>
  )
}

export default App;
