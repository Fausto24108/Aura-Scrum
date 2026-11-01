import { useState } from "react";
import "./Scrum.css";

const etapas = [
  {
    id: "pila",
    titulo: "Pila del Producto",
    responsable: "Propietario del producto (Product Owner)",
    duracion: "Continua: se amplía y se modifica durante todo el desarrollo",
    resumen:
      "Inventario ordenado de todo lo que esperan el cliente, los usuarios y demás interesados del producto.",
    detalles: [
      "Registra y prioriza los requisitos desde el punto de vista del cliente. Sus entradas se llaman historias de usuario.",
      "El propietario del producto decide qué entra, qué sale y en qué orden se construye.",
      "Es información viva: empieza con pocas historias, las mejor entendidas, y evoluciona junto con el producto.",
      "El refinado (priorizar, detallar y preestimar) lo hacen el propietario y los desarrolladores, y no debería consumir más del 10% de la capacidad del equipo.",
    ],
  },
  {
    id: "planificacion",
    titulo: "Planificación del Sprint",
    responsable: "Propietario del producto y desarrolladores, moderada por el scrum master",
    duracion: "Hasta una jornada de trabajo completa, según el volumen y la complejidad de las historias",
    resumen: "Marca el inicio de cada sprint: se decide qué se entregará y cómo se conseguirá.",
    detalles: [
      "Responde tres preguntas: ¿por qué es valioso este sprint?, ¿qué se puede hacer en él? y ¿cómo se realizará el trabajo?",
      "Primera mitad: el propietario del producto expone las historias prioritarias y se define el objetivo del sprint, una frase que resume el valor que se entregará al cliente.",
      "Segunda mitad: los desarrolladores dividen las historias en tareas de un día de trabajo o menos, las estiman y arman la pila del sprint.",
      "Al terminar quedan definidos el objetivo, la pila del sprint, la duración, la fecha de la revisión y la definición de hecho.",
    ],
  },
  {
    id: "sprint",
    titulo: "Sprint",
    responsable: "Desarrolladores",
    duracion: "De 1 a 6 semanas, siempre de duración fija (timeboxing). Se recomienda no superar las 4 semanas",
    resumen: "Período de duración fija en el que se construye un incremento del producto.",
    detalles: [
      "Es el evento central de scrum: marca el ritmo de avance y contiene al resto de los eventos.",
      "Se trabaja sobre la pila del sprint, que es territorio de los desarrolladores: solo ellos pueden modificarla durante el sprint.",
      "Al terminar se obtiene un incremento: una parte del producto terminada, probada y operativa, lista para entregarse al cliente.",
    ],
  },
  {
    id: "daily",
    titulo: "Scrum Diario",
    responsable: "Desarrolladores",
    duracion: "No más de 15 minutos por día",
    resumen:
      "Breve reunión diaria, de pie junto al tablero, para sincronizar el trabajo y planificar las próximas 24 horas.",
    detalles: [
      "Cada desarrollador cuenta qué logró desde el último scrum diario, qué hará hasta el siguiente y qué impedimentos tiene o prevé.",
      "Se actualiza el esfuerzo pendiente en la pila del sprint y, con esos datos, el gráfico burn down.",
      "No es una reunión de inspección o control sino de comunicación. Los impedimentos los gestiona el scrum master después de la reunión.",
    ],
  },
  {
    id: "revision",
    titulo: "Revisión del Sprint",
    responsable: "Todo el equipo scrum y los interesados que quieran asistir",
    duracion: "De 1 a 2 horas (hasta 4 si el incremento es complejo)",
    resumen: "Se muestra el incremento en funcionamiento y se recogen sugerencias.",
    detalles: [
      "Los desarrolladores exponen el objetivo del sprint, qué historias se planificaron, cuáles se terminaron y qué impedimentos hubo.",
      "Se demuestra el funcionamiento de lo construido y se abre un turno de preguntas y sugerencias.",
      "Se centra en el «qué» (el producto). Con el feedback, el propietario del producto puede adaptar la pila del producto.",
    ],
  },
  {
    id: "retrospectiva",
    titulo: "Retrospectiva del Sprint",
    responsable: "Todo el equipo scrum, incluido el propietario del producto",
    duracion: "De 1 a 3 horas",
    resumen: "El equipo reflexiona sobre su forma de trabajar y crea un plan de mejoras.",
    detalles: [
      "Se identifican fortalezas y puntos débiles, para afianzar las primeras y planificar acciones de mejora sobre los segundos.",
      "Se centra en el «cómo» (la forma de trabajo) y no en el producto, por eso conviene tratarla por separado de la revisión.",
      "Se realiza tras la revisión y antes de la planificación del siguiente sprint. El plan de mejoras se aplica en la siguiente iteración.",
    ],
  },
];

const roles = [
  {
    id: "po",
    nombre: "Propietario del Producto (Product Owner)",
    texto:
      "Toma las decisiones del cliente y es responsable del valor del producto. Es una única persona que administra la pila del producto: decide qué se construye y en qué orden.",
  },
  {
    id: "sm",
    nombre: "Scrum Master",
    texto:
      "Es el responsable de que se cumplan las reglas de scrum y de que la organización las entienda. Asesora y forma al propietario del producto y a los desarrolladores, modera el scrum diario y resuelve los impedimentos para que el sprint siga avanzando.",
  },
  {
    id: "dev",
    nombre: "Desarrolladores",
    texto:
      "Son entre 3 y 9 profesionales multifuncionales que construyen el incremento de cada sprint. Se autogestionan y comparten la responsabilidad del resultado: forman un equipo y no un simple grupo de trabajo.",
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
      <p>
        Scrum es un modelo de desarrollo ágil basado en equipos autónomos y autogestionados, en
        el desarrollo incremental y en el solapamiento de las fases de trabajo. Confía la calidad
        del resultado en el conocimiento y la creatividad de las personas, y no solo en los
        procesos. Su nombre viene de la formación del rugby y lo describieron Nonaka y Takeuchi
        en los años 80.
      </p>
      <p>
        Cada sprint termina con un incremento del producto. Hacé clic en cada etapa del ciclo
        para ver su detalle.
      </p>

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
        <p>
          El equipo scrum está formado por tres roles. Además, se distingue entre los
          comprometidos, que intervienen directamente en la construcción del producto, y los
          implicados, otras partes interesadas como la dirección o los usuarios.
        </p>
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