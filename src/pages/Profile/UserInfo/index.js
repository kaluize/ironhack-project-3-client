import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditMeModal from "../../../components/UserComponents/EditMeModal";
import { api } from "../../../api/api";

export function UserInfo() {
  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchUser() {
      const response = await api.get("/user/profile");
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
      <p>Matrícula: {user.idNumber}</p>
      {user.booking && user.booking.map((booking, index) => {
        return (
          <div key={user.email}>
            <p>{booking.resource}</p>
            <p>{booking.date}</p>
          </div>
        )
      })}
      <EditMeModal user={user}/>
      <button onClick={handleLogOut}>Sair</button>
    </>
  );
}