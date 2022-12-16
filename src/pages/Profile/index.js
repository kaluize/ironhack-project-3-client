import MyBookings from "./MyBookings";
import MyResources from "./MyResources";
import { UserInfo } from "./UserInfo";
import AllUsers from "./AllUsers"
import { ProtectedRoute } from "../../components/ProtectedRoute";
import { Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext.js";
import './index.css'



export function Profile() {
  const { loggedInUser } = useContext(AuthContext);
  return (
    
<div className="profile-container">
<div className="olaFulano">
  <div>
  <h5>{loggedInUser.user.name}</h5>
  <p>{loggedInUser.user.role}</p>
  </div>
</div>
<div className="profile-options">
  <div className="dash-portfolio">
    <p>O que deseja fazer?</p>

    <div className="user-action">
        <Link to="meus-dados">
            <center>
              <p>Meus dados</p>
            </center>
        </Link>
        <Link to="minhas-reservas">
            <center>
              <p>Reservas</p>
            </center>
        </Link>
    </div>
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
</div>

  );
}