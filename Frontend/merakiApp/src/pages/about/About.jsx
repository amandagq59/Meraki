import React, { useRef } from 'react';
import './about.css';
import { Col, Container, Row } from 'react-bootstrap';

export const About = () => {
  //  const section1Ref = useRef(null)
  //   const section2Ref = useRef(null)
  //   const goToSection = (section) => {
  //      if(section === 'section1'){
  //       section1Ref.current.scrollIntoView({behavior: 'smooth'});
  //      }

  //      if(section === 'section2'){
  //       section2Ref.current.scrollIntoView({behavior: 'smooth'});
  //      }
  //   }

  return (
    <>
      <section /* ref={section1Ref} */ className="presentacion">
        <Container>
          <Row lg={2}>
            <Col
              lg={6}
              className="texto mt-5 d-flex flex-column align-items-center justify-content-center"
            >
              <h2 className="mb-3">Filosofía de Meraki</h2> Viajar es más que
              visitar un lugar; es vivir una historia, crear recuerdos y
              conectar con el mundo. Nuestra misión es ser tu compañero en esa
              aventura. Aquí, te ayudamos a convertir tus ideas de viaje en
              realidades memorables. Nuestro objetivo es inspirarte a explorar
              nuevos horizontes, facilitarte la organización de cada detalle y
              asegurarnos de que cada viaje sea una experiencia personal,
              auténtica e inolvidable.
            </Col>

            <Col lg={6}>
              <Row lg={2} className="d-flex g-0">
                <Col>
                  <img
                    className="img-avion"
                    src="/images/about/paisaje1.jpg"
                    alt=""
                  />
                  <img
                    className="img-avion"
                    src="/images/about/paisaje2.jpg"
                    alt=""
                  />
                </Col>
                <Col>
                  <img
                    className="img-avion"
                    src="/images/about/paisaje3.jpg"
                    alt=""
                  />
                  <img
                    className="img-avion"
                    src="/images/about/paisaje4.jpg"
                    alt=""
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section /* ref={section2Ref} */ className="section-nosotros py-5">
        <Row className="justify-content-center align-items-center ">
          <Col lg={3} className="text-center">
            <img
              className="profile"
              src="./images/profile/Amanda.jpeg"
              alt="foto de Amanda, organizadora de Meraki. En Indonesia"
            />
          </Col>
          <Col lg={6}>
            <h2 className="text-center m-4">Conoce nuestra historia</h2>
            <p>
              <span>Amanda Gómez</span>, una viajera incansable que un día, en
              medio de un tren nocturno entre <span>Hanoi</span> y{' '}
              <span>Da Nang </span>, decidió convertir su pasión en un proyecto
              de vida: una <span>comunidad </span>
              para poder seguir viajando y poder compartir el mundo con otros.
            </p>

            <p>
              <span>Málagueña</span>, 29 años, amante del sushi, los templos
              budistas y las caminatas al amanecer. Estudió educación social,
              pero encontró su verdadera vocación cuando se fue sola a{' '}
              <span>Tailandia</span> durante seis meses. Desde entonces, ha
              recorrido más de <span>25 países</span> con su cámara al hombro,
              buscando siempre historias reales que contar. Fundadora de esta
              comunidad, encargada de toda la logística, las reservas y que cada
              viaje funcione como un reloj.
            </p>
            <p>
              Después de viajar tanto y descubrir cosas maravillosas, decidí
              crear esta página para que más personas vivan lo mismo que yo:
              conocer el <span>mundo</span> de forma auténtica, en grupo, con
              buena vibra y sin complicaciones.
            </p>
            <p>
              Siempre viaja con un gran <span>equipo</span>, los cuales se
              encargan de los traslados en furgoneta y de documentar todo el viaje.
            </p>

            <p>
              Así nació este proyecto. Más que una agencia, es una{' '}
              <span>familia </span>
              viajera.
            </p>
            <div className="text-center mt-5">
              <p className="fw-bolder">
                Experiencia en 25 países, entre ellos: <br />
              </p>
              <div className="iconos-paises">
                <img src="/svg/iconosPaises/2.svg" alt="" />
                <img src="/svg/iconosPaises/3.svg" alt="" />
                <img src="/svg/iconosPaises/4.svg" alt="" />
                <img src="/svg/iconosPaises/5.svg" alt="" />
                <img src="/svg/iconosPaises/6.svg" alt="" />
                <img src="/svg/iconosPaises/7.svg" alt="" />
                <img src="/svg/iconosPaises/8.svg" alt="" />
                <img src="/svg/iconosPaises/9.svg" alt="" />
                <img src="/svg/iconosPaises/10.svg" alt="" />
              </div>
            </div>
          </Col>
          <Col lg={3} className="text-center">
            <img
              className="profile"
              src="./images/profile/Amanda1.jpeg"
              alt="foto de Sofiuan, organizador de Meraki. En Roma"
            />
          </Col>
        </Row>
      </section>

      <section
        id="seleccion"
        className="section-porqueNosotros py-5 text-center"
      >
        <h2>¿Por qué viajar con nosotros?</h2>
        <Container>
          <Row lg={3}>
            <Col className=" d-flex flex-column">
              <div>
                <img
                  className="iconoVerde"
                  src="/svg/iconosMotivos/icono1.svg"
                  alt=""
                />
                <h3>¡Ahorra dinero! </h3>
                <p>
                  Ahorra dinero con nosotros. Proporcionamos buenos precios y
                  buena calidad en los alojamientos y actividades que realizamos
                </p>
              </div>

              <div className="mt-3">
                <img
                  className="iconoRojo"
                  src="/svg/iconosMotivos/icono3.svg"
                  alt=""
                />
                <h3>¡Simplemente especial! </h3>
                <p>
                  Todo el viaje está organizado por profesionales que cuentan de
                  experiencia en cada país de destino. Todo pensando al detalle.
                </p>
              </div>
            </Col>
            <Col className="d-flex align-items-center">
              <div>
                <img
                  className="iconoAmarillo"
                  src="/svg/iconosMotivos/icono5.svg"
                  alt=""
                />
                <h3>¡Máxima seguridad! </h3>
                <p>
                  Te aseguramos seguridad, encargándonos de todo nosotros.
                  Además siempre estarás acompañada por nosotros y por tus
                  compañeros.
                </p>
              </div>
            </Col>
            <Col className="div-img d-flex flex-column">
              <div>
                <img
                  className="iconoRosa"
                  src="/svg/iconosMotivos/icono2.svg"
                  alt=""
                />
                <h3>¡Exclusividad! </h3>
                <p>
                  Organizamos viajes de calidad, ofreciendo sitios exclusivos y
                  evitando lugares maxificados de turistas.
                </p>
              </div>
              <div className="mt-3">
                <img
                  className="iconoNaranja"
                  src="/svg/iconosMotivos/icono4.svg"
                  alt=""
                />
                <h3>¡Siempre acompañado!</h3>
                <p>
                  Conoce a un grupo increíble de personas. Siempre elegimos a
                  personas que se asemejen a ti para que así estés agusto en
                  todo momento.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
