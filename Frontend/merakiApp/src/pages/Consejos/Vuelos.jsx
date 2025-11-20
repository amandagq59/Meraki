import React from 'react';

export const Vuelos = () => {
  return (
    <>
      <article className="article-vuelos d-flex flex-column justify-content-center">
        <h3 className='ms-5'>Tips sobre el avión</h3>
        <div>
          <ul className='d-flex flex-column gap-3'>
            <li>
              Llega temprano al aeropuerto o terminal: Mejor esperar que correr
              con estrés.
            </li>
            <li>
              Usa comparadores de vuelos, no te quedes con la primera opción.
            </li>
            <li>
              Navega siempre en modo incógnito o borra las cookies antes de sacar
              el vuelo.
            </li>
            <li>Ojo con la letra pequeña: revisa cargos extras por equipaje</li>
            <li>
              Realiza el check-in 24 horas antes de volar, ya que puede tener
              comisión hacerlo en el mismo aeropuerto
            </li>
            <li>
              Ten a mano siempre tu documentación preparada y mantente informado
              siempre de tu vuelo
            </li>
          </ul>
        </div>
      </article>
    </>
  );
};
