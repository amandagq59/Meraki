import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Boton } from '../boton/Boton';
import './totaldestinos.css';
import { useNavigate } from 'react-router-dom';

export const TotalDestinos = ({ destinos }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <section>
        <Row lg={4} className="g-3">
          {destinos.map((e) => {
            return (
              <Col>
                <article className="article-destino py-5">
                  <div className="div-imagen-destino">
                    <img className="img-card-destino" src={e.imagen} alt="" />
                    <div className="div-info-destino">
                      <h3>
                        {e.nombre_destino} - <span>{e.nombre_pais}</span>
                      </h3>
                      <p className="descripcion-destino">{e.descripcion}</p>
                    </div>
                     {e.estado === 1 && (
                      <Boton
                      
                        onClick={() => navigate(`/infoDestinos/${e.id}`)}
                        aspecto="boton-saberMas"
                        nombre="Saber más +"
                      />
                    )}
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-2">
                    {e.estado === 1 && (
                      <p className="m-0 disponible-destino">
                        <i class="bi bi-check-circle"></i>{' '}
                        {e.estado === 1 && 'Disponible'}
                      </p>
                    )}


                    {e.estado === 1 && (
                      <Boton
                        aspecto="redondo"
                        nombre="¡Reservar Ya!"
                        icono="bi bi-bookmark"
                      />
                    )}
                  </div>
                </article>
              </Col>
            );
          })}
        </Row>
      </section>
    </Container>
  );
};
