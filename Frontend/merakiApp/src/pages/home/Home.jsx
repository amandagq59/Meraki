import React from 'react';
import './home.css';
import { Container, Col, Row } from 'react-bootstrap';
import portada from '../../../public/images/portada/portada.jpg';
import { Boton } from '../../components/boton/Boton';
import { DestinosDisponibles } from '../../components/destinoDisponibles/DestinosDisponibles';
import { useNavigate } from 'react-router-dom';

export const Home = ({ destinos }) => {
  const navigate = useNavigate();
  return (
    <>
      <section className="section-portada">
        <Row lg={2}>
          <Col className="logo d-flex flex-column align-items-center p-5">
            <img src="/images/logos/logoeditado.png" alt="" />
          </Col>
        </Row>
      </section>
      <Container>
        <Row lg={2}>
          <Col className="justify-content-center d-flex flex-column py-5">
            <h1>¿Dónde quieres aterizar en tu próximo viaje?</h1>
            <p className="pt-2">
              Viajar ofrece numerosos beneficios que enriquecen la vida. A nivel
              personal, permite desconectarse del estrés diario, mejorar el
              bienestar emocional y fortalecer la autoestima al enfrentarse a lo
              desconocido.{' '}
            </p>
            <p>
              También amplía la perspectiva, ya que expone a nuevas culturas,
              costumbres e ideas, fomentando la empatía y la tolerancia.
            </p>{' '}
            <p>
              En lo social, viajar facilita el encuentro con personas de
              distintos lugares, lo que puede generar nuevas amistades y
              conexiones valiosas. Además, estimula la mente, mejora la
              creatividad y, si se viaja a países con otros idiomas, favorece el
              aprendizaje y la práctica lingüística. Por último, los viajes
              inspiran profesionalmente y desarrollan habilidades como la
              adaptabilidad, la resolución de problemas y la comunicación
              intercultural.
            </p>{' '}
            <p>
              En resumen, viajar no solo es una forma de descanso, sino una
              experiencia transformadora que nutre cuerpo, mente y espíritu.
            </p>
            <p> Nosotros te ofrecemos lugares encantadores, ¿a qué esperas?</p>
            <Boton
              aspecto="normal"
              nombre="VER DESTINOS"
              icono="bi bi-book"
              onClick={() => navigate('/totaldestinos')}
            />
          </Col>

          <Col>
            <img className="img-home py-5" src={portada} alt="" />
          </Col>
        </Row>
        <hr />
        <h2 className="py-3">¡Nuevos destinos para reservar!</h2>
        <DestinosDisponibles destinos={destinos} />
      </Container>
    </>
  );
};
