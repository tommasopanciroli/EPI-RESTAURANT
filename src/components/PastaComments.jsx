import { ListGroup } from 'react-bootstrap'

const PastaComments = (props) => {
  // props.pasta sarà l'oggetto del JSON di cui far vedere le recensioni
  return (
    <ListGroup className="mt-3">
      {props.pasta.comments.map((recensione) => {
        return (
          <ListGroup.Item key={recensione.id}>
            {recensione.author} voto {recensione.rating} - {recensione.comment}
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}

export default PastaComments
