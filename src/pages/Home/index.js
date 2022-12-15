import "./index.css";  
import { Link } from "react-router-dom";
  
export function Home() {

  return (
    <div className="hero-image">

      <div className="texto-home">
        <h1>Reserva de</h1>
        <h1>laboratórios e</h1>
        <h1>instrumentos</h1>
        <h1>musicais</h1> 
      </div>
      <div className="login-section">
        <div className="login-box">

          <h4>Já possui cadastro?</h4>
          <button className="blueButton">
            <Link className="nav-link" to="/login">ENTRAR</Link></button>
          <h4>Novo usuário?</h4>
          <button className="blueButton">
            <Link className="nav-link" to="/sign-up">CADASTRE-SE</Link></button>

        </div>
      </div>
    </div>
  );
}