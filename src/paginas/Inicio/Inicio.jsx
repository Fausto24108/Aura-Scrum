import { Link } from "react-router-dom";
import "./Inicio.css";

export default function Inicio() {
  return (
    <div className="inicio">
      <section className="hero">
        <h1>Bienvenido a Aura SCRUM</h1>
        <p>
          Un espacio para entender la calidad de software de forma simple:
          conceptos clave, estándares internacionales como ISO 9126/25000, y las
          técnicas que usan los equipos para asegurar que un producto funcione
          bien antes de llegar al usuario.
        </p>
      </section>

      <section className="tarjetas">
        <Link to="/fundamentos" className="tarjeta">
          <h2>Fundamentos de Calidad</h2>
          <p>Conceptos clave, métricas y estándares ISO 9126/25000.</p>
        </Link>

        <Link to="/tecnicas" className="tarjeta">
          <h2>Técnicas de Aseguramiento</h2>
          <p>Tipos, niveles y técnicas de pruebas de software.</p>
        </Link>
      </section>
    </div>
  );
}