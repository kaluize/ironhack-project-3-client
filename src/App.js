import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/index.js";
import { AuthContextComponent } from "./contexts/authContext";
import { Profile } from "./pages/Profile/index.js";
import { ErrorPage } from "./pages/ErrorPage/index.js";
import BookingsPage from "./pages/Bookings/index.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from "react-hot-toast";

import { Resources } from "./pages/Resources/index.js";
import { ProtectedRoute } from "./components/ProtectedRoute/index.js";
import { ProtectedGestorRoute } from "./components/ProtectedGestorRoute/index.js";

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
          <Route path="/recursos" element={<Resources />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
