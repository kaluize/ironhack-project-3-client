import MyBookings from "./MyBookings";
import MyResources from "./MyResources";
import { UserInfo } from "./UserInfo";
import AllUsers from "./AllUsers";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import ModalNewGestor from "../../components/UserComponents/NewGestorModal";
import BookingsPage from "../Bookings";

import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import "../../app.css";

export function Profile() {
  const { loggedInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  return (
    <div className="profile-page">
      <div className="barra-lateral">
        <div className="avatar">
          <h1>{loggedInUser.user.name}</h1>
          <h3>{loggedInUser.user.role.toLowerCase()}</h3>
        </div>
        <div>
          <p>
            <Link className="link-barra-lateral" to="meus-dados">
              Meus dados
            </Link>
          </p>
          <p>
            <Link className="link-barra-lateral" to="minhas-reservas">
              Minhas reservas
            </Link>
          </p>
          <p>
            <Link className="link-barra-lateral" to="fazer-reserva">
              Nova Reserva
            </Link>
          </p>
          {loggedInUser.user.role === "GESTOR" && (
            <>
              <p>
                <Link className="link-barra-lateral" to="meus-recursos">
                  Recursos
                </Link>
              </p>
              <p>
                <Link className="link-barra-lateral" to="todos">
                  Usuários
                </Link>
              </p>
              <ModalNewGestor />
            </>
          )}
          <p>
            <Link className="link-barra-lateral-red" to="/" onClick={handleLogOut}>
              Sair
            </Link>
          </p>
        </div>
      </div>

      <Routes>
        <Route
          path="/meus-dados"
          element={<ProtectedRoute Component={UserInfo} />}
        />
        <Route
          path="/todos"
          element={<ProtectedRoute Component={AllUsers} />}
        />
        <Route
          path="/minhas-reservas"
          element={<ProtectedRoute Component={MyBookings} />}
        />
        <Route
          path="/meus-recursos"
          element={<ProtectedRoute Component={MyResources} />}
        />
        <Route
          path="/fazer-reserva"
          element={<ProtectedRoute Component={BookingsPage} />}
        />
      </Routes>
    </div>
  );
}
