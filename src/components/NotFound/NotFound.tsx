import { Link } from 'react-router-dom'
import './NotFound.scss'

const NotFound = () => {
  return (
    <div className="container notfound-page">
      <div className="text-zone">
        <h1>Oops</h1>
        <h2>looks like something went wrong</h2>
        <Link to="/" className="button">
          Go back
        </Link>
      </div>
      <div className="black-hole"></div>
    </div>
  )
}

export default NotFound
