import React from 'react';
import { Boton } from '../../components/boton/Boton';
import { useNavigate } from 'react-router-dom';

export const Tiempo = () => {
  const navigate = useNavigate();
  return (
    <>
      <article>
        <h3 className="ms-5">Tips sobre el tiempo</h3>
        <ul className="d-flex flex-column gap-3">
          <li>
            Aunque vayas en buena temporada, siempre puede llover o hacer frío.
            Lleva un impermeable ligero, paraguas plegable y ropa por capas.
          </li>
          <li>
            El calor o el frío extremos pueden arruinar un viaje si no estás
            preparado. Protege tu piel del sol, mantente hidratado y evita
            esfuerzos físicos en horas de mucho calor o frío.
          </li>
          <li>
            Consulta apps como AccuWeather, Weather.com o la app del clima de tu
            teléfono para revisar el pronóstico diario y planificar mejor tus
            actividades.
          </li>
          <li>
            En destinos de montaña, el clima puede cambiar muy rápido y ser
            mucho más frío que en zonas bajas. Además, podrías sentir los
            efectos de la altitud si no te preparas bien.
          </li>
        </ul>
        <p className="ps-3">
          De todos modos, aquí estamos para ayudarte. El tiempo puede variar
          según muchos factores, así que nosotros te mantendremos informados.
          Siempre podrás mirar días antes en nuestro buscador de tiempo.
        </p>
        <Boton
          aspecto="redondo"
          nombre="Tiempo"
          icono="bi bi-thermometer-sun"
          onClick={() => navigate('/tiempoGeneral')}
        />
      </article>
    </>
  );
};
