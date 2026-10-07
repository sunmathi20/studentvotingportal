import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useAuth } from "./context/AuthContext";

import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Candidates from "./pages/Candidates";
import Vote from "./pages/Vote";
import Results from "./pages/Results";

const ProtectedLayout = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="app">
      <Navbar />

      <Sidebar />

      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedLayout>
              <Dashboard />
            </ProtectedLayout>
          }
        />

        <Route
          path="/candidates"
          element={
            <ProtectedLayout>
              <Candidates />
            </ProtectedLayout>
          }
        />

        <Route
          path="/vote"
          element={
            <ProtectedLayout>
              <Vote />
            </ProtectedLayout>
          }
        />

        <Route
          path="/results"
          element={
            <ProtectedLayout>
              <Results />
            </ProtectedLayout>
          }
        />

        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />

        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;