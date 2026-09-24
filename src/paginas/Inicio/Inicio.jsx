import { Link } from "react-router-dom";
import "./Inicio.css";

export default function Inicio() {
  return (
    <div className="inicio">
      <section className="hero">
        <h1>Bienvenido a Aura SCRUM</h1><br/>
        <p>
        Aura SCRUM es un espacio destinado a comprender los conceptos fundamentales relacionados con la calidad del software de una manera clara, ordenada y accesible. Su objetivo es presentar los principales conceptos que permiten entender cómo se puede evaluar un producto de software, qué características se consideran al analizar su calidad y qué actividades pueden realizarse para detectar errores y mejorar su funcionamiento. 
        La calidad del software no se relaciona únicamente con comprobar si una aplicación funciona o si presenta errores visibles. También implica analizar diferentes características del producto y comprobar si cumple con los requisitos establecidos y con las necesidades para las cuales fue desarrollado.
        A lo largo de las diferentes secciones de Aura SCRUM se presentan conceptos relacionados con la evaluación de la calidad, las métricas utilizadas para obtener información sobre el software, los estándares y modelos relacionados con la calidad y las técnicas que permiten detectar problemas durante el desarrollo.
        Entre los contenidos se encuentran referencias a estándares internacionales como ISO 9126 y la familia ISO 25000, además de otros estándares relacionados con distintos aspectos de la calidad y del desarrollo de software.
        El contenido se encuentra organizado en diferentes secciones para facilitar la consulta y permitir que cada tema pueda estudiarse de manera independiente. De esta forma, es posible comenzar por los conceptos fundamentales y posteriormente conocer las técnicas utilizadas para comprobar el funcionamiento del software.
        </p>
      </section>

      <section className="introduccion">
        <h2>¿Qué vas a encontrar?</h2><br/>
        <p>
        Aura SCRUM reúne información sobre los principales conceptos relacionados con la gestión y evaluación de la calidad del software.
        El contenido está organizado para que puedas conocer progresivamente los aspectos que intervienen en la calidad de un producto de software. Cada sección aborda un conjunto determinado de conceptos y permite consultar información específica sin mezclar los diferentes temas.
        Dentro de los contenidos se encuentran explicaciones sobre los fundamentos de la calidad, las métricas de software, los estándares y modelos relacionados con la calidad y las técnicas de aseguramiento de la calidad.
        Los fundamentos permiten comprender qué significa calidad del software y cuáles son algunos de los conceptos utilizados para analizarla. Las métricas permiten conocer cómo pueden obtenerse datos cuantificables sobre determinadas características de un producto, proceso o proyecto. Los estándares y modelos proporcionan referencias para organizar y evaluar diferentes aspectos relacionados con la calidad.
        Por otro lado, las técnicas de aseguramiento permiten conocer las actividades y tipos de pruebas que pueden utilizarse para detectar errores y comprobar el comportamiento del software.
        La organización de estos contenidos permite diferenciar los conceptos teóricos de las técnicas utilizadas durante la comprobación del producto.
        </p>
      </section>

      <section className="tarjetas">
        <article className="tarjeta">
          <h2>Fundamentos de Calidad</h2><br/>
          <p>
          En esta sección vas a encontrar los conceptos fundamentales relacionados con la calidad del software, incluyendo las definiciones y actividades utilizadas para comprender, evaluar y mejorar la calidad de un producto.
          Se presentan conceptos como calidad del software, aseguramiento de la calidad, control de calidad, evaluación de la calidad y mejora continua. Estos conceptos permiten diferenciar las distintas actividades relacionadas con la calidad y comprender cuál es su finalidad dentro del desarrollo de software.
          También se explican las métricas de software, que permiten obtener información cuantificable sobre diferentes características de un producto, un proceso o un proyecto.
          Las métricas pueden utilizarse, por ejemplo, para conocer la cantidad de defectos encontrados, medir determinados tiempos, analizar el avance de un proyecto o evaluar determinados aspectos del software.
          Además, esta sección presenta diferentes estándares y modelos relacionados con la calidad, entre ellos ISO 9126, ISO 25000, ISO 9001, ISO 12207 e ISO 15504/SPICE.
          Estos estándares y modelos se abordan para comprender su relación con la calidad y conocer el propósito que tiene cada uno dentro del ámbito del software.
          En esta sección podrás conocer:

          Conceptos fundamentales de calidad del software.
          Aseguramiento de la calidad.
          Control de calidad.
          Evaluación de la calidad.
          Mejora continua.
          Métricas de producto.
          Métricas de proceso.
          Métricas de proyecto.
          Ejemplos de métricas.
          Estándares y modelos relacionados con la calidad.
          Características de calidad definidas en ISO 9126.
          </p><br/>
          <Link to="/fundamentos">Ver fundamentos</Link>
        </article>

        <article className="tarjeta">
          <h2>Técnicas de Aseguramiento</h2><br/>
          <p>
          En esta sección vas a encontrar información sobre las técnicas y tipos de pruebas utilizadas para comprobar el funcionamiento del software y detectar errores.

          Las pruebas de software permiten verificar el comportamiento de una aplicación mediante diferentes procedimientos. Dependiendo del objetivo de la prueba y de la parte del software que se quiera comprobar, pueden utilizarse distintos niveles y enfoques.
          Se presentan los principales niveles de pruebas, comenzando por las pruebas unitarias, que se concentran en unidades pequeñas del software, y continuando con las pruebas de integración y las pruebas de sistema.
          Cada nivel permite comprobar diferentes aspectos del producto. Las pruebas unitarias permiten analizar componentes individuales; las pruebas de integración permiten comprobar la interacción entre diferentes componentes; y las pruebas de sistema permiten evaluar el sistema completo.
          También se presentan diferentes tipos de pruebas, entre ellos las pruebas de caja negra y las pruebas de caja blanca.
          Las pruebas de caja negra se concentran en el comportamiento observable del software sin analizar directamente su estructura interna. Las pruebas de caja blanca, en cambio, consideran la estructura y lógica interna del programa.
          Además de los tipos y niveles de pruebas, se explican diferentes técnicas de aseguramiento de la calidad, como la revisión de código, las pruebas automatizadas, las pruebas manuales y la detección y seguimiento de errores.
          Estas técnicas permiten realizar diferentes actividades destinadas a encontrar problemas, comprobar comportamientos y realizar un seguimiento de los errores detectados.
          En esta sección podrás conocer:

          Qué son las pruebas de software.
          Niveles de pruebas.
          Pruebas unitarias.
          Pruebas de integración.
          Pruebas de sistema.
          Pruebas de caja negra.
          Pruebas de caja blanca.
          Revisión de código.
          Pruebas automatizadas.
          Pruebas manuales.
          Detección y seguimiento de errores.
          </p><br/>
          <Link to="/tecnicas">Ver técnicas</Link>
        </article>
      </section>

      <section className="importancia">
        <h2>¿Por qué es importante la calidad del software?</h2><br/>
        <p>
        La calidad del software es importante porque permite desarrollar productos que sean confiables, seguros, eficientes y adecuados para las necesidades de sus usuarios.

        Un producto de software puede cumplir una determinada función y, al mismo tiempo, presentar problemas que afecten su utilización. Por ejemplo, puede producir resultados incorrectos, presentar errores durante su funcionamiento, responder lentamente o resultar difícil de utilizar.
        Por este motivo, evaluar la calidad implica considerar diferentes características del software y no solamente comprobar si una determinada función puede ejecutarse.
        Las actividades relacionadas con la calidad permiten detectar problemas durante el desarrollo, en lugar de esperar hasta que el producto haya llegado al usuario. Detectar un problema permite analizarlo, corregirlo y volver a comprobar el funcionamiento correspondiente.
        Las pruebas y demás actividades de evaluación también permiten obtener información sobre el estado del software. Esta información puede utilizarse para identificar errores, comprobar el cumplimiento de requisitos y conocer aspectos que necesitan ser mejorados.
        Trabajar con la calidad durante el desarrollo contribuye a reducir la cantidad de problemas que pueden llegar al usuario y permite mejorar progresivamente el producto.
        Por esta razón, la calidad del software forma parte de las diferentes actividades relacionadas con el desarrollo y evaluación de un producto.
        </p>
      </section>
    </div>
  );
}