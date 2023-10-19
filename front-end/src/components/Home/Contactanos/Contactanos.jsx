import { useState } from "react";
import React from 'react';
import "./Contactanos.css";
import HeaderC from "./HeaderContactanos/HeaderC";


const Contactanos = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    servicio: 'servicio1',
    empresa: '',
    consulta: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos del formulario
    // Puedes acceder a los valores del formulario desde formData.
    console.log(formData);
    // También puedes realizar una solicitud HTTP para enviar los datos al servidor.
  };
  return (
    
     <>
    
    <HeaderC />
    <section>
    <div className="contenedor-formulario">
          <h2>Solicitud de Cotización</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            /><br />

            <label htmlFor="apellido">Apellido:</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            /><br />

            <label htmlFor="correo">Correo Electrónico:</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            /><br />

            <label htmlFor="telefono">Número de Teléfono:</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            /><br />

            <label htmlFor="servicio">Seleccione un Servicio:</label>
            <select
              id="servicio"
              name="servicio"
              value={formData.servicio}
              onChange={handleChange}
              required
            >
              <option value="servicio1">Servicio 1</option>
              <option value="servicio2">Servicio 2</option>
              <option value="servicio3">Servicio 3</option>
              <option value="servicio4">Servicio 4</option>
              <option value="servicio5">Servicio 5</option>
              <option value="servicio6">Servicio 6</option>
            </select><br />

            <label htmlFor="empresa">Empresa Pertinente:</label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              required
            /><br />

            <label htmlFor="consulta">Consulta:</label>
            <textarea
              id="consulta"
              name="consulta"
              value={formData.consulta}
              onChange={handleChange}
              rows="4"
              required
            ></textarea><br />

            <input type="submit" value="Enviar Cotización" />
          </form>
        </div>
    </section>
    
  </>
  )
}

export default Contactanos

