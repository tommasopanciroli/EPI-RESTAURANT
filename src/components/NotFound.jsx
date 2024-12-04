import { Alert, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="text-center">
      <Alert variant="warning">404 - Pasta not found!</Alert>
      <Button
        variant="success"
        onClick={() => {
          navigate('/')
        }}
      >
        Torna in homepage
      </Button>
    </div>
  )
}

export default NotFound