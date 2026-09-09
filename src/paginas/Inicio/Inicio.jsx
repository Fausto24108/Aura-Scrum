import { Link } from "react-router-dom";
import "./Inicio.css";

export default function Inicio() {
  return (
    <div className="inicio">
      <section className="hero">
        <h1>Bienvenido a Aura SCRUM</h1>
        <p>
          Un espacio para entender la calidad de software de forma simple:
          conceptos clave, estándares internacionales como ISO 9126/25000 y
          las técnicas que utilizan los equipos para asegurar que un producto
          funcione correctamente antes de llegar al usuario. A través de
          diferentes secciones vas a poder conocer cómo se evalúa la calidad
          de un software, qué aspectos se tienen en cuenta durante su
          desarrollo y qué herramientas y técnicas pueden utilizarse para
          detectar errores y mejorar un producto.
        </p>
      </section>

      <section className="introduccion">
        <h2>¿Qué vas a encontrar?</h2>
        <p>
          Aura SCRUM reúne información sobre los principales conceptos
          relacionados con la gestión de la calidad del software. El contenido
          está organizado para que puedas aprender los temas de manera
          progresiva y encontrar rápidamente la información que necesitás.
          Vas a encontrar explicaciones sobre fundamentos de calidad, métricas,
          estándares, técnicas de aseguramiento y diferentes aspectos
          relacionados con el desarrollo de software.
        </p>
      </section>

      <section className="tarjetas">
        <article className="tarjeta">
          <h2>Fundamentos de Calidad</h2>
          <p>
            Conocé los conceptos fundamentales, las métricas utilizadas para
            evaluar el software y los principales estándares relacionados con
            la calidad.
          </p>
          <Link to="/fundamentos">Ver fundamentos</Link>
        </article>

        <article className="tarjeta">
          <h2>Técnicas de Aseguramiento</h2>
          <p>
            Aprendé sobre las diferentes técnicas y tipos de pruebas que
            permiten detectar errores y comprobar el correcto funcionamiento
            de un software.
          </p>
          <Link to="/tecnicas">Ver técnicas</Link>
        </article>
      </section>

      <section className="importancia">
        <h2>¿Por qué es importante la calidad del software?</h2>
        <p>
          La calidad es fundamental para desarrollar productos que sean
          confiables, seguros, eficientes y adecuados para las necesidades de
          sus usuarios. Evaluar la calidad durante el desarrollo permite
          detectar problemas a tiempo, reducir errores y mejorar el resultado
          final.
        </p>
      </section>
    </div>
  );
}