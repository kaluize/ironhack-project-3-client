import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import MyBookings from "./MyBookings";
import MyResources from "./MyResources";
import { UserInfo } from "./UserInfo";
import AllUsers from "./AllUsers"
import { ProtectedRoute } from "../../components/ProtectedRoute";
import { ProtectedGestorRoute } from "../../components/ProtectedGestorRoute";
import { Routes, Route } from "react-router-dom";



export function Profile() {
  
  return (
    
    <>
      <h1>Barra de navegação à esquerda e janela com info à direita</h1>

        <Routes>
          <Route
            path="/meus-dados"
            element={<UserInfo />/*<ProtectedRoute Component={UserInfo} />*/}
          />
          <Route
            path="/todos"
            element={<AllUsers />/*<ProtectedRoute Component={UserInfo} />*/}
          />
          <Route
            path="/minhas-reservas"
            element={<ProtectedRoute Component={MyBookings} />}
          />
          <Route
            path="/meus-recursos"
            element={<ProtectedGestorRoute Component={MyResources} />}
          />
         
        </Routes>


    </>


  );
}