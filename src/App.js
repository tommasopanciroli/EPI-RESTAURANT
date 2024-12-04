import './App.css'
// allego il foglio di bootstrap, una volta per tutte
// se ve lo dimenticate, non saranno disponibili le classi di bootstrap!
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import CustomNavbar from './components/CustomNavbar'
import MainContent from './components/MainContent'
import Reservation from './components/Reservation'
import Admin from './components/Admin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import Menu from './components/Menu'
import Details from './components/Details'

// BrowserRouter infonderà al suo contenuto la capacità di navigare tra le rotte
// ed utilizzare gli strumenti di react-router-dom
// Vi suggerisco di inserirlo nel componente App quanto più esterno possibile,
// visto che non ha una trasposizione "fisica" a livello di contenuto

// Routes è un blocco che può esistere solamente all'interno di un BrowserRouter, e il suo scopo è delimitare le sezioni "dinamiche" del nostro componente App
// All'interno di un blocco Routes è possibile inserire tanti componenti Route

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          {/* passo due prop: una per il sottititolo della navbar e una che setterà il valore di fluid per il suo container */}
          <CustomNavbar subtitle="Pastasciutte sul web" isFluid={true} />
        </header>
        <main>
          <Container>
            <Routes>
              {/* creo una rotta per l'homepage */}
              <Route
                path="/"
                element={
                  <Row className="justify-content-center mt-3">
                    <Col xs={12} md={8} lg={6}>
                      <MainContent />
                    </Col>
                  </Row>
                }
              />
              {/* creo una rotta per la pagina di amministrazione */}
              <Route
                path="/amministrazione"
                element={
                  <Row className="justify-content-center mt-3">
                    <Col xs={12} md={8} lg={6}>
                      <Admin />
                    </Col>
                  </Row>
                }
              />
              {/* creo una rotta per la pagina di prenotazione tavoli */}
              <Route
                path="/prenota"
                element={
                  <Row className="justify-content-center mt-3">
                    <Col xs={12} md={8} lg={6}>
                      <Reservation />
                    </Col>
                  </Row>
                }
              />
              {/* creo una rotta per la pagina di menu */}
              <Route
                path="/menu"
                element={
                  <Row className="justify-content-center mt-3">
                    <Col xs={12} md={8} lg={6}>
                      <Menu />
                    </Col>
                  </Row>
                }
              />
              {/* creo una rotta per la pagina di dettaglio */}
              <Route
                // i ":" nel path indicano che la parola che segue deve venire
                // trattata come PARAMETRO
                // il ":pastaId" è generico, indica qualsiasi cosa segua
                // "/details/"
                path="/details/:pastaId"
                // :pastaId può essere "0", "1", "2", etc.
                element={
                  <Row className="justify-content-center mt-3">
                    <Col xs={12} md={8} lg={6}>
                      <Details />
                    </Col>
                  </Row>
                }
              />
              {/* creo una rotta per gestire TUTTE LE ECCEZIONI */}
              <Route
                path="*"
                element={
                  <Row className="justify-content-center mt-3">
                    <Col xs={12} md={8} lg={6}>
                      <NotFound />
                    </Col>
                  </Row>
                }
              />
            </Routes>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
