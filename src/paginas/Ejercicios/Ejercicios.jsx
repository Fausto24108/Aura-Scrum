import { useState } from "react";
import "./Ejercicios.css";

const ejercicios = [
  {
    id: 1,
    titulo: "Ejercicio 1: Roles y artefactos",
    enunciado:
      "Un equipo tiene una lista de funcionalidades ordenadas por prioridad, que el cliente actualiza constantemente. ¿Cómo se llama esa lista y quién es el responsable de mantenerla?",
    solucion:
      "Se llama Pila de Producto (Product Backlog) y la mantiene el Product Owner, que decide el orden según el valor para el negocio.",
  },
  {
    id: 2,
    titulo: "Ejercicio 2: Elegir un modelo",
    enunciado:
      "Un proyecto tiene requisitos fijos y bien documentados, y el cliente solo participa al inicio y al final. ¿Conviene más Cascada o Scrum? Justificá.",
    solucion:
      "Conviene Cascada, porque los requisitos no cambian y no hace falta feedback constante. Scrum aprovecha mejor su flexibilidad cuando los requisitos son inciertos o cambian.",
  },
  {
    id: 3,
    titulo: "Ejercicio 3: Límite de trabajo en curso",
    enunciado:
      "En un tablero Kanban, la columna 'En progreso' tiene un límite de 3 tareas y ya tiene 3. ¿Qué debe hacer el equipo antes de tomar una tarea nueva?",
    solucion:
      "Terminar o desbloquear alguna de las tareas en progreso y moverla a 'Hecho'. El límite obliga a completar el trabajo antes de empezar más.",
  },
  {
    id: 4,
    titulo: "Ejercicio 4: Verificación y validación",
    enunciado:
      "Se revisa que una pantalla cumpla con el documento de diseño. Después se la muestra al usuario para ver si le resuelve su problema. ¿Qué actividad es cada una?",
    solucion:
      "Revisar que cumpla el documento de diseño es verificación (¿lo construimos bien?). Mostrarla al usuario es validación (¿construimos lo correcto?).",
  },
  {
    id: 5,
    titulo: "Ejercicio 5: Características de calidad",
    enunciado:
      "Un sistema responde muy rápido pero se cae seguido. ¿Qué características de calidad están bien y cuáles mal?",
    solucion:
      "La rapidez corresponde a la eficiencia de desempeño, que está bien. Que se caiga seguido afecta la fiabilidad, que está mal.",
  },
];

export default function Ejercicios() {
  const [abiertos, setAbiertos] = useState([]);

  function alternarSolucion(id) {
    if (abiertos.includes(id)) {
      setAbiertos(abiertos.filter((a) => a !== id));
    } else {
      setAbiertos([...abiertos, id]);
    }
  }

  return (
    <main className="ejercicios-page">
      <h1>Ejercicios y Casos Prácticos</h1>
      <p>Intentá resolver cada ejercicio antes de mirar la solución.</p>

      {ejercicios.map((e) => (
        <section key={e.id} className="ejercicio">
          <h2>{e.titulo}</h2>
          <p>{e.enunciado}</p>
          <button onClick={() => alternarSolucion(e.id)} aria-expanded={abiertos.includes(e.id)}>
            {abiertos.includes(e.id) ? "Ocultar solución" : "Mostrar solución"}
          </button>
          {abiertos.includes(e.id) && <p className="ejercicio-solucion">{e.solucion}</p>}
        </section>
      ))}
    </main>
  );
}