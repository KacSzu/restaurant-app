import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";
import AppLayout from "./ui/AppLayout";
import NewOrder from "./pages/NewOrder";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="overview" />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/newOrder" element={<NewOrder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
