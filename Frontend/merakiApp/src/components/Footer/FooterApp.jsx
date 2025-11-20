import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './footerApp.css';
import { Link } from 'react-router-dom';

export const FooterApp = () => {
  return (
    <>
      <footer className="pt-5 sticky-bottom-bottom pb-5">
        <Container>
          <Row>
            <Col className="mt-5">
              <h5 className="text-uppercase fw-bold mb-4">¿A qué esperas?</h5>
              <p>Elige el destino, nosotros hacemos lo demás.</p>
            </Col>

            <Col className="text-center ">
              <img
                className=" img-logo"
                src="/images/logos/logoeditado.png"
                alt=""
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <div>
                <h5 className="fw-bold">¿Necesitas ayuda?</h5>
                <Link
                  className="links"
                  to="https://www.instagram.com/"
                  target="_blank"
                >
                  <div className="d-flex py-2">
                    <i className="bi bi-instagram px-2"></i>
                    <p>MerakiViajes</p>
                  </div>
                </Link>

                <Link
                  className="links"
                  to="https://web.whatsapp.com/#!"
                  target="_blank"
                >
                  <div className="d-flex py-2">
                    <i className="bi bi-whatsapp px-2"></i>
                    <p>+ 34 666 555 444</p>
                  </div>
                </Link>

                <Link
                  className="links"
                  to="https://mail.google.com/"
                  target="_blank"
                >
                  <div className="d-flex py-2">
                    <i className="bi bi-envelope-at px-2"></i>
                    <p>infoMeraki@gmail.com</p>
                  </div>
                </Link>
              </div>
            </Col>

            <div className="text-center">
              <hr />
              <p>© 2025 Copyright: Alumna de SocraTech</p>
            </div>
          </Row>
        </Container>
      </footer>
    </>
  );
};
