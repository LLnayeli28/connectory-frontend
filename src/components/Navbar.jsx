import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h3 className="logo">Connectory Inventario</h3>

      <div className="links">
        <Link to="/">Inicio</Link>


      </div>
    </nav>
  );
}
