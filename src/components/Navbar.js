import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../app.css";

function NavBar() {
  return (
    <Navbar className="navBar">
        <div>
        <Link className="link-navbar" to="/">
          Home
        </Link>
        <Link className="link-navbar" to="/sobre-nos">
          Sobre nós
        </Link>
        <Link className="link-navbar" to="*">
          Não clique aqui
        </Link>
        <Link className="link-navbar" to="/">
          Sair
        </Link>
        </div>
    </Navbar>
  );
}

export default NavBar;
