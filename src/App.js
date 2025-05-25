import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import DataPesanan from "./pages/DataPesanan";
import NotFoundPage from "./pages/NotFoundPage";
import ManajemenUser from "./pages/ManajemenUser";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./components/AuthContext";
import { Toaster } from 'sonner';
import LiveTrackingPage from "./pages/LiveTrackingPage";


function App() {
  return (
    <div className="App">
      <Toaster position="top-right" richColors />
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dataPesanan"
              element={
                <ProtectedRoute>
                  <DataPesanan />
                </ProtectedRoute>
              }
            />
            <Route
              path="/manajemenUser"
              element={
                <ProtectedRoute>
                  <ManajemenUser />
                </ProtectedRoute>
              }
            />
            <Route
              path="/liveTracking"
              element={
                <ProtectedRoute>
                  <LiveTrackingPage />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
