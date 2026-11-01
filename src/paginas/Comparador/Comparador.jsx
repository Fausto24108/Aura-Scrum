import { useState } from "react";
import "./Comparador.css";

const metodologias = [
  {
    id: "cascada",
    nombre: "Cascada",
    tipo: "Tradicional (gestión predictiva, secuencial)",
    flexibilidad: "Baja: se planifica todo al inicio y se controla el cumplimiento del plan",
    entregas: "Una sola entrega al final del proyecto",
    cliente: "Al inicio (requisitos) y al final",
    documentacion: "Muy alta: requisitos y planes detallados",
    ideal: "Entornos estables con requisitos fijos y bien definidos",
  },
  {
    id: "v",
    nombre: "Modelo en V",
    tipo: "Tradicional (gestión predictiva, secuencial)",
    flexibilidad: "Baja: cada fase tiene su prueba asociada",
    entregas: "Una sola entrega al final del proyecto",
    cliente: "Al inicio y al final",
    documentacion: "Muy alta",
    ideal: "Sistemas críticos que requieren pruebas rigurosas",
  },
  {
    id: "incremental",
    nombre: "Incremental",
    tipo: "Tradicional (desarrollo incremental)",
    flexibilidad: "Media: se ajusta entre incrementos",
    entregas: "Por partes, cada incremento",
    cliente: "En cada entrega",
    documentacion: "Alta",
    ideal: "Proyectos donde conviene entregar valor temprano",
  },
  {
    id: "scrum",
    nombre: "Scrum",
    tipo: "Ágil (iterativo e incremental)",
    flexibilidad: "Alta: la pila del producto es un documento vivo que se reordena y cambia entre sprints",
    entregas: "Un incremento por sprint (de 1 a 6 semanas, se recomienda no pasar de 4)",
    cliente: "El propietario del producto integra el equipo y participa en la planificación y en la revisión del sprint",
    documentacion: "Mínima indispensable: se evita la que no aporta valor al producto",
    ideal: "Equipos autogestionados de 3 a 9 desarrolladores con requisitos cambiantes",
  },
  {
    id: "kanban",
    nombre: "Kanban",
    tipo: "Ágil (flujo continuo)",
    flexibilidad: "Muy alta: se puede cambiar en cualquier momento",
    entregas: "Flujo continuo, sin sprints ni timeboxing",
    cliente: "Según se necesite",
    documentacion: "Baja: el tablero comunica el estado del trabajo",
    ideal: "Mantenimiento y trabajo con flujo constante de tareas, limitando el trabajo en curso (WIP)",
  },
  {
    id: "xp",
    nombre: "XP (Extreme Programming)",
    tipo: "Ágil",
    flexibilidad: "Muy alta: el cambio es bienvenido",
    entregas: "Entregas muy frecuentes",
    cliente: "Constante, forma parte del equipo",
    documentacion: "Baja",
    ideal: "Equipos pequeños con foco en calidad técnica",
  },
];

const atributos = [
  { clave: "tipo", etiqueta: "Tipo" },
  { clave: "flexibilidad", etiqueta: "Flexibilidad ante cambios" },
  { clave: "entregas", etiqueta: "Entregas" },
  { clave: "cliente", etiqueta: "Participación del cliente" },
  { clave: "documentacion", etiqueta: "Documentación" },
  { clave: "ideal", etiqueta: "Ideal para" },
];

export default function Comparador() {
  const [seleccionadas, setSeleccionadas] = useState([]);

  function alternar(id) {
    if (seleccionadas.includes(id)) {
      setSeleccionadas(seleccionadas.filter((s) => s !== id));
    } else {
      setSeleccionadas([...seleccionadas, id]);
    }
  }

  const elegidas = metodologias.filter((m) => seleccionadas.includes(m.id));

  return (
    <main className="comparador-page">
      <h1>Comparador de Metodologías</h1>
      <p>
        Seleccioná dos o más metodologías para ver su tabla comparativa. Recordá la diferencia de
        fondo: la gestión predictiva se centra en cumplir el plan inicial (plazos, costes y
        funcionalidades), mientras que la gestión ágil valora más la respuesta al cambio.
      </p>

      <fieldset className="comparador-opciones">
        <legend>Metodologías disponibles</legend>
        {metodologias.map((m) => (
          <label key={m.id} className="comparador-opcion">
            <input
              type="checkbox"
              checked={seleccionadas.includes(m.id)}
              onChange={() => alternar(m.id)}
            />
            {m.nombre}
          </label>
        ))}
      </fieldset>

      <button onClick={() => setSeleccionadas([])} disabled={seleccionadas.length === 0}>
        Limpiar selección
      </button>

      {elegidas.length < 2 ? (
        <p className="comparador-aviso">Elegí al menos dos metodologías para compararlas.</p>
      ) : (
        <div className="comparador-tabla-contenedor">
          <table className="comparador-tabla">
            <thead>
              <tr>
                <th>Característica</th>
                {elegidas.map((m) => (
                  <th key={m.id}>{m.nombre}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {atributos.map((a) => (
                <tr key={a.clave}>
                  <th scope="row">{a.etiqueta}</th>
                  {elegidas.map((m) => (
                    <td key={m.id}>{m[a.clave]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}