import { useState } from 'react'
import { Carousel, ListGroup } from 'react-bootstrap'
import pastasciutte from '../data/menu.json'
import PastaComments from './PastaComments'
// ho importato l'array di oggetti di menu.json (le paste)
// con il nome di "pastasciutte"

const MainContent = () => {
  const [activePasta, setActivePasta] = useState(pastasciutte[0])

  return (
    <>
      <Carousel
        onSlid={(index) => {
          // console.log('SLIDE CAMBIATA!', index)
          // bene! ma quello che dobbiamo fare è mantenere aggiornato lo STATE
          // c'è solo un problema nel lavorare con lo state... è READ-ONLY
          // NON FATELO -> this.state.activePasta = "qualcos'altro"
          // this.setState è il metodo corretto per cambiare il valore di state
          setActivePasta(pastasciutte[index])
        }}
      >
        {pastasciutte.map((pasta) => {
          return (
            <Carousel.Item key={pasta.id}>
              <img
                src={pasta.image}
                alt={'delicious ' + pasta.name}
                className="img-fluid"
              />
              <Carousel.Caption>
                <h3>{pasta.name}</h3>
                <p>{pasta.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>

      {/* abbiamo dichiarato ora un componente separato per i commenti delle pastasciutte*/}
      {/* però questo componente "PastaComments" non sa di che pasta far vedere le recensioni */}
      {/* si aspetta di riceverle in una prop che si chiama "pasta" */}
      <PastaComments pasta={activePasta} />

      <p>PREZZO PASTA CORRENTE: {activePasta.price}</p>
    </>
  )
}

export default MainContent
