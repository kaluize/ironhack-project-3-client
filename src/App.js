import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { AuthContextComponent } from "./contexts/authContext";
import { Profile } from "./pages/Profile";
import { ErrorPage } from "./pages/ErrorPage";
import BookingsPage from "./pages/Bookings";
import ConfigurationsPage from "./pages/Configurations";

import { ProtectedRoute } from "./components/ProtectedRoute";
import { ProtectedGestorRoute } from "./components/ProtectedGestorRoute";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={<ProtectedRoute Component={Profile} />}
          />
          <Route path="/reservas" element={<BookingsPage />} />
          <Route
            path="/config"
            element={<ProtectedGestorRoute Component={ConfigurationsPage} />}
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;