import { useState } from "react";
import "./FAQ.css";

const preguntas = [
  {
    id: 1,
    pregunta: "¿Qué es la calidad del software?",
    respuesta:
      "Es el grado en que un producto de software cumple con los requisitos y las necesidades de sus usuarios: que funcione bien, sea confiable, seguro y fácil de usar.",
  },
  {
    id: 2,
    pregunta: "¿Cuál es la diferencia entre verificación y validación?",
    respuesta:
      "La verificación comprueba que el producto se construye correctamente según lo especificado. La validación comprueba que se construyó el producto correcto, es decir, el que el usuario realmente necesita.",
  },
  {
    id: 3,
    pregunta: "¿Qué es ISO 25000?",
    respuesta:
      "Es una familia de normas (SQuaRE) que define un modelo para evaluar la calidad de un producto de software. Reemplaza a la ISO 9126 y organiza la calidad en características como funcionalidad, fiabilidad, usabilidad y seguridad.",
  },
  {
    id: 4,
    pregunta: "¿Cuándo conviene usar una metodología ágil?",
    respuesta:
      "Cuando los requisitos pueden cambiar, se necesita feedback frecuente del cliente y se prefiere entregar el producto por partes en lugar de una sola entrega final.",
  },
  {
    id: 5,
    pregunta: "¿Qué diferencia hay entre Scrum y Kanban?",
    respuesta:
      "Scrum trabaja con sprints de duración fija, roles definidos y ceremonias. Kanban es un flujo continuo sobre un tablero, sin iteraciones fijas, que limita la cantidad de tareas en progreso.",
  },
  {
    id: 6,
    pregunta: "¿Qué es una historia de usuario?",
    respuesta:
      "Es una descripción breve de una funcionalidad desde el punto de vista del usuario, con el formato: 'Como [rol], quiero [acción] para [beneficio]'.",
  },
  {
    id: 7,
    pregunta: "¿Qué significa que una historia esté 'Done'?",
    respuesta:
      "Que cumple la Definición de Hecho acordada por el equipo: está desarrollada, probada y lista para entregarse. Si le falta algo, no cuenta como terminada.",
  },
];

export default function FAQ() {
  const [abierta, setAbierta] = useState(null);

  function alternar(id) {
    if (abierta === id) {
      setAbierta(null);
    } else {
      setAbierta(id);
    }
  }

  return (
    <main className="faq-page">
      <h1>Preguntas Frecuentes</h1>
      <p>Hacé clic en una pregunta para ver la respuesta.</p>

      <section className="faq-lista">
        {preguntas.map((p) => (
          <div key={p.id} className={abierta === p.id ? "faq-item abierto" : "faq-item"}>
            <button
              className="faq-pregunta"
              onClick={() => alternar(p.id)}
              aria-expanded={abierta === p.id}
            >
              {p.pregunta}
            </button>
            {abierta === p.id && <p className="faq-respuesta">{p.respuesta}</p>}
          </div>
        ))}
      </section>
    </main>
  );
}