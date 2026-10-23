import { useState } from "react";
import "./Glosario.css";

const terminos = [
  { id: 1, termino: "Backlog", definicion: "Lista ordenada de todo el trabajo pendiente de un producto o de un sprint." },
  { id: 2, termino: "Calidad de software", definicion: "Grado en que un producto cumple los requisitos y las necesidades de sus usuarios." },
  { id: 3, termino: "Caso de prueba", definicion: "Conjunto de pasos, datos de entrada y resultado esperado para verificar una funcionalidad." },
  { id: 4, termino: "Daily Scrum", definicion: "Reunión diaria de 15 minutos para sincronizar el trabajo del equipo." },
  { id: 5, termino: "Defecto", definicion: "Error en el software que hace que se comporte de forma distinta a lo esperado." },
  { id: 6, termino: "Definición de Hecho", definicion: "Criterios acordados por el equipo para considerar terminada una historia de usuario." },
  { id: 7, termino: "Incremento", definicion: "Versión utilizable del producto que se obtiene al final de cada sprint." },
  { id: 8, termino: "ISO 25000", definicion: "Familia de normas SQuaRE para evaluar la calidad de un producto de software." },
  { id: 9, termino: "Kanban", definicion: "Método ágil que visualiza el trabajo en un tablero y limita el trabajo en curso." },
  { id: 10, termino: "Product Owner", definicion: "Rol de Scrum responsable de maximizar el valor del producto y ordenar el backlog." },
  { id: 11, termino: "Pruebas de regresión", definicion: "Pruebas que se repiten tras un cambio para verificar que no se rompió lo que ya funcionaba." },
  { id: 12, termino: "Retrospectiva", definicion: "Reunión al final del sprint para analizar cómo trabajó el equipo y cómo mejorar." },
  { id: 13, termino: "Sprint", definicion: "Período de duración fija en el que se desarrolla un incremento del producto." },
  { id: 14, termino: "Testing", definicion: "Proceso de ejecutar el software para encontrar defectos y evaluar su calidad." },
  { id: 15, termino: "Validación", definicion: "Comprobar que el producto construido satisface las necesidades reales del usuario." },
  { id: 16, termino: "Verificación", definicion: "Comprobar que el producto se construye correctamente según sus especificaciones." },
  { id: 17, termino: "Velocidad", definicion: "Cantidad de trabajo, medida en puntos, que un equipo completa por sprint." },
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