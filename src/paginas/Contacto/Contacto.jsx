import { useState } from "react";
import "./Contacto.css";

const valoresIniciales = { nombre: "", email: "", mensaje: "" };

export default function Contacto() {
  const [datos, setDatos] = useState(valoresIniciales);
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  function manejarCambio(e) {
    setDatos({ ...datos, [e.target.name]: e.target.value });
    setEnviado(false);
  }

  function validar() {
    const nuevos = {};
    const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (datos.nombre.trim().length < 3) {
      nuevos.nombre = "El nombre debe tener al menos 3 caracteres.";
    }
    if (!patronEmail.test(datos.email)) {
      nuevos.email = "Ingresá un email válido, por ejemplo nombre@correo.com.";
    }
    if (datos.mensaje.trim().length < 10) {
      nuevos.mensaje = "El mensaje debe tener al menos 10 caracteres.";
    }
    return nuevos;
  }

  function enviar(e) {
    e.preventDefault();
    const nuevos = validar();
    setErrores(nuevos);

    if (Object.keys(nuevos).length === 0) {
      setEnviado(true);
      setDatos(valoresIniciales);
    }
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
            value={datos.nombre}
            onChange={manejarCambio}
            aria-invalid={errores.nombre ? "true" : "false"}
            aria-describedby="error-nombre"
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
            value={datos.email}
            onChange={manejarCambio}
            aria-invalid={errores.email ? "true" : "false"}
            aria-describedby="error-email"
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
            value={datos.mensaje}
            onChange={manejarCambio}
            aria-invalid={errores.mensaje ? "true" : "false"}
            aria-describedby="error-mensaje"
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