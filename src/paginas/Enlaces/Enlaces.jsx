import "./Enlaces.css";

const iconos = {
  documentacion: "📄",
  organizacion: "🏛️",
  articulo: "📰",
  herramienta: "🛠️",
};

const nombresTipo = {
  documentacion: "Documentación",
  organizacion: "Organización",
  articulo: "Artículo",
  herramienta: "Herramienta",
};

const enlaces = [
  {
    id: 1,
    titulo: "La Guía de Scrum",
    tipo: "documentacion",
    descripcion: "La guía oficial que define Scrum: roles, eventos y artefactos.",
    url: "https://scrumguides.org/",
  },
  {
    id: 2,
    titulo: "Manifiesto por el Desarrollo Ágil",
    tipo: "documentacion",
    descripcion: "Los valores y principios que dieron origen a las metodologías ágiles.",
    url: "https://agilemanifesto.org/iso/es/manifesto.html",
  },
  {
    id: 3,
    titulo: "ISO 25000",
    tipo: "organizacion",
    descripcion: "Portal en español sobre las normas de calidad de producto SQuaRE.",
    url: "https://iso25000.com/",
  },
  {
    id: 4,
    titulo: "ISTQB",
    tipo: "organizacion",
    descripcion: "Organización internacional de certificación en pruebas de software.",
    url: "https://www.istqb.org/",
  },
  {
    id: 5,
    titulo: "Kanban según Atlassian",
    tipo: "articulo",
    descripcion: "Introducción práctica a Kanban y a los tableros.",
    url: "https://www.atlassian.com/agile/kanban",
  },
  {
    id: 6,
    titulo: "Martin Fowler",
    tipo: "articulo",
    descripcion: "Artículos sobre arquitectura, metodologías ágiles y buenas prácticas.",
    url: "https://martinfowler.com/",
  },
  {
    id: 7,
    titulo: "Trello",
    tipo: "herramienta",
    descripcion: "Tableros para gestionar tareas, ideal para armar un Kanban.",
    url: "https://trello.com/",
  },
  {
    id: 8,
    titulo: "GitHub",
    tipo: "herramienta",
    descripcion: "Plataforma para alojar código y trabajar en equipo con Git.",
    url: "https://github.com/",
  },
];

export default function Enlaces() {
  return (
    <main className="enlaces-page">
      <h1>Enlaces de Interés</h1>
      <p>Recursos externos para profundizar en calidad de software y metodologías.</p>

      <section className="enlaces-grid">
        {enlaces.map((e) => (
          <article key={e.id} className="enlace-card">
            <span className="enlace-icono" aria-hidden="true">{iconos[e.tipo]}</span>
            <span className="enlace-tipo">{nombresTipo[e.tipo]}</span>
            <h2>{e.titulo}</h2>
            <p>{e.descripcion}</p>
            <a href={e.url} target="_blank" rel="noopener noreferrer">
              Visitar sitio
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}