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
    descripcion: "Los cuatro valores y los doce principios que dieron origen a los métodos ágiles.",
    url: "https://agilemanifesto.org/iso/es/manifesto.html",
  },
  {
    id: 3,
    titulo: "Scrum Manager",
    tipo: "documentacion",
    descripcion: "Manual y temario Scrum Master: el ciclo scrum, sus principios y valores, y prácticas para flexibilizarlo.",
    url: "http://www.scrummanager.net/bok/",
  },
  {
    id: 4,
    titulo: "ISO 25000",
    tipo: "organizacion",
    descripcion: "Portal en español sobre las normas de calidad de producto SQuaRE.",
    url: "https://iso25000.com/",
  },
  {
    id: 5,
    titulo: "ISTQB",
    tipo: "organizacion",
    descripcion: "Organización internacional de certificación en pruebas de software.",
    url: "https://www.istqb.org/",
  },
  {
    id: 6,
    titulo: "Kanban según Atlassian",
    tipo: "articulo",
    descripcion: "Introducción práctica a Kanban, a los tableros y al límite de trabajo en curso (WIP).",
    url: "https://www.atlassian.com/agile/kanban",
  },
  {
    id: 7,
    titulo: "Martin Fowler",
    tipo: "articulo",
    descripcion: "Artículos sobre arquitectura, metodologías ágiles y buenas prácticas.",
    url: "https://martinfowler.com/",
  },
  {
    id: 8,
    titulo: "Trello",
    tipo: "herramienta",
    descripcion: "Tableros para gestionar la pila del producto o la pila del sprint, ideal para armar un Kanban.",
    url: "https://trello.com/",
  },
  {
    id: 9,
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
      <p>Recursos externos para profundizar en calidad de software y metodologías ágiles.</p>

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