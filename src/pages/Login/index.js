  
// import { useState, useContext } from "react";
// import { AuthContext } from "../../contexts/authContext";
// import { api } from "../../api/api";
// import { useNavigate } from "react-router-dom";
// import ModalNewUser from "../../components/UserComponents/NewUserModal";

// export function Login() {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const { setLoggedInUser } = useContext(AuthContext);

//   function handleChange(e) {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();

//     try {
//       const response = await api.post("/user/login", form);
//       setLoggedInUser({ ...response.data });

//       localStorage.setItem("loggedInUser", JSON.stringify(response.data));

//       navigate("/profile");
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (


//     <div className="hero-image">

//     <div className="texto-home">
//       <h1>Reserva de</h1>
//       <h1>laboratórios e</h1>
//       <h1>instrumentos</h1>
//       <h1>musicais</h1> 
//     </div>
//     <div className="login-section">
//       <div className="login-box">
//       <form className="form" onSubmit={handleSubmit}>
//       <label>Email:</label>
//       <input className="input"
//         type="email"
//         name="email"
//         value={form.email}
//         onChange={handleChange}
//       />
//       <label>Senha:</label>
//       <input
//         type="password"
//         name="password"
//         value={form.password}
//         onChange={handleChange}
//       />
//       <button className="blueButton" type="submit">ENTRAR</button>
//       <ModalNewUser /> 
//     </form>
        
//       </div>
//     </div>
//   </div>




//   );
// }