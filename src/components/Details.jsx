import { Card, Button, Alert, Spinner } from 'react-bootstrap'
// importo un hook da react-router-dom per interagire con i parametri della rotta
import { useParams, Redirect, useNavigate } from 'react-router-dom'
import pastasciutte from '../data/menu.json'
import { useEffect, useState } from 'react'
import PastaComments from './PastaComments'

const Details = () => {
  const params = useParams()
  console.log('PARAMS', params)
  // params.pastaId è l'id della pasta di cui devo caricare i dettagli!

  const [pastaObject, setPastaObject] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const navigate = useNavigate()

  const findTheRightPasta = () => {
    // params.pastaId è il valore recuperato dalla barra degli indirizzi
    // devo utilizzarlo per trovare nel menu.json la pasta con l'id corrispondente
    // metodo con il ciclo for
    // for (let i = 0; i < pastasciutte.length; i++) {
    //   if (pastasciutte[i].id.toString() === params.pastaId) {
    //     console.log('pasta trovata!', pastasciutte[i])
    //   }
    // }

    // metodo più moderno con il metodo .find()
    const pastaToShow = pastasciutte.find((pasta) => {
      return pasta.id.toString() === params.pastaId
    })
    console.log('pastaToShow', pastaToShow)
    // una volta trovata...
    // ...setto lo stato!
    if (pastaToShow) {
      // se abbiamo trovato un match con una delle pastasciutte
      setPastaObject(pastaToShow)
      setIsLoading(false)
    } else {
      // qualcuno si è divertito a provare a cercare una pasta fuori menu!
      // diamogli errore
      setIsLoading(false)
      setIsError(true)
    }
  }

  const goToMenu = () => {
    navigate('/menu')
  }

  // componentDidMount
  useEffect(() => {
    findTheRightPasta()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {isError && (
        <>
          <Alert variant="danger">Errore nel recupero della pasta</Alert>
          <Button variant="primary" onClick={goToMenu}>
            Torna al menu
          </Button>
        </>
      )}
      {/* ...o fate un redirect */}
      {/* <Redirect to="/404" /> */}

      {isLoading && (
        <div>
          <Spinner animation="border" variant="success" />
        </div>
      )}

      {!isError && !isLoading && pastaObject && (
        <>
          <Card className="mb-2">
            <Card.Img
              variant="top"
              src={pastaObject.image}
              alt={'immagine di ' + pastaObject.name}
            />
            <Card.Body>
              <Card.Title>{pastaObject.name}</Card.Title>
              <Card.Text>{pastaObject.description}</Card.Text>
              <Card.Text>{pastaObject.price}$</Card.Text>
              <Button variant="primary" onClick={goToMenu}>
                Torna al menu
              </Button>
            </Card.Body>
          </Card>
          <PastaComments pasta={pastaObject} />
        </>
      )}
    </>
  )
}

export default Details
