import { useState } from "react";
import "./Comparador.css";

const metodologias = [
  {
    id: "cascada",
    nombre: "Cascada",
    tipo: "Tradicional",
    flexibilidad: "Baja: los cambios son costosos",
    entregas: "Una sola entrega al final",
    cliente: "Al inicio y al final",
    documentacion: "Muy alta",
    ideal: "Requisitos fijos y bien definidos",
  },
  {
    id: "v",
    nombre: "Modelo en V",
    tipo: "Tradicional",
    flexibilidad: "Baja: cada fase tiene su prueba asociada",
    entregas: "Una sola entrega al final",
    cliente: "Al inicio y al final",
    documentacion: "Muy alta",
    ideal: "Sistemas críticos que requieren pruebas rigurosas",
  },
  {
    id: "incremental",
    nombre: "Incremental",
    tipo: "Tradicional",
    flexibilidad: "Media: se ajusta entre incrementos",
    entregas: "Por partes, cada incremento",
    cliente: "En cada entrega",
    documentacion: "Alta",
    ideal: "Proyectos donde conviene entregar valor temprano",
  },
  {
    id: "scrum",
    nombre: "Scrum",
    tipo: "Ágil",
    flexibilidad: "Alta: se replanifica en cada sprint",
    entregas: "Cada sprint (1 a 4 semanas)",
    cliente: "En cada revisión del sprint",
    documentacion: "Media",
    ideal: "Equipos pequeños y medianos con requisitos cambiantes",
  },
  {
    id: "kanban",
    nombre: "Kanban",
    tipo: "Ágil",
    flexibilidad: "Muy alta: se puede cambiar en cualquier momento",
    entregas: "Flujo continuo",
    cliente: "Según se necesite",
    documentacion: "Baja",
    ideal: "Mantenimiento y trabajo con flujo constante de tareas",
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
      <p>Seleccioná dos o más metodologías para ver su tabla comparativa.</p>

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