import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../app.css"

function NavBar() {
  return (
    <Navbar className="navBar">
        <div>
            <Link className="link-navbar" to="/" >Home</Link>
            <Link className="link-navbar" to="/recursos" >Recursos</Link>
            <Link className="link-navbar" to="/reservas" >Reservas</Link>
            <Link className="link-navbar" to="/" >Sair</Link>
        </div>
    </Navbar>
  );
}

export default NavBar;