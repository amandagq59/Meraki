import React from 'react';

export const Documentacion = () => {
  return (
    <article className="article-vuelos d-flex flex-column justify-content-center">
      <h3 className="ms-5">Tips sobre la documentacion</h3>
      <div>
        <ul className="d-flex flex-column gap-3">
          <li>
            Asegúrate de que tu documentación esté vigente, DNI y en algunos
            casos pasaporte.
          </li>
          <li>
            Infórmate si necesitas una visa para entrar, cuánto tarda en
            tramitarse y si puedes hacerlo online.
          </li>
          <li>
            No guardes la documentación en el equipaje facturado. Usa una
            riñonera de viaje o portadocumentos oculto para mantenerlos seguros
            y accesibles.
          </li>
          <li>
            Algunas aerolíneas o gobiernos tienen apps para llevar tu
            documentación digital, llenar formularios de entrada o verificar
            requisitos sanitarios.
          </li>
          <li>
            Asegúrate de tener los documentos también listos para regresar
            (algunos países pueden pedir prueba de salida o test COVID
            dependiendo de las reglas del momento).
          </li>
          <li>
            Lleva siempre de viaje copias de tu documentación por si en algún
            caso de extravía.
          </li>
        </ul>
      </div>
    </article>
  );
};
