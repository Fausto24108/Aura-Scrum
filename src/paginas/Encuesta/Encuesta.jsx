import { useState } from "react";
import "./Encuesta.css";

const metodologias = [
  { id: "cascada", nombre: "Cascada" },
  { id: "v", nombre: "Modelo en V" },
  { id: "incremental", nombre: "Incremental" },
  { id: "scrum", nombre: "Scrum" },
  { id: "kanban", nombre: "Kanban" },
  { id: "xp", nombre: "XP (Extreme Programming)" },
];

const preguntas = [
  {
    texto: "¿Qué tan definidos están los requisitos de tu proyecto?",
    opciones: [
      { texto: "Fijos y bien definidos desde el inicio", puntos: { cascada: 3, v: 3, incremental: 1 } },
      { texto: "Se conocen en parte y pueden ajustarse", puntos: { incremental: 3, scrum: 2, kanban: 2 } },
      { texto: "Cambian seguido o se descubren sobre la marcha", puntos: { scrum: 3, xp: 3, kanban: 2 } },
    ],
  },
  {
    texto: "¿Qué tamaño tiene el equipo?",
    opciones: [
      { texto: "Muy chico (2 a 5 personas)", puntos: { xp: 3, kanban: 2, scrum: 2 } },
      { texto: "Mediano (6 a 10 personas)", puntos: { scrum: 3, kanban: 2, incremental: 2, v: 1 } },
      { texto: "Grande (más de 10 personas)", puntos: { v: 3, cascada: 2, incremental: 2 } },
    ],
  },
  {
    texto: "¿Cuánto participa el cliente en el proyecto?",
    opciones: [
      { texto: "Solo al inicio y al final", puntos: { cascada: 3, v: 2 } },
      { texto: "En revisiones periódicas", puntos: { scrum: 3, incremental: 3, kanban: 1 } },
      { texto: "De forma constante", puntos: { xp: 3, scrum: 2, kanban: 2 } },
    ],
  },
  {
    texto: "¿Cómo querés entregar el producto?",
    opciones: [
      { texto: "En una sola entrega final", puntos: { cascada: 3, v: 3 } },
      { texto: "Por partes, cada cierto tiempo", puntos: { incremental: 3, scrum: 3 } },
      { texto: "De forma continua", puntos: { kanban: 3, xp: 2, scrum: 1 } },
    ],
  },
  {
    texto: "¿Qué importancia tienen la documentación y las pruebas formales?",
    opciones: [
      { texto: "Muy alta, con pruebas en cada fase", puntos: { v: 3, cascada: 2 } },
      { texto: "Equilibrada", puntos: { scrum: 2, incremental: 2, kanban: 2, v: 1 } },
      { texto: "Baja, prefiero código funcionando y pruebas automáticas", puntos: { xp: 3, kanban: 2, scrum: 1 } },
    ],
  },
];

const PUNTOS_MAXIMOS = preguntas.length * 3;

function calcularResultados(respuestas) {
  const totales = {};
  metodologias.forEach((m) => {
    totales[m.id] = 0;
  });

  respuestas.forEach((indiceOpcion, indicePregunta) => {
    const puntos = preguntas[indicePregunta].opciones[indiceOpcion].puntos;
    for (const id in puntos) {
      totales[id] += puntos[id];
    }
  });

  return metodologias
    .map((m) => ({
      ...m,
      puntaje: totales[m.id],
      porcentaje: Math.round((totales[m.id] / PUNTOS_MAXIMOS) * 100),
    }))
    .sort((a, b) => b.puntaje - a.puntaje);
}

export default function Encuesta() {
  const [paso, setPaso] = useState(0);
  const [respuestas, setRespuestas] = useState(Array(preguntas.length).fill(null));
  const [terminada, setTerminada] = useState(false);

  function elegir(indiceOpcion) {
    const copia = [...respuestas];
    copia[paso] = indiceOpcion;
    setRespuestas(copia);
  }

  function reiniciar() {
    setPaso(0);
    setRespuestas(Array(preguntas.length).fill(null));
    setTerminada(false);
  }

  if (terminada) {
    const resultados = calcularResultados(respuestas);
    const hayEmpate = resultados[0].puntaje === resultados[1].puntaje;

    return (
      <main className="encuesta-page">
        <h1>Tu resultado</h1>
        <p className="encuesta-ganadora">
          {hayEmpate
            ? `Hay un empate entre ${resultados[0].nombre} y ${resultados[1].nombre}.`
            : `La metodología más adecuada para tu proyecto es ${resultados[0].nombre}.`}
        </p>

        <ol className="encuesta-ranking">
          {resultados.map((r) => (
            <li key={r.id}>
              <span>{r.nombre}</span>
              <progress value={r.porcentaje} max="100"></progress>
              <span>{r.porcentaje}% de coincidencia</span>
            </li>
          ))}
        </ol>

        <button onClick={reiniciar}>Volver a hacer la encuesta</button>
      </main>
    );
  }

  const pregunta = preguntas[paso];
  const esUltima = paso === preguntas.length - 1;

  return (
    <main className="encuesta-page">
      <h1>Encuesta de Preferencias</h1>
      <p>Respondé estas preguntas y descubrí qué metodología conviene para tu proyecto.</p>

      <p className="encuesta-progreso-texto">
        Pregunta {paso + 1} de {preguntas.length}
      </p>
      <progress value={paso + 1} max={preguntas.length}></progress>

      <fieldset className="encuesta-pregunta">
        <legend>{pregunta.texto}</legend>
        {pregunta.opciones.map((o, i) => (
          <label key={o.texto} className="encuesta-opcion">
            <input
              type="radio"
              name={`pregunta-${paso}`}
              checked={respuestas[paso] === i}
              onChange={() => elegir(i)}
            />
            {o.texto}
          </label>
        ))}
      </fieldset>

      <div className="encuesta-navegacion">
        <button onClick={() => setPaso(paso - 1)} disabled={paso === 0}>
          ← Anterior
        </button>
        {esUltima ? (
          <button onClick={() => setTerminada(true)} disabled={respuestas[paso] === null}>
            Ver resultado
          </button>
        ) : (
          <button onClick={() => setPaso(paso + 1)} disabled={respuestas[paso] === null}>
            Siguiente →
          </button>
        )}
      </div>
    </main>
  );
}