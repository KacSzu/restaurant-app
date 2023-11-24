import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="flex ">
      <Sidebar />
      <main className="flex-1 bg-neutral-50 ">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
