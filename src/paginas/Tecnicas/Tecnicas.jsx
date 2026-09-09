import { useState } from "react";
import "./Tecnicas.css";

function Tecnicas() {
  const [pruebaActiva, setPruebaActiva] = useState(null);

  const mostrarPrueba = (prueba) => {
    setPruebaActiva(pruebaActiva === prueba ? null : prueba);
  };

  return (
    <main>
      <h1>Técnicas de Aseguramiento de la Calidad</h1>

      <section>
        <h2>¿Qué son las pruebas de software?</h2>
        <p>
          Las pruebas de software son actividades que permiten comprobar si
          una aplicación funciona correctamente y cumple con los requisitos
          establecidos. Su objetivo principal es detectar errores y problemas
          antes de que el software llegue al usuario.
        </p>
      </section>

      <section>
        <h2>Niveles de pruebas</h2>
        <p>
          Las pruebas pueden organizarse en diferentes niveles según la parte
          del software que se quiera comprobar. Cada nivel permite encontrar
          distintos tipos de problemas durante el desarrollo.
        </p>

        <div className="niveles-pruebas">
          <article>
            <h3>Pruebas unitarias</h3>
            <p>
              Se enfocan en comprobar unidades pequeñas del software, como
              funciones, métodos o componentes individuales. Permiten detectar
              errores de manera temprana y comprobar que cada parte funcione
              correctamente por separado.
            </p>
          </article>

          <article>
            <h3>Pruebas de integración</h3>
            <p>
              Comprueban que diferentes componentes o módulos del software
              funcionen correctamente cuando trabajan juntos. Permiten
              detectar problemas en la comunicación o interacción entre ellos.
            </p>
          </article>

          <article>
            <h3>Pruebas de sistema</h3>
            <p>
              Evalúan el sistema completo para comprobar que todas sus partes
              funcionen correctamente en conjunto y que el producto cumpla con
              los requisitos establecidos.
            </p>
          </article>
        </div>
      </section>

      <section>
        <h2>Tipos de pruebas</h2>
        <p>
          Existen diferentes formas de realizar pruebas dependiendo de cuánto
          se conozca sobre el funcionamiento interno del software. Dos enfoques
          importantes son las pruebas de caja negra y caja blanca.
        </p>

        <div className="tarjetas-pruebas">
          <article className="tarjeta-prueba">
            <h3>Pruebas de caja negra</h3>
            <p>
              Se evalúa el comportamiento del software sin analizar su código
              interno. Se introducen datos o acciones y se comprueba si la
              respuesta obtenida es la esperada.
            </p>
            <button onClick={() => mostrarPrueba("negra")}>
              {pruebaActiva === "negra" ? "Ocultar detalles" : "Ver detalles"}
            </button>

            {pruebaActiva === "negra" && (
              <div className="detalles-prueba">
                <h4>¿Qué se comprueba?</h4>
                <p>
                  Se verifica que las entradas produzcan los resultados
                  esperados y que las funciones disponibles para el usuario
                  respondan correctamente.
                </p>

                <h4>Ejemplo</h4>
                <p>
                  Probar un formulario ingresando diferentes datos y comprobar
                  si acepta los valores correctos y muestra un mensaje de error
                  cuando los datos son inválidos.
                </p>
              </div>
            )}
          </article>

          <article className="tarjeta-prueba">
            <h3>Pruebas de caja blanca</h3>
            <p>
              Analizan el funcionamiento interno del software y tienen en
              cuenta su código, estructura y lógica para comprobar que las
              diferentes partes del programa se ejecuten correctamente.
            </p>
            <button onClick={() => mostrarPrueba("blanca")}>
              {pruebaActiva === "blanca" ? "Ocultar detalles" : "Ver detalles"}
            </button>

            {pruebaActiva === "blanca" && (
              <div className="detalles-prueba">
                <h4>¿Qué se comprueba?</h4>
                <p>
                  Se analizan caminos de ejecución, condiciones y estructuras
                  del código para detectar errores en la lógica interna del
                  programa.
                </p>

                <h4>Ejemplo</h4>
                <p>
                  Comprobar que una función ejecute correctamente todas sus
                  condiciones y que los diferentes caminos posibles del código
                  produzcan el resultado esperado.
                </p>
              </div>
            )}
          </article>
        </div>
      </section>

      <section>
        <h2>Técnicas de aseguramiento de la calidad</h2>

        <article>
          <h3>Revisión de código</h3>
          <p>
            Consiste en analizar el código desarrollado para detectar errores,
            problemas de lógica, malas prácticas o aspectos que puedan
            dificultar su mantenimiento.
          </p>
        </article>

        <article>
          <h3>Pruebas automatizadas</h3>
          <p>
            Permiten ejecutar pruebas mediante herramientas y programas que
            comprueban automáticamente determinados comportamientos del
            software. Ayudan a repetir las mismas comprobaciones de forma
            rápida y constante.
          </p>
        </article>

        <article>
          <h3>Pruebas manuales</h3>
          <p>
            Son realizadas directamente por una persona que interactúa con el
            software para comprobar su funcionamiento y detectar problemas que
            puedan afectar al usuario.
          </p>
        </article>

        <article>
          <h3>Detección y seguimiento de errores</h3>
          <p>
            Consiste en registrar los errores encontrados, analizar sus causas,
            realizar las correcciones necesarias y comprobar posteriormente que
            hayan sido solucionados.
          </p>
        </article>
      </section>
    </main>
  );
}

export default Tecnicas;