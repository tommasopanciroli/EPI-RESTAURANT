import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

// è ora importante per la UX "illuminare" il link corrispondente
// alla rotta che abbiamo al momento attiva
// per farlo, dobbiamo avere "coscienza" di quale sia la rotta al momento
// attiva nel browser!
// questa consapevolezza della rotta al momento attiva gli arriverà dal react hook "useLocation()"

// Link si traduce in HTML in un tag <a>
// questo tag ancora però è "speciale", perchè NON richiama un caricamento
// di un nuovo documento dal server, ma semplicemente cambierà il contenuto
// della barra degli indirizzi scatenando il montaggio di una nuova Route

const CustomNavbar = (props) => {
  console.log('PROPS DELLA NAVBAR', props)

  // inserisco l'hook qui
  const location = useLocation()
  console.log('location navbar', location)

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid={props.isFluid}>
        <Link className="navbar-brand" to="/">
          <div>Epistaurant - {props.subtitle}</div>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="/"
              className={
                location.pathname === '/' ? 'nav-link active' : 'nav-link'
              }
            >
              <div>Home</div>
            </Link>
            <Link
              to="/menu"
              className={
                location.pathname === '/menu' ? 'nav-link active' : 'nav-link'
              }
            >
              <div>Menu</div>
            </Link>
            <Link
              to="/prenota"
              className={
                location.pathname === '/prenota'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              <div>Prenota un tavolo</div>
            </Link>
            <Link
              // il "to" è come l'"href" dei normali link
              to="/amministrazione"
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
