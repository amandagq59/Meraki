import React from 'react';
import { Boton } from '../boton/Boton';

export const FormAcess = () => {
  return (
    <div className="d-flex flex-column align-items-center div-form">
      <h2>Accede a tu cuenta de Meraki</h2>
      <form className="formulario-registro">
        <div className="div-input">
          <label htmlFor="email">Correo electrónico</label>
          <input
            name="correo"
            placeholder="Introduce tu email"
            id="email"
            type="email"
          />
        </div>
        <div className="div-input">
          <label htmlFor="password">Contraseña</label>
          <input
            name="password"
            placeholder="Contraseña"
            id="password"
            type="password"
          />
        </div>
        <div className="div-btn">
          <Boton aspecto="normal" nombre="Acceder" />
          <Boton aspecto="normal alerta" nombre="Cancelar" />
        </div>
      </form>
    </div>
  );
};
