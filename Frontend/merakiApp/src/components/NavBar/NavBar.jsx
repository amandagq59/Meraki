import { NavLink, useNavigate } from 'react-router-dom';
import { Container, Row, Col, NavDropdown } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
 import logo from '../../../public/logos-blancos/3.png';
import './navbar.css';
import { Boton } from '../boton/Boton';

export const NavBar = () => {
  const navigate = useNavigate()
  const navigateRegister = () => {
    navigate('/register')
  } 
  const navigateLogo = () => {
    navigate('/')
  }

    const navigateAcess = () => {
    navigate('/Acess')
  } 

  return (
    <nav className="sticky-top">
      <Container>
        <Row>
          <Col className="d-flex align-items-center ">
            <img onClick={navigateLogo} className='img-logo' src={logo} alt="" />
          </Col>
          <Col className="d-flex align-items-center gap-4 justify-content-center">
            <NavLink to="/" className="links">
              Home
            </NavLink>
            <NavLink as={Link} to="/totaldestinos" className="links">
              Destinos
            </NavLink>
            <NavLink to="/about" className="links">
              About
            </NavLink>
             <NavDropdown
           
              as={Link}
              to="/about"
              className="links"
              title="¿Quiénes somos?"
            >
              <NavDropdown.Item>
                <Link smooth to="#filosofia">
                  {' '}
                  Nuestra Filosofía
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link smooth to="#filosofia">
                  {' '}
                  Conócenos
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link smooth to="#filosofia">
                  {' '}
                  ¿Por qué elegirnos?
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

         
            <NavLink to="/consejos" className="links">
              Consejos
            </NavLink>
            <NavLink as={Link} to="/tiempoGeneral" className="links">
              Tiempo
            </NavLink>
               <NavLink to="/preguntas" className="links">
              FAQ
            </NavLink>
          </Col>
          <Col  className="d-flex align-items-center justify-content-end gap-2">
            <Boton
              onClick={navigateRegister}
              aspecto="normal"
              nombre="Registrar"
              icono="bi bi-plus-circle"
            />
            <Boton
            onClick={navigateAcess}
              aspecto="normal"
              nombre="Acceder"
              icono="bi bi-box-arrow-in-right"
            />
          </Col>
        </Row>
      </Container>
    </nav>
  );
};
