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
      "Cuando se trabaja en entornos inciertos y cambiantes, con requisitos inestables, clientes que necesitan empezar a usar el producto cuanto antes y donde la innovación es un valor clave. La agilidad parte de un mínimo viable y se adapta a las circunstancias conforme cambian. La gestión predictiva, en cambio, funciona mejor en entornos estables.",
  },
  {
    id: 5,
    pregunta: "¿Qué diferencia hay entre Scrum y Kanban?",
    respuesta:
      "Scrum divide el trabajo en sprints de duración fija (timeboxing), cada uno con un incremento, y define roles, artefactos y eventos. Kanban gestiona de forma visual un flujo continuo, sin sprints ni timeboxing, con un tablero y un límite de trabajo en curso (WIP).",
  },
  {
    id: 6,
    pregunta: "¿Qué es una historia de usuario?",
    respuesta:
      "Es cada una de las entradas de la pila del producto: un requisito expresado como una funcionalidad entregable, desde el punto de vista del cliente (por ejemplo: «Consultar los pedidos realizados por un vendedor en un rango de fechas»). Durante la planificación del sprint se descompone en tareas de, como máximo, un día de trabajo.",
  },
  {
    id: 7,
    pregunta: "¿Qué significa que una historia esté 'Done'?",
    respuesta:
      "Que cumple la definición de hecho acordada por el equipo: está terminada, probada y operativa. Si falta algo, por ejemplo la documentación o las validaciones que el producto requiere, no cuenta como terminada ni forma parte del incremento.",
  },
  {
    id: 8,
    pregunta: "¿Qué es un sprint y cuánto dura?",
    respuesta:
      "Es un período de tiempo acotado en el que se construye un incremento del producto. Dura entre 1 y 6 semanas, y se recomienda que no supere el mes. Su duración es fija (timeboxing), lo que permite mantener el ritmo de avance.",
  },
  {
    id: 9,
    pregunta: "¿Quiénes forman el equipo scrum?",
    respuesta:
      "Tres roles: el propietario del producto (una única persona que toma las decisiones del cliente), el scrum master (responsable de que se cumplan las reglas de scrum) y los desarrolladores (entre 3 y 9 profesionales que construyen el incremento y se autogestionan).",
  },
  {
    id: 10,
    pregunta: "¿Cuál es la diferencia entre la revisión y la retrospectiva del sprint?",
    respuesta:
      "La revisión analiza el «qué»: se muestra el incremento y se recogen sugerencias para mejorar el producto. La retrospectiva analiza el «cómo»: el equipo reflexiona sobre su forma de trabajar y define un plan de mejoras. Sus objetivos son distintos, por eso conviene tratarlas por separado.",
  },
  {
    id: 11,
    pregunta: "¿Por qué scrum mide el trabajo pendiente y no el realizado?",
    respuesta:
      "Porque los imprevistos hacen que el tiempo estimado al principio no sea exacto: que hayan pasado tres días de una semana no significa que queden cuatro. Lo que interesa saber es cuánto queda. Además se estima con unidades relativas, como los puntos de historia, y estima quien va a realizar la tarea.",
  },
  {
    id: 12,
    pregunta: "¿Qué valora el Manifiesto Ágil?",
    respuesta:
      "A los individuos y su interacción por encima de los procesos y las herramientas; el software que funciona por encima de la documentación exhaustiva; la colaboración con el cliente por encima de la negociación contractual; y la respuesta al cambio por encima del seguimiento de un plan. Aunque hay valor en lo segundo, se valora más lo primero.",
  },
  {
    id: 13,
    pregunta: "¿Alcanza con seguir todas las reglas de scrum para ser ágil?",
    respuesta:
      "No necesariamente. Al empezar conviene adoptar el marco estándar, pero si el foco está en el proceso y no en el conocimiento tácito de las personas, se hace ingeniería concurrente y no agilidad. Con el tiempo se pueden adaptar las prácticas apoyándose en los principios y valores de scrum.",
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