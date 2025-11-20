import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Cards } from './Cards';
import { Buscador } from './Buscador';
import './tiempoGeneral.css';
import { Grafica } from './Grafica';

export const TiempoGeneral = () => {
  const [dataTotal, setDataTotal] = useState();
  const calcularHora = (str) => {
    return str.split(' ')[1];
  };

  const dataReducida = () => {
    let arrayReducido = dataTotal.list.filter(
      (elem) => calcularHora(elem.dt_txt) === '15:00:00'
    );

    console.log(dataTotal.city.name);
    return arrayReducido;
  };

  const nombreCiudad = () => {
    let ciudad = dataTotal.city.name;

    return ciudad;
  }

  return (
    <Container>
      <Row className="g-5">
        <Col lg={12}>
          <Buscador setDataTotal={setDataTotal} />
        </Col>
        <Col lg={12}>{dataTotal && <Cards datos={dataReducida()} ciudad={nombreCiudad()}/>}</Col>    
      </Row>
    </Container>
  );
};
