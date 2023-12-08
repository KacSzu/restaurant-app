import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";
import AppLayout from "./ui/AppLayout";
import NewOrder from "./pages/NewOrder";
import Login from "./pages/Login";
import ReadyToServe from "./pages/ReadyToServe";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Settings from "./pages/Settings";
import { useSelector } from "react-redux";
import { getCurrentUser } from "./features/authentication/userSlice";
function App() {
  const user = useSelector(getCurrentUser);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route element={user ? <AppLayout /> : <Navigate to="/login" />}>
            <Route index element={<Navigate replace to="/overview" />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/newOrder" element={<NewOrder />} />
            <Route path="/ready" element={<ReadyToServe />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerClassName={{
          margin: "8px",
        }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fff",
            color: "#111",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
