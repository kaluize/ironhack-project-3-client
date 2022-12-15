import MyBookings from "./MyBookings";
import MyResources from "./MyResources";
import { UserInfo } from "./UserInfo";
import AllUsers from "./AllUsers"
import { ProtectedRoute } from "../../components/ProtectedRoute";
import { Routes, Route } from "react-router-dom";



export function Profile() {
  
  return (
    
    <div className="profile-page">

      <div className="barraNav">
        <h1>Barra de navegação à esquerda e janela com info à direita</h1>




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