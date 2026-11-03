import { useState } from "react";
import "./Contacto.css";

const valoresIniciales = { nombre: "", email: "", mensaje: "" };
const campos = ["nombre", "email", "mensaje"];

// Nombre: empieza con una letra y solo admite letras, espacios, apóstrofe, punto y guion (mínimo 3 caracteres)
const patronNombre = /^\p{L}[\p{L} '.-]{2,}$/u;

// Email: usuario@dominio.ext, sin puntos dobles ni al borde, y con extensión de 2 o más letras
const patronEmail =
  /^[A-Za-z0-9_%+-]+(?:\.[A-Za-z0-9_%+-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;

// Devuelve el mensaje de error del campo, o "" si está bien
function validarCampo(campo, valor) {
  const texto = valor.trim();

  if (campo === "nombre") {
    if (!texto) return "El nombre es obligatorio.";
    if (!patronNombre.test(texto)) {
      return "Ingresá un nombre de al menos 3 letras, sin números ni símbolos.";
    }
  }
  if (campo === "email") {
    if (!texto) return "El email es obligatorio.";
    if (!patronEmail.test(texto)) {
      return "Ingresá un email válido, por ejemplo nombre@correo.com.";
    }
  }
  if (campo === "mensaje") {
    if (!texto) return "El mensaje es obligatorio.";
    if (texto.length < 10) return "El mensaje debe tener al menos 10 caracteres.";
  }
  return "";
}

export default function Contacto() {
  const [datos, setDatos] = useState(valoresIniciales);
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  function manejarCambio(e) {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
    setEnviado(false);

    // Si el campo tenía un error, se revisa de nuevo mientras el usuario lo corrige
    if (errores[name]) {
      const mensajeError = validarCampo(name, value);
      setErrores((previos) => {
        const copia = { ...previos };
        if (mensajeError) {
          copia[name] = mensajeError;
        } else {
          delete copia[name];
        }
        return copia;
      });
    }
  }

  function enviar(e) {
    e.preventDefault();

    const nuevos = {};
    campos.forEach((campo) => {
      const mensajeError = validarCampo(campo, datos[campo]);
      if (mensajeError) nuevos[campo] = mensajeError;
    });
    setErrores(nuevos);

    if (Object.keys(nuevos).length === 0) {
      setEnviado(true);
      setDatos(valoresIniciales);
      return;
    }

    // Hay errores: no se muestra la confirmación y el foco va al primer campo con error
    setEnviado(false);
    const primero = campos.find((campo) => nuevos[campo]);
    document.getElementById(primero)?.focus();
  }

  return (
    <main className="contacto-page">
      <h1>Contacto</h1>
      <p>Escribinos tus dudas o comentarios sobre el sitio.</p>

      <form className="contacto-form" onSubmit={enviar} noValidate>
        <div className="campo">
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            maxLength={60}
            autoComplete="name"
            value={datos.nombre}
            onChange={manejarCambio}
            aria-invalid={errores.nombre ? "true" : "false"}
            aria-describedby={errores.nombre ? "error-nombre" : undefined}
          />
          {errores.nombre && (
            <span id="error-nombre" className="error" role="alert">{errores.nombre}</span>
          )}
        </div>

        <div className="campo">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            maxLength={100}
            autoComplete="email"
            value={datos.email}
            onChange={manejarCambio}
            aria-invalid={errores.email ? "true" : "false"}
            aria-describedby={errores.email ? "error-email" : undefined}
          />
          {errores.email && (
            <span id="error-email" className="error" role="alert">{errores.email}</span>
          )}
        </div>

        <div className="campo">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="5"
            maxLength={1000}
            value={datos.mensaje}
            onChange={manejarCambio}
            aria-invalid={errores.mensaje ? "true" : "false"}
            aria-describedby={errores.mensaje ? "error-mensaje" : undefined}
          />
          {errores.mensaje && (
            <span id="error-mensaje" className="error" role="alert">{errores.mensaje}</span>
          )}
        </div>

        <button type="submit">Enviar mensaje</button>

        {enviado && (
          <p className="exito" role="status">
            ¡Gracias! Tu mensaje fue enviado correctamente.
          </p>
        )}
      </form>
    </main>
  );
}
