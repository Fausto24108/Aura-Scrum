import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  // Estado para controlar qué submenú de la hamburguesa está abierto
  const [submenuAbierto, setSubmenuAbierto] = useState(null);

  const cerrarTodo = () => {
    setMenuAbierto(false);
    setSubmenuAbierto(null);
  };

  const toggleSubmenu = (categoria) => {
    setSubmenuAbierto(submenuAbierto === categoria ? null : categoria);
  };

  return (
    <header className="navbar-header">
      {/* Brand: Logo Espiral + Título */}
      <Link to="/" className="navbar-brand" onClick={cerrarTodo}>
        <img
          src="/src/assets/logo.png"
          alt="A.U.R.A. SCRUM Logo"
          className="navbar-logo-img"
        />
        <div className="navbar-title-container">
          <h1 className="navbar-title">A.U.R.A. SCRUM</h1>
          <span className="navbar-subtitle">Asegurando Una Respuesta Ágil</span>
        </div>
      </Link>

      {/* Botón Menú Hamburguesa */}
      <button
        className={`hamburger-btn ${menuAbierto ? "open" : ""}`}
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-label="Abrir menú de navegación"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Menú Desplegable Completo */}
      <nav className={`nav-menu ${menuAbierto ? "show" : ""}`}>
        <ul className="nav-list">
          {/* Inicio */}
          <li>
            <Link to="/" onClick={cerrarTodo} className="nav-link-direct">
              Inicio
            </Link>
          </li>

          {/* Categoría: Gestión de la Calidad */}
          <li className="nav-item-dropdown">
            <button 
              className="dropdown-btn" 
              onClick={() => toggleSubmenu("calidad")}
            >
              Gestión de Calidad {submenuAbierto === "calidad" ? "▲" : "▼"}
            </button>
            <ul className={`submenu ${submenuAbierto === "calidad" ? "active" : ""}`}>
              <li><Link to="/fundamentos" onClick={cerrarTodo}>Fundamentos</Link></li>
              <li><Link to="/tecnicas" onClick={cerrarTodo}>Técnicas de Aseguramiento</Link></li>
              <li><Link to="/herramientas" onClick={cerrarTodo}>Herramientas de Calidad</Link></li>
            </ul>
          </li>

          {/* Categoría: Procesos de Desarrollo */}
          <li className="nav-item-dropdown">
            <button 
              className="dropdown-btn" 
              onClick={() => toggleSubmenu("procesos")}
            >
              Procesos de Desarrollo {submenuAbierto === "procesos" ? "▲" : "▼"}
            </button>
            <ul className={`submenu ${submenuAbierto === "procesos" ? "active" : ""}`}>
              <li><Link to="/sdlc" onClick={cerrarTodo}>Ciclo de Vida (SDLC)</Link></li>
              <li><Link to="/modelos-tradicionales" onClick={cerrarTodo}>Modelos Tradicionales</Link></li>
              <li><Link to="/metodologias-agiles" onClick={cerrarTodo}>Metodologías Ágiles</Link></li>
              <li><Link to="/scrum" onClick={cerrarTodo}>Scrum en Profundidad</Link></li>
              <li><Link to="/kanban" onClick={cerrarTodo}>Kanban</Link></li>
            </ul>
          </li>

          {/* Categoría: Funcionalidades Interactivas */}
          <li className="nav-item-dropdown">
            <button 
              className="dropdown-btn highlight" 
              onClick={() => toggleSubmenu("interactivo")}
            >
              Herramientas JS {submenuAbierto === "interactivo" ? "▲" : "▼"}
            </button>
            <ul className={`submenu ${submenuAbierto === "interactivo" ? "active" : ""}`}>
              <li><Link to="/comparador" onClick={cerrarTodo}>Comparador de Metodologías</Link></li>
              <li><Link to="/encuesta" onClick={cerrarTodo}>Encuesta de Preferencias</Link></li>
            </ul>
          </li>

          {/* Categoría: Recursos y Aprendizaje */}
          <li className="nav-item-dropdown">
            <button 
              className="dropdown-btn" 
              onClick={() => toggleSubmenu("recursos")}
            >
              Recursos y Aprendizaje {submenuAbierto === "recursos" ? "▲" : "▼"}
            </button>
            <ul className={`submenu ${submenuAbierto === "recursos" ? "active" : ""}`}>
              <li><Link to="/glosario" onClick={cerrarTodo}>Glosario</Link></li>
              <li><Link to="/faq" onClick={cerrarTodo}>Preguntas Frecuentes</Link></li>
              <li><Link to="/enlaces" onClick={cerrarTodo}>Enlaces de Interés</Link></li>
              <li><Link to="/ejercicios" onClick={cerrarTodo}>Ejercicios y Casos Prácticos</Link></li>
            </ul>
          </li>

          {/* Nosotros & Contacto */}
          <li>
            <Link to="/sobre-nosotros" onClick={cerrarTodo} className="nav-link-direct">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link to="/contacto" onClick={cerrarTodo} className="nav-link-direct">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}