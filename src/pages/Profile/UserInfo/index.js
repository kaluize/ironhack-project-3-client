import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditMeModal from "../../../components/UserComponents/EditUserModal";
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

  // function handleLogOut() {
  //   localStorage.removeItem("loggedInUser");
  //   navigate("/");
  // }

  return (
    <div className="user-info">
      <h2>MEUS DADOS</h2>
      <br></br>
      <br></br>
      <h5>Nome do usuário:</h5>
      <p>{user.name}</p>
      <hr></hr>
      <h5>Email:</h5>
      <p>{user.email}</p>
      <hr></hr>
      <h5>Matrícula:</h5>
      <p>Matrícula: {user.idNumber}</p>
      {user.booking &&
        user.booking.map((booking, index) => {
          return (
            <div key={user.email}>
              <p>{booking.resource}</p>
              <p>{booking.date}</p>
            </div>
          );
        })}
      <EditMeModal user={user} />
      <br></br>
      {/* <button onClick={handleLogOut}>Sair</button> */}
    </div>
  );
}
