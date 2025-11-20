import React from 'react';
import './preguntas.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Preguntas = () => {
  return (
    <>
      <section className="section-preguntas d-flex flex-column justify-content-center align-items-center">
        <h2>¿Tienes dudas sobre alguno de nuestros viajes?</h2>
        <h3>¡Te resolvemos todas tus preguntas!</h3>
      </section>
      <section className="section-dudas d-flex flex-column justify-content-center align-items-center">
        <div className="fondo-preguntas">
          <details>
            <summary>¿Es obligatorio ir solo?</summary>
            <p>
              ¡Claro que no! Meraki permite viajar solo y acompañado, como mejor
              te sientas.
            </p>
            <p>¡Aquí todo el mundo es bienvenido!</p>
          </details>
          <details>
            <summary> ¿Cuál es el rango de edad?</summary>
            <p>
              El rango de edad permitido depende de cada viaje programado y su
              itineario, en la información de próximos destinos puedes ver con
              detalle esta información.
            </p>
          </details>
          <details>
            <summary> ¿Qué se incluye en el precio?</summary>
            <p>
              Todos los gastos están incluidos en el precio, menos los vuelos y
              los gatos personales. Nosotros te ayudamos a buscar los mejores
              vuelos.
            </p>
          </details>

          <details>
            <summary>¿Puedo conocer antes a mis compañeros?</summary>
            <p>
              No os podemos dar información de los demás compañeros debido a la
              política de privacisas de la empresa pero semanas antes de viajar
              hacemos un grupo para presentarnos y romper el hielo.
            </p>
          </details>
          <details>
            <summary>¿Cuál es el perfil de las personas que viajan?</summary>
            <p>
              Las personas que eligen viajar con nosotros comparten el gusto por
              vivir nuevas experiencias, conocer culturas diferentes y disfrutar
              la compañía de otros viajeros. Nuestro público es muy diverso,
              pero en general se caracteriza por tener una mentalidad abierta,
              sociable y con espíritu aventurero.
            </p>
            <p>
              Recibimos desde viajeros jóvenes que buscan explorar el mundo por
              primera vez, hasta adultos que desean descubrir nuevos destinos
              sin preocuparse por la organización del viaje. Muchos viajan solos
              y buscan integrarse en un grupo para compartir momentos únicos,
              mientras que otros vienen con amigos o en pareja.
            </p>
            <p>
              Lo que todos tienen en común es el deseo de hacer nuevos amigos,
              vivir experiencias auténticas y formar parte de una comunidad
              viajera con buena vibra.
            </p>
          </details>
          <details className="border-none">
            <summary>+ Información</summary>
            <div className="d-flex  justify-content-center ">
              <p>
                Puedes ponerte en contacto con nosotros cuando lo necesites,
                pulsa y contáctanos por whatsApp de forma inmediata.
                Contectaremos cuando podamos.
              </p>
              <Link to="https://web.whatsapp.com" target="_blank">
                <img
                  className="icono-what px-2"
                  src="/images/footer/what.png"
                  alt=""
                />
              </Link>
            </div>
          </details>
        </div>
      </section>
    </>
  );
};
