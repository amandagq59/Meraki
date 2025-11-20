import { Col, Row } from 'react-bootstrap';
import './destinosDisponibles.css';
import { Boton } from '../boton/Boton';

export const DestinosDisponibles = ({destinos}) => {

  return (
    <section>
      <Row lg={4} className="g-3 py-5">
        {destinos.slice(0, 4).map((e) => {
          return (
            <Col>
              <article className="carrusel-container">
                <div className="div-imagen">
                  <img className="img-card" src={e.imagen} alt="" />
                  <div className="div-info d-flex justify-content-center align-content-center">
                    <h3>{e.nombre_destino}</h3>
                  </div>
                </div>
              </article>
            </Col>
          );
        })}
      </Row>
    </section>
  );
};
