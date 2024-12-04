import { Badge } from 'react-bootstrap'
import pastasciutte from '../data/menu.json'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      {pastasciutte.map((pasta) => {
        return (
          <div key={pasta.id} className="mb-5">
            <Link to={'/details/' + pasta.id}>
              {/* i link sono tipo: "/details/0", "/details/2", "/details/4" */}
              <img src={pasta.image} alt={'immagine di ' + pasta.name} />
            </Link>
            <h4>{pasta.name}</h4>
            <h6>{pasta.description}</h6>
            <Badge>{pasta.price}$</Badge>
          </div>
        )
      })}
    </div>
  )
}

export default Menu
