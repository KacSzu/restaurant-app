import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { getCurrentUser } from "./components/authentication/userSlice";
import Login from "./pages/Login";

import AppLayout from "./components/ui/AppLayout";
import AdminRoutes from "./routes/AdminRoutes";
import KitchenRoutes from "./routes/KitchenRoutes";
import WaiterRoutes from "./routes/WaiterRoutes";
import PageNotFound from "./pages/PageNotFound";
import Homepage from "./pages/Homepage";

const queryClient = new QueryClient();

function App() {
  const user = useSelector(getCurrentUser);
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />

          <Route element={user ? <AppLayout /> : <Navigate to="/" />}>
            {user?.role === "admin" && (
              <Route path="/*" element={<AdminRoutes user={user} />} />
            )}
            {user?.role === "waiter" && (
              <Route path="/*" element={<WaiterRoutes user={user} />} />
            )}
            {user?.role === "kitchen" && (
              <Route path="/*" element={<KitchenRoutes user={user} />} />
            )}
          </Route>
          <Route path="*" element={<PageNotFound />} />
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
