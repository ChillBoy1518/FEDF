import { Routes, Route } from "react-router-dom";

import Login from "../ProtectedRoutes/Login";
import Dashboard from "../ProtectedRoutes/Dashboard";
import ProtectedRoute from "../ProtectedRoutes/ProtectedRoute";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;