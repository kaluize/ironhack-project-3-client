import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/index.js";
import { AuthContextComponent } from "./contexts/authContext";
import { Profile } from "./pages/Profile/index.js";
import { ErrorPage } from "./pages/ErrorPage/index.js";
import BookingsPage from "./pages/Bookings/index.js";
import About from "./pages/About/index.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from "react-hot-toast";

import { Resources } from "./pages/Resources/index.js";
import { ProtectedRoute } from "./components/ProtectedRoute/index.js";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/*" element={<ProtectedRoute Component={Profile} />}/>
          <Route path="/reservas" element={<ProtectedRoute Component={BookingsPage} />} />
          <Route path="/recursos" element={<ProtectedRoute Component={Resources} />} />
          <Route path="/sobre-nos" element={<ProtectedRoute Component={About} />} />
          <Route path="*" element={<ProtectedRoute Component={ErrorPage} />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
