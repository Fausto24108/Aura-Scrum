import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Aura SCRUM</div>

      <button className="navbar-hamburguesa" onClick={() => setMenuAbierto(!menuAbierto)}>
        ☰
      </button>

      <ul className={`navbar-links ${menuAbierto ? "abierto" : ""}`}>
        <li>
          <NavLink to="/" onClick={cerrarMenu}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/fundamentos" onClick={cerrarMenu}>
            Fundamentos
          </NavLink>
        </li>
        <li>
          <NavLink to="/tecnicas" onClick={cerrarMenu}>
            Técnicas de Aseguramiento
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}