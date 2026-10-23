import { useState } from "react";
import "./Scrum.css";

const etapas = [
  {
    id: "pila",
    titulo: "Pila de Producto",
    responsable: "Product Owner",
    duracion: "Continua (se actualiza durante todo el proyecto)",
    resumen: "Lista ordenada de todo lo que el producto necesita.",
    detalles: [
      "Contiene las historias de usuario priorizadas por valor.",
      "El Product Owner es el responsable de ordenarla y mantenerla.",
      "Nunca está terminada: evoluciona junto con el producto.",
    ],
  },
  {
    id: "planificacion",
    titulo: "Planificación del Sprint",
    responsable: "Todo el equipo Scrum",
    duracion: "Hasta 8 horas para un sprint de un mes",
    resumen: "El equipo elige qué historias entran en el sprint.",
    detalles: [
      "Se define el objetivo del sprint.",
      "Se seleccionan historias de la Pila de Producto y se arma la Pila del Sprint.",
      "El equipo estima cuánto puede comprometerse a terminar.",
    ],
  },
  {
    id: "daily",
    titulo: "Daily Scrum",
    responsable: "Equipo de Desarrollo",
    duracion: "15 minutos por día",
    resumen: "Reunión diaria breve para sincronizar el trabajo.",
    detalles: [
      "Cada integrante cuenta qué hizo, qué hará y qué impedimentos tiene.",
      "Se hace todos los días a la misma hora y en el mismo lugar.",
      "Sirve para ajustar el plan del día, no para resolver problemas largos.",
    ],
  },
  {
    id: "sprint",
    titulo: "Sprint",
    responsable: "Equipo de Desarrollo",
    duracion: "1 mes o menos (duración fija)",
    resumen: "Se desarrolla el trabajo y se genera el Incremento.",
    detalles: [
      "Se trabaja sobre la Pila del Sprint sin cambiar el objetivo.",
      "Durante el sprint se hacen las Daily Scrum.",
      "Al final se obtiene un Incremento: una versión utilizable del producto.",
    ],
  },
  {
    id: "revision",
    titulo: "Revisión del Sprint",
    responsable: "Equipo + Product Owner + interesados",
    duracion: "Hasta 4 horas para un sprint de un mes",
    resumen: "Se muestra el Incremento y se recibe feedback.",
    detalles: [
      "Se presenta lo que quedó 100% terminado (Done).",
      "El Product Owner y los interesados dan su opinión.",
      "El feedback puede modificar la Pila de Producto.",
    ],
  },
  {
    id: "retrospectiva",
    titulo: "Retrospectiva del Sprint",
    responsable: "Equipo Scrum",
    duracion: "Hasta 3 horas para un sprint de un mes",
    resumen: "El equipo analiza cómo trabajó y cómo mejorar.",
    detalles: [
      "Se conversa sobre qué salió bien y qué se puede mejorar.",
      "Se definen acciones concretas para el próximo sprint.",
      "Cierra el sprint y da paso al siguiente.",
    ],
  },
];

const roles = [
  {
    id: "po",
    nombre: "Product Owner",
    texto: "Maximiza el valor del producto y es dueño de la Pila de Producto.",
  },
  {
    id: "sm",
    nombre: "Scrum Master",
    texto: "Ayuda al equipo a aplicar Scrum y elimina los impedimentos.",
  },
  {
    id: "dev",
    nombre: "Equipo de Desarrollo",
    texto: "Construye el Incremento en cada sprint de forma autoorganizada.",
  },
];

export default function Scrum() {
  const [indice, setIndice] = useState(0);
  const [rolAbierto, setRolAbierto] = useState(null);

  const etapa = etapas[indice];

  function alternarRol(id) {
    if (rolAbierto === id) {
      setRolAbierto(null);
    } else {
      setRolAbierto(id);
    }
  }

  return (
    <main className="scrum-page">
      <h1>Scrum en Profundidad</h1>
      <p>Hacé clic en cada etapa del ciclo para ver su detalle.</p>

      <section className="scrum-timeline" aria-label="Cronograma del ciclo Scrum">
        {etapas.map((e, i) => (
          <button
            key={e.id}
            className={i === indice ? "scrum-etapa activa" : "scrum-etapa"}
            onClick={() => setIndice(i)}
            aria-pressed={i === indice}
          >
            {i + 1}. {e.titulo}
          </button>
        ))}
      </section>

      <section className="scrum-detalle" aria-live="polite">
        <h2>{etapa.titulo}</h2>
        <p><strong>Responsable:</strong> {etapa.responsable}</p>
        <p><strong>Duración:</strong> {etapa.duracion}</p>
        <p>{etapa.resumen}</p>
        <ul>
          {etapa.detalles.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>

        <div className="scrum-navegacion">
          <button onClick={() => setIndice(indice - 1)} disabled={indice === 0}>
            ← Anterior
          </button>
          <button
            onClick={() => setIndice(indice + 1)}
            disabled={indice === etapas.length - 1}
          >
            Siguiente →
          </button>
        </div>
      </section>

      <section className="scrum-roles">
        <h2>Roles de Scrum</h2>
        {roles.map((r) => (
          <div key={r.id} className="scrum-rol">
            <button onClick={() => alternarRol(r.id)} aria-expanded={rolAbierto === r.id}>
              {r.nombre}
            </button>
            {rolAbierto === r.id && <p>{r.texto}</p>}
          </div>
        ))}
      </section>
    </main>
  );
}