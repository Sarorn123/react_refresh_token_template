import { Routes, Route } from "react-router-dom"
import About from "../components/About";
import Home from "../components/Home";
import Login from "../components/Login";
import NotFounded from "../components/NotFounded";
import ProtectIsAuthenticated from "../components/ProtectIsAuthenticated";
import RequiredAuth from "../components/RequiredAuth";

const routes =
    <Routes>
        {/* public route */}
        <Route element={<ProtectIsAuthenticated />} >
            <Route path="/login" element={<Login />} />
        </Route>

        {/* private route */}
        <Route element={<RequiredAuth />} >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFounded />} />
    </Routes>

export default routes;