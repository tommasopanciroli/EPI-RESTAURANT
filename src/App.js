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
              {/* creo una rotta per l'home page */}
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
              {/* creo una rotta per la pagian di amministrazione */}
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
            </Routes>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
