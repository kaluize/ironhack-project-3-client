import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EditUserModal from "../../../components/UserComponents/EditUserModal";

export function UserInfo() {
  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get("/user/profile");
      setUser(response.data);
    }

    fetchUser();
  }, []);

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  return (
    
    
    
    <>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.idNumber}</p>
      <EditUserModal user={user}/>
      <button onClick={handleLogOut}>Sair</button>
    </>
  );
}