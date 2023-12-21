import { Route, Navigate, Routes } from "react-router-dom";
import NewOrder from "../pages/NewOrder";
import ReadyToServe from "../pages/ReadyToServe";
import Settings from "../pages/Settings";
import PageNotFound from "../pages/PageNotFound";

function WaiterRoutes() {
  return (
    <Routes>
      <Route index element={<Navigate replace to="newOrder" />} />
      <Route path="/newOrder" element={<NewOrder />} />
      <Route path="/ready" element={<ReadyToServe />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default WaiterRoutes;
