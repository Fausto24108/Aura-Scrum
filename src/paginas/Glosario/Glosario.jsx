import { useState } from "react";
import "./Glosario.css";

const terminos = [
  { id: 1, termino: "Agilidad", definicion: "Capacidad de partir de un mínimo viable y desarrollar el producto adaptándose a las circunstancias a medida que cambian." },
  { id: 2, termino: "Burn down (gráfico de avance)", definicion: "Gráfico que muestra el trabajo pendiente (eje Y) en cada día del sprint (eje X). Se actualiza a diario y permite detectar pronto desviaciones que comprometan la entrega." },
  { id: 3, termino: "Calidad de software", definicion: "Grado en que un producto cumple los requisitos y las necesidades de sus usuarios." },
  { id: 4, termino: "Caso de prueba", definicion: "Conjunto de pasos, datos de entrada y resultado esperado para verificar una funcionalidad." },
  { id: 5, termino: "Conocimiento tácito", definicion: "Conocimiento personal y específico del contexto, difícil de formalizar. Scrum basa la calidad del resultado en el de las personas y no solo en los procesos." },
  { id: 6, termino: "Defecto", definicion: "Error en el software que hace que se comporte de forma distinta a lo esperado." },
  { id: 7, termino: "Definición de Hecho (DoD)", definicion: "Acuerdo del equipo sobre los criterios para considerar terminada una tarea, una historia o el incremento. Mientras no se cumplan, no está «hecho»." },
  { id: 8, termino: "Definición de Preparado (DoR)", definicion: "Acuerdo que define cuándo una historia de usuario está lista para descomponerse en tareas, estimarse e incluirse en un sprint." },
  { id: 9, termino: "Desarrolladores", definicion: "Profesionales multifuncionales (se recomiendan entre 3 y 9) que construyen el incremento de cada sprint. Se autogestionan y comparten la responsabilidad del resultado." },
  { id: 10, termino: "Estimación de póquer", definicion: "Juego de planificación con cartas, habitualmente con la serie de Fibonacci, para estimar por consenso el esfuerzo de las tareas." },
  { id: 11, termino: "Gestión predictiva", definicion: "Modelo de gestión centrado en planificar, calcular un presupuesto y fijar plazos. Se considera exitoso si se cumple el plan inicial, y es propio de entornos estables." },
  { id: 12, termino: "Historia de usuario", definicion: "Cada una de las entradas de la pila del producto: un requisito expresado como una funcionalidad entregable, desde el punto de vista del cliente." },
  { id: 13, termino: "Incremento", definicion: "Parte del producto obtenida en un sprint, terminada, probada y operativa, en condiciones de entregarse al cliente." },
  { id: 14, termino: "ISO 25000", definicion: "Familia de normas SQuaRE para evaluar la calidad de un producto de software." },
  { id: 15, termino: "Kanban", definicion: "Técnica para gestionar de forma visual un flujo continuo de trabajo en un tablero, sin sprints ni timeboxing, limitando las tareas en curso mediante el WIP." },
  { id: 16, termino: "Ley de Parkinson", definicion: "Principio según el cual el trabajo se expande hasta llenar el tiempo disponible para que se termine. Las prácticas ágiles buscan un ritmo de trabajo que la evite." },
  { id: 17, termino: "Manifiesto Ágil", definicion: "Documento de 2001 en el que 17 profesionales del software resumieron en cuatro valores y doce principios los fundamentos de los métodos ágiles." },
  { id: 18, termino: "Pila del producto (Product Backlog)", definicion: "Inventario vivo y priorizado de funcionalidades, mejoras, tecnología y corrección de errores que debe incorporar el producto. Está a cargo del propietario del producto." },
  { id: 19, termino: "Pila del sprint (Sprint Backlog)", definicion: "Lista de las tareas necesarias para construir las historias de usuario de un sprint. Es territorio de los desarrolladores, los únicos que pueden modificarla durante el sprint." },
  { id: 20, termino: "Propietario del producto (Product Owner)", definicion: "Persona que toma las decisiones del cliente y es responsable del valor del producto. Administra la pila del producto y decide su prioridad." },
  { id: 21, termino: "Pruebas de regresión", definicion: "Pruebas que se repiten tras un cambio para verificar que no se rompió lo que ya funcionaba." },
  { id: 22, termino: "Punto de historia", definicion: "Unidad relativa de esfuerzo que cada organización define según su contexto. La estima quien va a realizar la tarea, comparándola con otras ya conocidas." },
  { id: 23, termino: "Refinado", definicion: "Priorización, detalle y preestimación de las historias de la pila del producto antes del sprint. No debería consumir más del 10% de la capacidad del equipo." },
  { id: 24, termino: "Retrospectiva del sprint", definicion: "Reunión al final del sprint, tras la revisión, en la que el equipo scrum analiza su forma de trabajar (el «cómo») y crea un plan de mejoras." },
  { id: 25, termino: "Revisión del sprint", definicion: "Reunión al final del sprint en la que se muestra el incremento en funcionamiento (el «qué») y se recogen sugerencias de los interesados." },
  { id: 26, termino: "Scrum", definicion: "Modelo de desarrollo ágil basado en equipos autogestionados, desarrollo incremental, solapamiento de fases y conocimiento tácito de las personas. Su nombre viene de la formación del rugby." },
  { id: 27, termino: "Scrum diario (Daily Scrum)", definicion: "Reunión diaria de no más de 15 minutos, de pie junto al tablero, en la que los desarrolladores sincronizan el trabajo y detectan impedimentos." },
  { id: 28, termino: "Scrum Master", definicion: "Responsable de que se cumplan las reglas de scrum. Asesora al equipo y al propietario del producto, modera el scrum diario y resuelve los impedimentos." },
  { id: 29, termino: "Sprint", definicion: "Período de duración fija, de 1 a 6 semanas (se recomienda no superar un mes), en el que se construye un incremento del producto." },
  { id: 30, termino: "Testing", definicion: "Proceso de ejecutar el software para encontrar defectos y evaluar su calidad." },
  { id: 31, termino: "Tiempo ideal", definicion: "Tiempo que costaría realizar una tarea en condiciones ideales, sin distracciones ni impedimentos. Casi siempre es menor que el tiempo real." },
  { id: 32, termino: "Timeboxing", definicion: "Técnica de trabajar con períodos de duración fija y constante, como los sprints, para mantener el ritmo de avance." },
  { id: 33, termino: "Validación", definicion: "Comprobar que el producto construido satisface las necesidades reales del usuario." },
  { id: 34, termino: "Velocidad", definicion: "Cantidad de trabajo, medida en puntos, que un equipo completa en un sprint." },
  { id: 35, termino: "Verificación", definicion: "Comprobar que el producto se construye correctamente según sus especificaciones." },
  { id: 36, termino: "WIP (Work in Process)", definicion: "Número máximo de tareas que pueden estar a la vez en la misma fase de un tablero Kanban. Con WIP=3 en «En curso» no se trabaja en más de 3 tareas simultáneas." },
];

const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function normalizar(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function inicial(termino) {
  return normalizar(termino).charAt(0).toUpperCase();
}

export default function Glosario() {
  const [busqueda, setBusqueda] = useState("");
  const [letra, setLetra] = useState("");

  const letrasConTerminos = new Set(terminos.map((t) => inicial(t.termino)));

  const visibles = terminos
    .filter((t) => {
      const coincideBusqueda = normalizar(t.termino + " " + t.definicion).includes(
        normalizar(busqueda)
      );
      const coincideLetra = letra === "" || inicial(t.termino) === letra;
      return coincideBusqueda && coincideLetra;
    })
    .sort((a, b) => a.termino.localeCompare(b.termino, "es"));

  function elegirLetra(l) {
    if (letra === l) {
      setLetra("");
    } else {
      setLetra(l);
    }
  }

  return (
    <main className="glosario-page">
      <h1>Glosario de Términos</h1>

      <label htmlFor="buscador">Buscar un término</label>
      <input
        id="buscador"
        type="text"
        placeholder="Escribí para filtrar..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <nav className="glosario-indice" aria-label="Índice de letras">
        {letras.map((l) => (
          <button
            key={l}
            className={letra === l ? "letra activa" : "letra"}
            onClick={() => elegirLetra(l)}
            disabled={!letrasConTerminos.has(l)}
          >
            {l}
          </button>
        ))}
      </nav>

      <p className="glosario-contador">
        {visibles.length} {visibles.length === 1 ? "término" : "términos"}
      </p>

      <dl className="glosario-lista">
        {visibles.map((t) => (
          <div key={t.id} className="glosario-item">
            <dt>{t.termino}</dt>
            <dd>{t.definicion}</dd>
          </div>
        ))}
      </dl>

      {visibles.length === 0 && (
        <p className="glosario-vacio">No se encontraron términos con ese filtro.</p>
      )}
    </main>
  );
}