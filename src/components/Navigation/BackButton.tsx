import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export const BackButton = () => {
  return (
    <Link to="../work">
      <div
        style={{
          display: 'flex',
          alignItems: 'stretch',
          margin: '-2% 0 2% -2%',
        }}
      >
        <FontAwesomeIcon
          icon={faAngleLeft}
          size="xl"
          style={{ paddingRight: '1rem' }}
        />
        <h2 style={{ margin: 0, color: '#4d4d4e' }}>WORK</h2>
      </div>
    </Link>
  )
}
