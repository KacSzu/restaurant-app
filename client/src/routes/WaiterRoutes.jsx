import { Route, Navigate, Routes } from "react-router-dom";
import NewOrder from "../pages/NewOrder";
import ReadyToServe from "../pages/ReadyToServe";
import Settings from "../pages/Settings";

function WaiterRoutes({ user }) {
  if (user?.role !== "waiter") {
    return <Navigate replace to="/" />;
  }
  return (
    <Routes>
      <Route index element={<Navigate replace to="newOrder" />} />
      <Route path="/newOrder" element={<NewOrder />} />
      <Route path="/ready" element={<ReadyToServe />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default WaiterRoutes;
