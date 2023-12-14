import { Route, Navigate, Routes } from "react-router-dom";
import Kitchen from "../pages/Kitchen";
import Menu from "../pages/Menu";
import Settings from "../pages/Settings";
function KitchenRoutes({ user }) {
  if (user?.role !== "kitchen") {
    return <Navigate replace to="/" />;
  }

  return (
    <Routes>
      <Route index element={<Navigate replace to="kitchen" />} />
      <Route path="/kitchen" element={<Kitchen />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default KitchenRoutes;
