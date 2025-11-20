import React, { useState } from 'react';
import axios from 'axios'
import { Button } from 'react-bootstrap';
import { Boton } from '../boton/Boton';

let APIKEY = 'fea4e10893e2dfaa205a2269eeca82a8';

export const Buscador = ({ setDataTotal }) => {
  const [city, setCity] = useState('');

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const onSubmit = async () => {
    try {
      let resultado = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast/?q=${city}&units=metric&appid=${APIKEY}`
      );
      setDataTotal(resultado.data);
    } catch (error) {
      console.log(error);
    }
    setCity(' ');
  };

  return (
    <div className='d-flex flex-column p-5 justify-content-center  align-items-center gap-2'>
      <label>¡Introduce una ciudad y comprueba el tiempo!</label>
      <input classtype="text" value={city} onChange={handleChange} />
        <Boton onClick={onSubmit} nombre='Buscar' aspecto='redondo' icono='bi bi-thermometer-sun'/>
    
    </div>
  );
};
