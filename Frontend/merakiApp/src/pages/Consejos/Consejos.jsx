import React from 'react';
import './consejos.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';

export const Consejos = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="section-consejos p-5">
        <Col className="d-flex  flex-column justify-content-center align-items-center text-center">
          <article className="article-consejos">
            <h2>¡Mantente informado sobre nuestros tips!</h2>
            <p>
              Informarse antes de un viaje es clave para disfrutar la
              experiencia al máximo, evitar imprevistos y respetar la cultura
              del destino.{' '}
            </p>
            <p>
              Por eso, en Meraki buscamos que viajes comódo y por ello ofrecemos
              diversos consejos para que cada viaje se convierta en una
              experiencia única sin preocupaciones previas. Estos también sirven
              para enriquecerte en cada salida que realices solo.
            </p>
            <p>
              No te preocupes si algo no entiendes o necesitas más información
              sobre ellos, cuando reserves un viaje con nosotros y todo esté
              correcto te enviaremos un correo electrónico con toda la
              información, además de que siempre estamos disponibles para
              cualquier duda.
            </p>
          </article>
        </Col>
        <hr />

        <Col lg={12} className="d-flex py-5">
          <Col lg={6}>
            <Row lg={2} className="d-flex g-0">
              <Col>
                <div className="div-img" onClick={() => navigate('/consejos')}>
                  <img src="/images/consejos/avion.jpg" alt="" />
                  <div className="texto">
                    <h4>Avión</h4>
                  </div>
                </div>
                <div className="div-img" onClick={() => navigate('equipaje')}>
                  <img src="/images/consejos/equipaje.jpg" alt="" />
                  <div className="texto">
                    <h4>Equipaje</h4>
                  </div>
                </div>
              </Col>
              <Col>
                <div
                  className="div-img"
                  onClick={() => navigate('documentacion')}
                >
                  <img src="/images/consejos/pasaporte.jpg" alt="" />
                  <div className="texto">
                    <h4>Documentación</h4>
                  </div>
                </div>
                <div className="div-img" onClick={() => navigate('tiempo')}>
                  <img src="/images/consejos/tiempo.jpg" alt="" />
                  <div className="texto">
                    <h4>Tiempo</h4>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6} className="tips">
            <Outlet />
          </Col>
        </Col>
      </section>
    </>
  );
};
