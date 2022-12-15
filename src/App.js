import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/index.js";
// import { Login } from "./pages/Login/index.js";
// import { SignUp } from "./pages/SignUp/index.js";
import { AuthContextComponent } from "./contexts/authContext";
import { Profile } from "./pages/Profile/index.js";
import { ErrorPage } from "./pages/ErrorPage/index.js";
import BookingsPage from "./pages/Bookings/index.js";
// import ConfigurationsPage from "./pages/Configurations/index.js";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { ProtectedRoute } from "./components/ProtectedRoute/index.js";
// import { ProtectedGestorRoute } from "./components/ProtectedGestorRoute/index.js";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/*"
            // element={<ProtectedRoute Component={Profile} />}
            element={<Profile />}/>
          <Route path="/reservas" element={<BookingsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
