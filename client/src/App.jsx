import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NewOrder from "./pages/NewOrder";
import Login from "./pages/Login";
import ReadyToServe from "./pages/ReadyToServe";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Settings from "./pages/Settings";
import { useSelector } from "react-redux";
import { getCurrentUser } from "./features/authentication/userSlice";
import AppLayout from "./ui/AppLayout";
import Kitchen from "./pages/Kitchen";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Menu from "./pages/Menu";
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

          {user?.role === "waiter" && (
            <Route
              element={user ? <AppLayout /> : <Navigate replace to="/login" />}
            >
              <Route index element={<Navigate replace to="/newOrder" />} />
              <Route path="/newOrder" element={<NewOrder />} />
              <Route path="/ready" element={<ReadyToServe />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          )}
          {user?.role === "kitchen" && (
            <Route
              element={user ? <AppLayout /> : <Navigate replace to="/login" />}
            >
              <Route index element={<Navigate replace to="/kitchen" />} />
              <Route path="/kitchen" element={<Kitchen />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          )}
          {user?.role === "admin" && (
            <Route
              element={user ? <AppLayout /> : <Navigate replace to="/login" />}
            >
              <Route index element={<Navigate replace to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          )}
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
            duration: 2000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "18px",
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
