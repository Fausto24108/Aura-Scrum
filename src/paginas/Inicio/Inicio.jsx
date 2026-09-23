import { Link } from "react-router-dom";
import "./Inicio.css";

export default function Inicio() {
  return (
    <div className="inicio">
      {/* Hero Principal */}
      <section className="hero">
        <div className="hero-text">
          <h1>Bienvenido a Aura SCRUM</h1>
          <p>
            Un espacio para entender la calidad de software de forma simple:
            conceptos clave, estándares internacionales como ISO 9126/25000 y
            las técnicas que utilizan los equipos para asegurar que un producto
            funcione correctamente antes de llegar al usuario.
          </p>
          <Link to="/sdlc" className="btn-hero">
            Comenzar Sprint
          </Link>
        </div>
        <div className="hero-image">
          {/* Carga la imagen desde public/hero-scrum.png */}
          <img src="/hero-scrum.png" alt="Ilustración Scrum" className="hero-img-src" />
        </div>
      </section>

      {/* Introducción */}
      <section className="seccion-destacada">
        <h2>¿Qué vas a encontrar?</h2>
        <p>
          Aura SCRUM reúne información sobre los principales conceptos
          relacionados con la gestión de la calidad del software. El contenido
          está organizado para que puedas aprender los temas de manera
          progresiva y encontrar rápidamente la información que necesitás.
        </p>
      </section>

      {/* Bloque 1: Gestión de Calidad */}
      <h2 className="titulo-bloque">Gestión de la Calidad del Software</h2>
      <section className="tarjetas-grid">
        <article className="tarjeta">
          <h3>Fundamentos de Calidad</h3>
          <p>
            Conocé los conceptos fundamentales, las métricas utilizadas para
            evaluar el software y los principales estándares (ISO 9126/25000).
          </p>
          <Link to="/fundamentos" className="btn-card">Ver fundamentos</Link>
        </article>

        <article className="tarjeta">
          <h3>Técnicas de Aseguramiento</h3>
          <p>
            Aprendé sobre las diferentes técnicas y tipos de pruebas que
            permiten detectar errores y comprobar el correcto funcionamiento del software.
          </p>
          <Link to="/tecnicas" className="btn-card">Ver técnicas</Link>
        </article>

        <article className="tarjeta">
          <h3>Herramientas de Calidad</h3>
          <p>
            Introducción a herramientas de gestión de pruebas, seguimiento de defectos y análisis de calidad.
          </p>
          <Link to="/herramientas" className="btn-card">Ver herramientas</Link>
        </article>
      </section>

      {/* Bloque 2: Procesos de Desarrollo */}
      <h2 className="titulo-bloque">Procesos de Desarrollo de Software</h2>
      <section className="tarjetas-grid">
        <article className="tarjeta">
          <h3>Ciclo de Vida (SDLC)</h3>
          <p>Explicación de las diferentes etapas y su importancia en la construcción de software.</p>
          <Link to="/sdlc" className="btn-card">Ver SDLC</Link>
        </article>

        <article className="tarjeta">
          <h3>Modelos Tradicionales</h3>
          <p>Modelo en cascada, modelo en V e incremental. Ventajas, desventajas y gráficos ilustrativos.</p>
          <Link to="/modelos-tradicionales" className="btn-card">Ver modelos</Link>
        </article>

        <article className="tarjeta">
          <h3>Metodologías Ágiles</h3>
          <p>Scrum, Kanban y XP. Principios, roles, ceremonias, artefactos y comparativas.</p>
          <Link to="/metodologias-agiles" className="btn-card">Ver metodologías</Link>
        </article>

        <article className="tarjeta">
          <h3>Scrum en Profundidad</h3>
          <p>Descripción detallada de roles, sprints, backlog, daily meetings, review y retrospective.</p>
          <Link to="/scrum" className="btn-card">Ver Scrum</Link>
        </article>

        <article className="tarjeta">
          <h3>Kanban</h3>
          <p>Uso de tableros Kanban como herramienta clave de gestión visual de procesos.</p>
          <Link to="/kanban" className="btn-card">Ver Kanban</Link>
        </article>
      </section>

      {/* Bloque 3: Funcionalidades Interactivas JS */}
      <h2 className="titulo-bloque">Herramientas Interactivas</h2>
      <section className="tarjetas-grid">
        <article className="tarjeta resaltada">
          <h3>Comparador de Metodologías</h3>
          <p>Selecciona dos o más metodologías y visualiza una tabla comparativa interactiva con sus características.</p>
          <Link to="/comparador" className="btn-card">Ir al Comparador</Link>
        </article>

        <article className="tarjeta resaltada">
          <h3>Encuesta de Preferencias</h3>
          <p>Responde preguntas sobre tu proyecto y descubre qué metodología es la más adecuada.</p>
          <Link to="/encuesta" className="btn-card">Realizar Encuesta</Link>
        </article>
      </section>

      {/* Bloque 4: Recursos y Aprendizaje */}
      <h2 className="titulo-bloque">Recursos y Aprendizaje</h2>
      <section className="tarjetas-grid">
        <article className="tarjeta">
          <h3>Glosario de Términos</h3>
          <p>Definiciones de términos clave relacionados con la calidad y el desarrollo de software.</p>
          <Link to="/glosario" className="btn-card">Ver glosario</Link>
        </article>

        <article className="tarjeta">
          <h3>Preguntas Frecuentes</h3>
          <p>Respuestas a las dudas más comunes sobre calidad y metodologías de desarrollo.</p>
          <Link to="/faq" className="btn-card">Ver FAQ</Link>
        </article>

        <article className="tarjeta">
          <h3>Enlaces de Interés</h3>
          <p>Recursos externos, artículos, libros y organizaciones relevantes en la industria.</p>
          <Link to="/enlaces" className="btn-card">Ver enlaces</Link>
        </article>

        <article className="tarjeta">
          <h3>Ejercicios Prácticos</h3>
          <p>Actividades y casos de estudio reales para reforzar lo aprendido en la plataforma.</p>
          <Link to="/ejercicios" className="btn-card">Ver ejercicios</Link>
        </article>
      </section>

      {/* Importancia */}
      <section className="seccion-destacada borde-completo">
        <h2>¿Por qué es importante la calidad del software?</h2>
        <p>
          La calidad es fundamental para desarrollar productos que sean
          confiables, seguros, eficientes y adecuados para las necesidades de
          sus usuarios. Evaluar la calidad durante el desarrollo permite
          detectar problemas a tiempo, reducir errores y mejorar el resultado final.
        </p>
      </section>
    </div>
  );
}