import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Logo de fondo */}
      <img src={logo} alt="Connectory Logo" className="home-logo" />

      {/* Panel de botones */}
      <div className="home-grid">
        <Link to="/vehiculos" className="home-card">Vehículos</Link>
        <Link to="/tecnicos" className="home-card">Técnicos</Link>
        <Link to="/cuadrillas" className="home-card">Cuadrillas</Link>
        <Link to="/bodega-general" className="home-card">Bodega General</Link>
        <Link to="/mini-bodega" className="home-card">Mini Bodega</Link>
      </div>
    </div>
  );
}
