import { useState } from "react";
import "./Ejercicios.css";

const ejercicios = [
  {
    id: 1,
    titulo: "Ejercicio 1: Roles y artefactos",
    enunciado:
      "Un equipo tiene una lista de funcionalidades ordenadas por prioridad, que el cliente actualiza constantemente. ¿Cómo se llama esa lista y quién es el responsable de mantenerla?",
    solucion:
      "Se llama pila del producto (Product Backlog) y la administra el propietario del producto (Product Owner), que decide qué se incluye y en qué orden se construye según el valor para el cliente.",
  },
  {
    id: 2,
    titulo: "Ejercicio 2: Elegir un modelo",
    enunciado:
      "Un proyecto tiene requisitos fijos y bien documentados, y el cliente solo participa al inicio y al final. ¿Conviene más Cascada o Scrum? Justificá.",
    solucion:
      "Conviene Cascada (gestión predictiva), porque el entorno es estable y no hace falta feedback constante. Scrum aprovecha mejor su capacidad de respuesta al cambio cuando los requisitos son inciertos o cambian.",
  },
  {
    id: 3,
    titulo: "Ejercicio 3: Límite de trabajo en curso",
    enunciado:
      "En un tablero Kanban, la columna 'En curso' tiene un WIP de 3 tareas y ya tiene 3. ¿Qué debe hacer el equipo antes de tomar una tarea nueva?",
    solucion:
      "Terminar alguna de las tareas en curso y moverla a 'Terminado'. El WIP es el máximo de tareas que pueden estar a la vez en una misma fase, y obliga a completar el trabajo antes de empezar más.",
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
  {
    id: 6,
    titulo: "Ejercicio 6: Revisión o retrospectiva",
    enunciado:
      "Al terminar el sprint, el equipo scrum analiza si la forma en que se organizaron les funcionó y acuerda un plan de mejoras para el siguiente sprint. ¿Es la revisión o la retrospectiva?",
    solucion:
      "Es la retrospectiva, porque analiza el «cómo» (la forma de trabajar) y genera un plan de mejoras. La revisión analiza el «qué»: muestra el incremento y recoge sugerencias sobre el producto.",
  },
  {
    id: 7,
    titulo: "Ejercicio 7: Scrum diario",
    enunciado:
      "Durante el scrum diario, un desarrollador empieza a explicar durante 20 minutos un problema técnico complejo. ¿Qué debería pasar?",
    solucion:
      "El scrum diario dura como máximo 15 minutos y sirve para sincronizar el trabajo, no para resolver problemas largos. El problema se registra como impedimento y el scrum master gestiona su resolución después de la reunión.",
  },
  {
    id: 8,
    titulo: "Ejercicio 8: Estimar con puntos",
    enunciado:
      "En la estimación de póquer, un desarrollador estima una tarea en 1 punto y otro en 8. ¿Alguno está equivocado? ¿Cómo se sigue?",
    solucion:
      "Ambos pueden tener razón, porque la dificultad depende de quién realiza la tarea y de su especialidad. Se pregunta a quienes dieron las estimaciones extremas por qué estimaron así y se repite la ronda. También se puede dejar la tarea para estimarla más tarde o pedir que se descomponga en tareas más pequeñas.",
  },
  {
    id: 9,
    titulo: "Ejercicio 9: Leer un burn down",
    enunciado:
      "En el gráfico burn down de un sprint, la línea de trabajo pendiente lleva varios días muy por encima de la diagonal ideal. ¿Qué indica?",
    solucion:
      "Indica que se subestimó el sprint y que requerirá más tiempo. Si la línea estuviera por debajo de la diagonal, se terminaría antes de lo previsto. Por eso sirve para detectar desviaciones de forma temprana.",
  },
  {
    id: 10,
    titulo: "Ejercicio 10: ¿Es un incremento?",
    enunciado:
      "Al final del sprint, el equipo muestra un módulo que funciona, pero todavía no fue probado. ¿Se lo puede considerar un incremento?",
    solucion:
      "No. Un incremento debe estar terminado, probado y operativo, en condiciones de entregarse al cliente. Las partes pendientes de pruebas no se consideran incremento, porque no cumplen la definición de hecho.",
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