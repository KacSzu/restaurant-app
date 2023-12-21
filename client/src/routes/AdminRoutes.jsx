import { Route, Navigate, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Signup from "../pages/Signup";
import Menu from "../pages/Menu";
import Settings from "../pages/Settings";
import PageNotFound from "../pages/PageNotFound";

function AdminRoutes() {
  return (
    <Routes>
      <Route index element={<Navigate replace to="dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AdminRoutes;
