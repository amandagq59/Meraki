import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './infoDestinos.css';
import { Boton } from '../boton/Boton';

export const InfoDestinos = ({ destinos }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedDestino = destinos.find((e) => e.id === Number(id));
  return (
    <>
      <section className="section-infoDestino p-5">
        <Row>
          <Col
            lg={12}
            className="d-flex  flex-column justify-content-center align-items-center gap-4"
          >
            <div className="datos-destino">
              <h2>¿Por qué viajar a {selectedDestino.nombre_destino}?</h2>
              <p> {selectedDestino.introduccion}</p>
              <img src={selectedDestino.imagen} alt="" />
            </div>

            <div className="d-flex justify-content-center">
              <table className='table'>
                <thead>
                  <tr>
                    <th>Precio total</th>
                    <th>Máximo de plazas</th>
                    <th>Plazas ocupadas</th>
                    <th>Días totales del viaje</th>
                    <th>Fecha de comienzo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {' '}
                      {`${selectedDestino.precio} €`} <br />{' '}
                      <p className='text-danger'>(No incluye vuelos)</p>
                    </td>
                    <td>{selectedDestino.maximo_plazas}</td>
                    <td>{selectedDestino.plazas_ocupadas}</td>
                    <td> {selectedDestino.dias_del_viaje} días</td>
                    <td>{selectedDestino.fecha}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='d-flex  gap-2'>
              <Boton
                aspecto="redondo"
                nombre="¡Reservar Ya!"
                icono="bi bi-bookmark"
              />
               <Boton
                aspecto="redondo"
                nombre="Volver"
                icono="bi bi-arrow-left-circle"
                onClick={()=>navigate('/totaldestinos')}
              />
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};
