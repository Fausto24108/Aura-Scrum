import { useState } from "react";
import "./SobreNosotros.css";

const miembros = [
  {
    id: 1,
    nombre: "Ceferino Fares",
    rol: "Scrum Master",
    detalle: "Facilita el trabajo del equipo, organiza las ceremonias y elimina impedimentos.",
  },
  {
    id: 2,
    nombre: "Fausto Poggi",
    rol: "Programador",
    detalle: "Analiza las historias de usuario y desarrolla la lógica del sitio.",
  },
  {
    id: 3,
    nombre: "Robert Weisser",
    rol: "Diseñador",
    detalle: "Se encarga del diseño visual y de los estilos de todas las páginas.",
  },
  {
    id: 4,
    nombre: "Ezequiel Malpu",
    rol: "Marketing / Generalista",
    detalle: "Apoya al equipo en distintas tareas y en la difusión del proyecto.",
  },
  {
    id: 5,
    nombre: "Marco Abello",
    rol: "Testing",
    detalle: "Prueba cada historia de usuario y documenta los errores encontrados.",
  },
];

export default function SobreNosotros() {
  const [activo, setActivo] = useState(null);

  return (
    <main className="nosotros-page">
      <h1>Sobre Nosotros</h1>
      <p>
        Somos el equipo Aura SCRUM, y desarrollamos este sitio educativo para la materia
        Sistemas de Gestión de la Calidad del Software. Pasá el mouse por cada tarjeta para
        conocer el rol de cada integrante.
      </p>

      <section className="nosotros-grid">
        {miembros.map((m) => (
          <article
            key={m.id}
            className={activo === m.id ? "miembro-card activo" : "miembro-card"}
            tabIndex={0}
            onMouseEnter={() => setActivo(m.id)}
            onMouseLeave={() => setActivo(null)}
            onFocus={() => setActivo(m.id)}
            onBlur={() => setActivo(null)}
          >
            <h2>{m.nombre}</h2>
            <p className="miembro-rol">{m.rol}</p>
            {activo === m.id && <p className="miembro-detalle">{m.detalle}</p>}
          </article>
        ))}
      </section>
    </main>
  );
}