import { Routes, Route } from "react-router-dom"
import About from "../components/About";
import Home from "../components/Home";
import Login from "../components/Login";
import NotFounded from "../components/NotFounded";
import ProtectIsAuthenticated from "../components/ProtectIsAuthenticated";
import RequiredAuth from "../components/RequiredAuth";
import Creator from "../components/Creator";
import Admin from "../components/Admin";
import UnAuthorize from "../components/UnAuthorize";
import AdminLayout from "../components/Admin/AdminLayout";
import Dashboard from "../components/Admin/Dashboard";
import UserManagement from "../components/Admin/UserManagement";
import UserDetail from "../components/Admin/UserDetail";

const ROLES = {
    Admin: "Admin",
    Creator: "Creator",
    User: "User",
}


const routes =
    <Routes>
        {/* public route */}
        <Route element={<ProtectIsAuthenticated />} >
            <Route path="/login" element={<Login />} />
        </Route>

        {/* private route with role rule */}
        <Route element={<RequiredAuth allowRoles={[ROLES.Creator, ROLES.Admin]} />} >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Route>

        <Route element={<RequiredAuth allowRoles={[ROLES.Creator]} />} >
            <Route path="/creator" element={<Creator />} />
        </Route>

        <Route element={<RequiredAuth allowRoles={[ROLES.Admin]} />} >
            <Route path="/admin" element={<AdminLayout />} >
                <Route index element={<div>Hello</div>} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="user-managment" element={<UserManagement />} />
                <Route path="user-managment/:id" element={<UserDetail />} >
                    <Route path="history" element={<h1>History Of User</h1>} />
                    <Route path="family" element={<h1>User Family</h1>} />
                </Route>
            </Route>
        </Route>

        <Route path="*" element={<NotFounded />} />
        <Route path="/unauthorize" element={<UnAuthorize />} />

    </Routes>

export default routes;