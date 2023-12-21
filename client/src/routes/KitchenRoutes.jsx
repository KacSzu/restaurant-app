import { Route, Navigate, Routes } from "react-router-dom";
import Kitchen from "../pages/Kitchen";
import Menu from "../pages/Menu";
import Settings from "../pages/Settings";
import PageNotFound from "../pages/PageNotFound";
function KitchenRoutes() {
  return (
    <Routes>
      <Route index element={<Navigate replace to="kitchen" />} />
      <Route path="/kitchen" element={<Kitchen />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default KitchenRoutes;
