import React from 'react';
import './card-tiempo.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Grafica } from './Grafica';

export const Cards = ({ datos, ciudad}) => {

  return (
    <section className="datos-tiempo">
       <h2 className='text-center'>{ciudad}</h2>
      <Row className="gap-3">
        {datos.map((elem) => {
          return (
            <>
              <Col className="card-tiempo">
                <p className="top-0">{elem.dt_txt.split(' ')[0]}</p>
                <p className="text-center">{elem.main.temp}</p>
                <div className="d-flex gap-5">
                  <div className="d-flex flex-column  gap-2">
                    <p> {elem.dt_txt.split(' ')[1]}</p>
                    <p> Sensacion térmica:{elem.main.feels_like}</p>
                  </div>
                  <div className="d-flex flex-column">
                    <p>Humedad: {elem.main.humidity}</p>
                    <p>Viento{elem.wind.speed}</p>
                  </div>
                </div>
              </Col>
            </>
          );
        })}
      </Row>
      <Col>
        <Grafica datos={datos}/>
      
      </Col>
    </section>

  );
};
