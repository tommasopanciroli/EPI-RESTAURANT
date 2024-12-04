import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const CustomNavbar = (props) => {
  console.log('PROPS DELLA NAVBAR', props)

  const location = useLocation()
  console.log('location navbar', location)

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid={props.isFluid}>
        <Navbar.Brand href="#home">Epistaurant - {props.subtitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to={'/'}
              className={
                location.pathname === '/' ? 'nav-link active' : 'nav-link'
              }
            >
              <div>Home</div>
            </Link>
            <Link
              to={'/menu'}
              className={
                location.pathname === '/menu' ? 'nav-link active' : 'nav-link'
              }
            >
              <div>Menu</div>
            </Link>
            <Link
              to={'/prenota'}
              className={
                location.pathname === '/prenota'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              <div>Prenota un tavolo</div>
            </Link>
            <Link
              to={'/amministrazione'}
              className={
                location.pathname === '/amministrazione'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              <div>Amministrazione</div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
