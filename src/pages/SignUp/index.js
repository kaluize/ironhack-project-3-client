import { useState, useContext } from "react";
// import { AuthContext } from "../../contexts/authContext";
// import { api } from "../../api/api";
// import { useNavigate } from "react-router-dom";
// import ModalNewUser from "../../components/UserComponents/NewUserModal";

export function SignUp() {
  const [form, setForm] = useState({
    name: "",
    idNumber: "",
    email: "",
    password: "",
  });

  // const navigate = useNavigate();

  // const { setLoggedInUser } = useContext(AuthContext);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      // const response = await api.post("/user/login", form);
      // setLoggedInUser({ ...response.data });

      // localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      // navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome:</label>
      <input
        type="name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <label>Matrícula:</label>
      <input
        type="idNumber"
        name="idNumber"
        value={form.idNumber}
        onChange={handleChange}
      />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      <label>Senha:</label>
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
      <button type="submit">CONFIRMAR</button>
      {/* <ModalNewUser />  */}
    </form>
  );
}