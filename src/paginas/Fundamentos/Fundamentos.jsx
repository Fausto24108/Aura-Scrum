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
          La calidad del software se refiere al grado en que un producto de software cumple con los requisitos establecidos y satisface las necesidades para las que fue desarrollado. Esto significa que, para considerar la calidad de un software, no alcanza únicamente con comprobar que la aplicación pueda ejecutarse, sino que también es necesario verificar que sus funciones respondan correctamente a lo esperado.
          Un software de calidad debe proporcionar los resultados que corresponden a las funciones solicitadas, comportarse de manera adecuada ante diferentes situaciones y responder a las necesidades de los usuarios para los cuales fue desarrollado.
          Además, la calidad puede involucrar diferentes características del software. Entre ellas se encuentran aspectos relacionados con su funcionamiento, confiabilidad, facilidad de uso, eficiencia, mantenimiento y adaptación a diferentes entornos.
          Por esta razón, evaluar la calidad implica analizar diferentes características del producto y utilizar criterios que permitan determinar si el software cumple con los requisitos definidos.
          La calidad también debe considerarse durante el desarrollo y no únicamente cuando el producto está terminado. Las diferentes actividades de revisión, evaluación y prueba permiten encontrar problemas durante el proceso y realizar las correcciones necesarias antes de que el software sea utilizado por los usuarios.
        </p>
      </section>

      {/* Conceptos clave structured (Requerimiento US-02) */}
      <section>
        <h2>Conceptos clave de calidad</h2>

        <article className="concepto-item">
          <h3>Calidad del software</h3>
          <p>
            Es el conjunto de características que permiten determinar si un software cumple con los requisitos establecidos y resulta adecuado para sus usuarios.
            Estas características permiten analizar el software desde diferentes puntos de vista. Por ejemplo, se puede comprobar si las funciones disponibles realizan correctamente las tareas para las que fueron desarrolladas, si el sistema mantiene un funcionamiento confiable y si puede ser utilizado de manera adecuada.
            La calidad, por lo tanto, no representa una única característica del software. Está relacionada con diferentes aspectos que, en conjunto, permiten evaluar el producto.
            También es importante considerar que los requisitos establecidos para un software sirven como referencia para determinar qué comportamiento se espera del producto. La evaluación de la calidad permite comparar el software desarrollado con esas condiciones y detectar posibles diferencias.
          </p>
        </article>

        <article className="concepto-item">
          <h3>Aseguramiento de la calidad</h3>
          <p>
            Es el conjunto de características que permiten determinar si un software cumple con los requisitos establecidos y resulta adecuado para sus usuarios.
            Estas características permiten analizar el software desde diferentes puntos de vista. Por ejemplo, se puede comprobar si las funciones disponibles realizan correctamente las tareas para las que fueron desarrolladas, si el sistema mantiene un funcionamiento confiable y si puede ser utilizado de manera adecuada.
            La calidad, por lo tanto, no representa una única característica del software. Está relacionada con diferentes aspectos que, en conjunto, permiten evaluar el producto.
            También es importante considerar que los requisitos establecidos para un software sirven como referencia para determinar qué comportamiento se espera del producto. La evaluación de la calidad permite comparar el software desarrollado con esas condiciones y detectar posibles diferencias.
          </p>
        </article>

        <article className="concepto-item">
          <h3>Control de calidad</h3>
          <p>
            Comprende las actividades realizadas para detectar errores, defectos o problemas en el producto de software y comprobar que cumpla con los requisitos establecidos.
            El control de calidad se concentra en la revisión del producto y en la identificación de problemas que puedan afectar su funcionamiento.
            Durante estas actividades pueden realizarse diferentes comprobaciones y pruebas para encontrar errores. Los resultados obtenidos permiten determinar si el software se comporta de acuerdo con los requisitos y resultados esperados.
            Cuando se encuentra un defecto o un comportamiento incorrecto, este puede ser registrado para posteriormente analizarlo y realizar la corrección correspondiente.
            Una vez realizada una corrección, también es necesario comprobar nuevamente el software para verificar que el problema haya sido solucionado.
          </p>
        </article>

        <article className="concepto-item">
          <h3>Evaluación de la calidad</h3>
          <p>
            Es el proceso de analizar y medir las características de un software para determinar su nivel de calidad y detectar aspectos que puedan mejorarse.
            La evaluación permite obtener información sobre el estado del software mediante diferentes criterios y medidas. De esta manera, se pueden analizar características específicas y determinar si cumplen con las condiciones establecidas.
            Para realizar una evaluación pueden utilizarse métricas, pruebas y otros métodos de análisis que permitan obtener información sobre el producto.
            Los resultados de la evaluación ayudan a identificar tanto los aspectos que cumplen con los requisitos como aquellos que presentan problemas o que podrían ser mejorados.
            La evaluación de la calidad permite, por lo tanto, obtener información que sirva como base para tomar decisiones relacionadas con el software y con las mejoras que puedan realizarse.
          </p>
        </article>

        <article className="concepto-item">
          <h3>Mejora continua</h3>
          <p>
            Consiste en revisar y mejorar de manera constante los procesos y productos de software para aumentar su calidad y reducir errores o problemas.
            La mejora continua implica analizar la información obtenida durante el desarrollo, las pruebas, las evaluaciones y las actividades de control para identificar aspectos que puedan mejorarse.
            Cuando se detecta un problema, se pueden realizar modificaciones destinadas a solucionarlo. Posteriormente, es posible volver a evaluar el resultado para comprobar si la modificación produjo la mejora esperada.
            Este proceso puede repetirse de manera constante, permitiendo que tanto el producto como los procesos utilizados para desarrollarlo sean revisados y mejorados progresivamente.
            La mejora continua busca que los problemas detectados no solamente sean corregidos, sino que la información obtenida pueda utilizarse para evitar o reducir la aparición de problemas similares.
          </p>
        </article>
      </section>

      {/* Métricas structured */}
      <section>
        <h2>Métricas de software</h2>
        <p>
          Las métricas de software son medidas que permiten obtener información cuantificable sobre diferentes características de un producto, un proceso o un proyecto de software.
          Estas medidas permiten convertir determinados aspectos del desarrollo y del software en datos que pueden ser analizados.
          Las métricas son útiles porque permiten obtener información objetiva sobre diferentes situaciones. Por ejemplo, en lugar de indicar solamente que una aplicación presenta muchos errores, se puede registrar la cantidad de defectos encontrados durante un determinado período o durante una determinada actividad de pruebas.
          La información obtenida mediante métricas puede utilizarse para analizar el estado del desarrollo, detectar problemas, realizar seguimientos y tomar decisiones basadas en datos.
          Las métricas pueden clasificarse según aquello que se quiera analizar: el producto desarrollado, el proceso utilizado o el proyecto en general.
        </p>

        <h3>Métricas del producto</h3>
        <p>
          Permiten medir características del software desarrollado, como su tamaño, complejidad, cantidad de defectos, rendimiento o facilidad de mantenimiento.
          Estas métricas se concentran directamente en el producto de software y permiten obtener información sobre diferentes características del sistema.
          Por ejemplo, la cantidad de defectos encontrados puede proporcionar información sobre problemas detectados en el software. Del mismo modo, una medida relacionada con el rendimiento puede utilizarse para conocer determinados tiempos de respuesta de una aplicación.
          Las métricas del producto permiten analizar características concretas y realizar un seguimiento de ellas durante las diferentes etapas del desarrollo.
        </p>

        <h3>Métricas del proceso</h3>
        <p>
          Permiten analizar cómo se desarrolla el software y evaluar aspectos como el tiempo empleado, los errores encontrados y la eficiencia de las actividades realizadas.
          Estas métricas se enfocan en las actividades y procedimientos utilizados durante el desarrollo.
          Por ejemplo, pueden utilizarse para registrar cuánto tiempo se empleó en determinadas actividades o cuántos errores fueron encontrados durante un proceso específico.
          La información obtenida permite analizar cómo se está desarrollando el trabajo e identificar aspectos del proceso que pueden necesitar revisión o mejora.
        </p>

        <h3>Métricas del proyecto</h3>
        <p>
          Se utilizan para conocer el estado general de un proyecto y pueden incluir información relacionada con el esfuerzo, los costos, los tiempos y el avance del desarrollo.
          Estas métricas permiten observar el proyecto desde una perspectiva general y realizar un seguimiento de diferentes aspectos relacionados con su desarrollo.
          El esfuerzo permite analizar los recursos de trabajo utilizados, mientras que los tiempos permiten conocer cuánto se está tardando en realizar determinadas actividades.
          También pueden utilizarse datos relacionados con los costos y con el avance para conocer el estado del proyecto y comparar la situación actual con lo que se había establecido.
        </p>

        <h3>Ejemplos de métricas</h3>
        {/* Lista informativa legible */}
        <ul>
          <li>Cantidad de defectos encontrados: permite conocer cuántos defectos fueron identificados durante las actividades de desarrollo o pruebas.</li><br/>
          <li>Tiempo de respuesta de una aplicación: permite medir cuánto tiempo tarda una aplicación en responder ante una determinada solicitud o acción.</li><br/>
          <li>Porcentaje de cobertura de pruebas: permite expresar mediante un porcentaje qué parte del software está contemplada por las pruebas realizadas.</li><br/>
          <li>Tiempo empleado en el desarrollo: permite registrar cuánto tiempo fue necesario para realizar determinadas actividades relacionadas con el desarrollo del software.</li><br/>
          <li>Cantidad de errores detectados durante las pruebas: permite registrar los errores encontrados mientras se realizan las diferentes comprobaciones sobre el software.</li>
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