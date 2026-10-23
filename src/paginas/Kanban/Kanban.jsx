import { useState } from "react";
import "./Kanban.css";

const columnas = [
  { id: "porHacer", titulo: "Por hacer" },
  { id: "enProgreso", titulo: "En progreso", limite: 3 },
  { id: "hecho", titulo: "Hecho" },
];

const tareasIniciales = [
  { id: 1, texto: "Definir historias de usuario", columna: "porHacer" },
  { id: 2, texto: "Diseñar la pantalla de inicio", columna: "porHacer" },
  { id: 3, texto: "Programar el formulario", columna: "enProgreso" },
  { id: 4, texto: "Crear el repositorio", columna: "hecho" },
];

export default function Kanban() {
  const [tareas, setTareas] = useState(tareasIniciales);
  const [texto, setTexto] = useState("");
  const [contador, setContador] = useState(5);
  const [aviso, setAviso] = useState("");

  function agregarTarea(e) {
    e.preventDefault();
    if (texto.trim() === "") {
      setAviso("Escribí el nombre de la tarea.");
      return;
    }
    setTareas([...tareas, { id: contador, texto: texto.trim(), columna: "porHacer" }]);
    setContador(contador + 1);
    setTexto("");
    setAviso("");
  }

  function mover(id, direccion) {
    const tarea = tareas.find((t) => t.id === id);
    const posicion = columnas.findIndex((c) => c.id === tarea.columna);
    const destino = columnas[posicion + direccion];

    if (!destino) return;

    if (destino.limite) {
      const cantidad = tareas.filter((t) => t.columna === destino.id).length;
      if (cantidad >= destino.limite) {
        setAviso(
          `"${destino.titulo}" tiene un límite de ${destino.limite} tareas. Terminá alguna antes de tomar otra.`
        );
        return;
      }
    }

    setAviso("");
    setTareas(tareas.map((t) => (t.id === id ? { ...t, columna: destino.id } : t)));
  }

  function eliminar(id) {
    setTareas(tareas.filter((t) => t.id !== id));
  }

  return (
    <main className="kanban-page">
      <h1>Kanban</h1>
      <p>
        Kanban es un método ágil para visualizar el trabajo en un tablero. Sus ideas clave son
        visualizar el flujo, limitar el trabajo en curso (WIP) y mejorar de forma continua.
        Probá este tablero: agregá tareas y movelas entre columnas.
      </p>

      <form className="kanban-form" onSubmit={agregarTarea}>
        <label htmlFor="nueva-tarea">Nueva tarea</label>
        <input
          id="nueva-tarea"
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Ej: Escribir pruebas"
        />
        <button type="submit">Agregar</button>
      </form>

      {aviso && <p className="kanban-aviso" role="alert">{aviso}</p>}

      <section className="kanban-tablero">
        {columnas.map((col, posicion) => {
          const tareasColumna = tareas.filter((t) => t.columna === col.id);
          return (
            <div key={col.id} className="kanban-columna">
              <h2>
                {col.titulo} ({tareasColumna.length}
                {col.limite ? `/${col.limite}` : ""})
              </h2>
              {tareasColumna.map((t) => (
                <article key={t.id} className="kanban-tarjeta">
                  <p>{t.texto}</p>
                  <button onClick={() => mover(t.id, -1)} disabled={posicion === 0}>
                    ←
                  </button>
                  <button
                    onClick={() => mover(t.id, 1)}
                    disabled={posicion === columnas.length - 1}
                  >
                    →
                  </button>
                  <button onClick={() => eliminar(t.id)}>Eliminar</button>
                </article>
              ))}
              {tareasColumna.length === 0 && <p className="kanban-vacia">Sin tareas</p>}
            </div>
          );
        })}
      </section>
    </main>
  );
}