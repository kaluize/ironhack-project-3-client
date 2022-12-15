import MyBookings from "./MyBookings";
import MyResources from "./MyResources";
import { UserInfo } from "./UserInfo";
import AllUsers from "./AllUsers";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import "../../app.css";

export function Profile() {
  return (
    <div className="profile-page">

      <div className="barra-lateral">
        <div className="avatar">
        <h1>Fulano</h1>
        </div>
        <div>
            <p><Link className="link-barra-lateral" to="/" >Meus dados</Link></p>
            <p><Link className="link-barra-lateral" to="/recursos" >Meus recursos</Link></p>
            <p><Link className="link-barra-lateral" to="/reservas" >Minhas reservas</Link></p>
            <p><Link className="link-barra-lateral" to="/">Sair</Link></p>
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
      </Routes>
    </divdiv>
  );
}
