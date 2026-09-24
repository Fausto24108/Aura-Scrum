import { useState } from "react";
import "./Fundamentos.css";

function Fundamentos() {
  const [normaActiva, setNormaActiva] = useState("iso9126");

  return (
    <main className="fundamentos">
      <h1>Fundamentos de Calidad</h1>

      <section>
        <h2>¿Qué es la calidad del software?</h2>
        <p>
          La calidad del software se refiere al grado en que un producto de
          software cumple con los requisitos establecidos y satisface las
          necesidades para las que fue desarrollado. Un software de calidad
          debe funcionar correctamente, ser confiable, fácil de mantener y
          adecuado para el uso que se le dará.
        </p>
      </section>

      {/* Conceptos clave structured (Requerimiento US-02) */}
      <section>
        <h2>Conceptos clave de calidad</h2>

        <article className="concepto-item">
          <h3>Calidad del software</h3>
          <p>
            Es el conjunto de características que permiten determinar si un
            software cumple con los requisitos establecidos y resulta adecuado
            para sus usuarios.
          </p>
        </article>

        <article className="concepto-item">
          <h3>Aseguramiento de la calidad</h3>
          <p>
            Consiste en aplicar actividades y procedimientos destinados a
            prevenir problemas y asegurar que los procesos utilizados durante
            el desarrollo permitan obtener un software de calidad.
          </p>
        </article>

        <article className="concepto-item">
          <h3>Control de calidad</h3>
          <p>
            Comprende las actividades realizadas para detectar errores,
            defectos o problemas en el producto de software y comprobar que
            cumpla con los requisitos establecidos.
          </p>
        </article>

        <article className="concepto-item">
          <h3>Evaluación de la calidad</h3>
          <p>
            Es el proceso de analizar y medir las características de un
            software para determinar su nivel de calidad y detectar aspectos
            que puedan mejorarse.
          </p>
        </article>

        <article className="concepto-item">
          <h3>Mejora continua</h3>
          <p>
            Consiste en revisar y mejorar de manera constante los procesos y
            productos de software para aumentar su calidad y reducir errores o
            problemas.
          </p>
        </article>
      </section>

      {/* Métricas structured */}
      <section>
        <h2>Métricas de software</h2>
        <p>
          Las métricas de software son medidas que permiten obtener información
          cuantificable sobre diferentes características de un producto, un
          proceso o un proyecto de software. Se utilizan para analizar el
          estado del desarrollo, detectar problemas y tomar decisiones basadas
          en datos.
        </p>

        <h3>Métricas del producto</h3>
        <p>
          Permiten medir características del software desarrollado, como su
          tamaño, complejidad, cantidad de defectos, rendimiento o facilidad de
          mantenimiento.
        </p>

        <h3>Métricas del proceso</h3>
        <p>
          Permiten analizar cómo se desarrolla el software y evaluar aspectos
          como el tiempo empleado, los errores encontrados y la eficiencia de
          las actividades realizadas.
        </p>

        <h3>Métricas del proyecto</h3>
        <p>
          Se utilizan para conocer el estado general de un proyecto y pueden
          incluir información relacionada con el esfuerzo, los costos, los
          tiempos y el avance del desarrollo.
        </p>

        <h3>Ejemplos de métricas</h3>
        {/* Lista informativa legible */}
        <ul>
          <li>Cantidad de defectos encontrados.</li>
          <li>Tiempo de respuesta de una aplicación.</li>
          <li>Porcentaje de cobertura de pruebas.</li>
          <li>Tiempo empleado en el desarrollo.</li>
          <li>Cantidad de errores detectados durante las pruebas.</li>
        </ul>
      </section>

      {/* Estándares con TABS (Requerimiento US-02) */}
      <section>
        <h2>Estándares y modelos relacionados con la calidad</h2>

        <div className="tab-buttons">
          <button onClick={() => setNormaActiva("iso9126")}>ISO 9126</button>
          <button onClick={() => setNormaActiva("iso25000")}>ISO 25000</button>
          <button onClick={() => setNormaActiva("iso9001")}>ISO 9001</button>
          <button onClick={() => setNormaActiva("iso12207")}>ISO 12207</button>
          <button onClick={() => setNormaActiva("iso15504")}>ISO 15504 / SPICE</button>
        </div>

        <div className="tab-content">
          {normaActiva === "iso9126" && (
            <article>
              <h3>ISO 9126</h3>
              <p>
                La ISO 9126 establece un modelo para evaluar la calidad del
                software mediante diferentes características y
                subcaracterísticas de calidad.
              </p>
              <ul>
                <li>Funcionalidad</li>
                <li>Fiabilidad</li>
                <li>Usabilidad</li>
                <li>Eficiencia</li>
                <li>Mantenibilidad</li>
                <li>Portabilidad</li>
              </ul>
            </article>
          )}

          {normaActiva === "iso25000" && (
            <article>
              <h3>ISO 25000</h3>
              <p>
                La familia ISO 25000, conocida como SQuaRE, proporciona un
                marco para especificar, medir y evaluar la calidad de los
                productos de software.
              </p>
              <p>
                Esta familia de normas continúa y amplía el enfoque utilizado
                anteriormente por la ISO 9126 para la evaluación de la calidad
                del software.
              </p>
            </article>
          )}

          {normaActiva === "iso9001" && (
            <article>
              <h3>ISO 9001</h3>
              <p>
                La ISO 9001 establece requisitos para un sistema de gestión de
                la calidad. Puede aplicarse a organizaciones de diferentes
                sectores, incluyendo aquellas que desarrollan y mantienen
                software.
              </p>
              <p>
                Su enfoque se centra en la gestión de los procesos y en la
                mejora continua de la calidad.
              </p>
            </article>
          )}

          {normaActiva === "iso12207" && (
            <article>
              <h3>ISO 12207</h3>
              <p>
                La ISO 12207 establece un marco de procesos para el ciclo de
                vida del software. Describe procesos relacionados con el
                desarrollo, operación, mantenimiento y gestión del software.
              </p>
            </article>
          )}

          {normaActiva === "iso15504" && (
            <article>
              <h3>ISO 15504 / SPICE</h3>
              <p>
                ISO 15504, conocida también como SPICE, se relaciona con la
                evaluación de los procesos de desarrollo de software.
              </p>
              <p>
                Su objetivo es permitir analizar la capacidad de los procesos
                y detectar oportunidades de mejora.
              </p>
            </article>
          )}
        </div>
      </section>
    </main>
  );
}

export default Fundamentos;