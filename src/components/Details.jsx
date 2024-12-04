import { Card, Button } from 'react-bootstrap'
// importo un hook da react-router-dom per interagire con i parametri della rotta
import { useParams } from 'react-router-dom'
import pastasciutte from '../data/menu.json'
import { useEffect } from 'react'

const Details = () => {
  const params = useParams()
  console.log('PARAMS', params)
  // params.pastaId è l'id della pasta di cui devo caricare i dettagli!

  const findTheRightPasta = () => {
    // params.pastaId è il valore recuperato dalla barra degli indirizzi
    // devo utilizzarlo per trovare nel menu.json la pasta con l'id corrispondente
    for (let i = 0; i < pastasciutte.length; i++) {
      if (pastasciutte[i].id.toString() === params.pastaId) {
        console.log('pasta trovata!', pastasciutte[i])
      }
    }
    // una volta trovata...
  }

  // componentDidMount
  useEffect(() => {
    findTheRightPasta()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Card>
      <Card.Img variant="top" src="https://placecats.com/400/400" alt="pasta" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default Details
