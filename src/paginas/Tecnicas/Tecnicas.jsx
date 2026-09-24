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
          Las pruebas de software son actividades que permiten comprobar si una aplicación funciona correctamente y cumple con los requisitos establecidos.
          Durante una prueba se realizan determinadas acciones sobre el software y se observan los resultados obtenidos. Estos resultados pueden compararse con los resultados esperados para determinar si existe algún comportamiento incorrecto.
          Su objetivo principal es detectar errores y problemas antes de que el software llegue al usuario.
          Las pruebas permiten identificar problemas que pueden encontrarse en diferentes partes del software. Dependiendo de aquello que se quiera comprobar, pueden utilizarse distintos niveles y tipos de pruebas.
          Realizar estas comprobaciones permite encontrar errores durante el desarrollo, registrar los problemas encontrados y realizar las correcciones correspondientes.
          Después de corregir un problema, las pruebas pueden volver a ejecutarse para comprobar que la corrección haya funcionado correctamente.
        </p>
      </section>

      <section>
        <h2>Niveles de pruebas</h2>
        <p>
          Las pruebas pueden organizarse en diferentes niveles según la parte del software que se quiera comprobar.
          Cada nivel permite encontrar distintos tipos de problemas durante el desarrollo. Algunas pruebas se concentran en componentes individuales, mientras que otras comprueban la interacción entre componentes o el funcionamiento del sistema completo.
        </p>

        <div className="niveles-pruebas">
          <article>
            <h3>Pruebas unitarias</h3>
            <p>
              Se enfocan en comprobar unidades pequeñas del software, como funciones, métodos o componentes individuales.
              El objetivo es comprobar cada unidad de manera independiente para determinar si funciona correctamente y produce los resultados esperados.
              Estas pruebas permiten detectar errores de manera temprana, ya que un problema puede identificarse directamente en la unidad que está siendo comprobada.
              También permiten comprobar que cada parte del software funcione correctamente antes de integrarla con otros componentes.
            </p>
          </article>

          <article>
            <h3>Pruebas de integración</h3>
            <p>
              Comprueban que diferentes componentes o módulos del software funcionen correctamente cuando trabajan juntos.
              Una vez que diferentes componentes funcionan individualmente, es necesario comprobar qué sucede cuando estos se comunican o interactúan entre sí.
              Las pruebas de integración permiten detectar problemas en la comunicación o interacción entre los componentes.
              Por ejemplo, un componente puede funcionar correctamente de manera independiente, pero presentar un problema cuando necesita intercambiar información con otro componente.
            </p>
          </article>

          <article>
            <h3>Pruebas de sistema</h3>
            <p>
              Evalúan el sistema completo para comprobar que todas sus partes funcionen correctamente en conjunto y que el producto cumpla con los requisitos establecidos.
              En este nivel se analiza el software como un producto completo y se comprueba su funcionamiento general.
              Las diferentes partes del sistema se consideran conjuntamente para comprobar que las funciones disponibles respondan correctamente y que el comportamiento general corresponda con los requisitos establecidos.
              Estas pruebas permiten encontrar problemas que pueden no haber sido detectados en niveles anteriores debido a que se producen cuando todo el sistema funciona conjuntamente.
            </p>
          </article>
        </div>
      </section>

      <section>
        <h2>Tipos de pruebas</h2>
        <p>
          Existen diferentes formas de realizar pruebas dependiendo de cuánto se conozca sobre el funcionamiento interno del software.
          Dos enfoques importantes son las pruebas de caja negra y las pruebas de caja blanca.
        </p>

        <div className="tarjetas-pruebas">
          <article className="tarjeta-prueba">
            <h3>Pruebas de caja negra</h3>
            <p>
              Se evalúa el comportamiento del software sin analizar su código interno.
              En este tipo de prueba, quien realiza la comprobación se concentra en las entradas proporcionadas al software y en las respuestas que devuelve.
              Se introducen datos o se realizan acciones y posteriormente se comprueba si la respuesta obtenida es la esperada.
            </p>
            <button onClick={() => mostrarPrueba("negra")}>
              {pruebaActiva === "negra" ? "Ocultar detalles" : "Ver detalles"}
            </button>

            {pruebaActiva === "negra" && (
              <div className="detalles-prueba">
                <h4>¿Qué se comprueba?</h4>
                <p>
                  Se verifica que las entradas produzcan los resultados esperados y que las funciones disponibles para el usuario respondan correctamente.
                  El análisis se concentra principalmente en el comportamiento observable del software, sin necesidad de revisar cómo está implementada internamente cada función.
                  Esto permite comprobar si el sistema responde correctamente desde el punto de vista de su funcionamiento externo.
                </p>

                <h4>Ejemplo</h4>
                <p>
                  Probar un formulario ingresando diferentes datos y comprobar si acepta los valores correctos y muestra un mensaje de error cuando los datos son inválidos.
                  En este caso, la prueba se concentra en los datos introducidos y en la respuesta del formulario. Se comprueba qué ocurre cuando se proporcionan valores correctos y qué ocurre cuando se proporcionan valores inválidos.
                </p>
              </div>
            )}
          </article>

          <article className="tarjeta-prueba">
            <h3>Pruebas de caja blanca</h3>
            <p>
              Analizan el funcionamiento interno del software y tienen en cuenta su código, estructura y lógica para comprobar que las diferentes partes del programa se ejecuten correctamente.
              A diferencia de las pruebas de caja negra, este enfoque considera cómo está construido internamente el software.
              Se pueden analizar las instrucciones, condiciones y diferentes caminos que puede seguir la ejecución de un programa.
            </p>
            <button onClick={() => mostrarPrueba("blanca")}>
              {pruebaActiva === "blanca" ? "Ocultar detalles" : "Ver detalles"}
            </button>

            {pruebaActiva === "blanca" && (
              <div className="detalles-prueba">
                <h4>¿Qué se comprueba?</h4>
                <p>
                  Se analizan caminos de ejecución, condiciones y estructuras del código para detectar errores en la lógica interna del programa.
                  Esto permite comprobar que las diferentes partes de la estructura interna se ejecuten correctamente y que las condiciones establecidas produzcan los resultados esperados.
                </p>

                <h4>Ejemplo</h4>
                <p>
                  Comprobar que una función ejecute correctamente todas sus condiciones y que los diferentes caminos posibles del código produzcan el resultado esperado.
                  En este caso, se analiza la lógica de la función y se comprueba qué sucede cuando se cumplen diferentes condiciones y cuando se siguen distintos caminos de ejecución.
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
            Consiste en analizar el código desarrollado para detectar errores, problemas de lógica, malas prácticas o aspectos que puedan dificultar su mantenimiento.
            La revisión permite analizar cómo está construido el código y encontrar problemas antes de que puedan afectar al funcionamiento del software.
            Durante una revisión pueden observarse diferentes partes del código para identificar errores, comportamientos incorrectos o elementos que podrían dificultar futuras modificaciones.
            También permite detectar problemas de lógica que podrían no ser evidentes únicamente mediante la ejecución del software.
          </p>
        </article>

        <article>
          <h3>Pruebas automatizadas</h3>
          <p>
            Permiten ejecutar pruebas mediante herramientas y programas que comprueban automáticamente determinados comportamientos del software.
            En lugar de realizar manualmente cada comprobación, determinadas pruebas pueden prepararse para que una herramienta las ejecute y compruebe los resultados.
            Ayudan a repetir las mismas comprobaciones de forma rápida y constante.
            Esto resulta especialmente útil cuando es necesario ejecutar nuevamente determinadas pruebas después de realizar modificaciones en el software.
            Las pruebas automatizadas permiten comprobar de manera repetida aquellos comportamientos que se hayan definido dentro de las pruebas.
          </p>
        </article>

        <article>
          <h3>Pruebas manuales</h3>
          <p>
            Son realizadas directamente por una persona que interactúa con el software para comprobar su funcionamiento y detectar problemas que puedan afectar al usuario.
            Durante una prueba manual, la persona realiza diferentes acciones sobre la aplicación, introduce datos y observa los resultados obtenidos.
            Este tipo de prueba permite analizar directamente el comportamiento del software durante su utilización.
            Las pruebas manuales también permiten observar problemas que pueden presentarse durante la interacción con la aplicación y que afectan directamente a la experiencia de utilización del producto.
          </p>
        </article>

        <article>
          <h3>Detección y seguimiento de errores</h3>
          <p>
            Consiste en registrar los errores encontrados, analizar sus causas, realizar las correcciones necesarias y comprobar posteriormente que hayan sido solucionados.
            Cuando se encuentra un error durante una prueba o revisión, es necesario registrar la información correspondiente para poder identificarlo y realizar su seguimiento.
            El registro permite mantener información sobre el problema encontrado y facilita el proceso de análisis y corrección.
            Después de identificar el error, se analizan sus causas y se realizan las modificaciones necesarias para solucionarlo.
            Una vez aplicada la corrección, se vuelve a comprobar el software para verificar que el problema haya sido solucionado correctamente.
            Este proceso permite mantener un seguimiento de los errores encontrados y comprobar cuáles fueron corregidos mediante las modificaciones realizadas.
          </p>
        </article>
      </section>
    </main>
  );
}

export default Tecnicas;