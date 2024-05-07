import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export const BackButton = () => {
  return (
    <Link
      to="../work"
      style={{
        display: 'flex',
        margin: '-2% 0 2% -2%',
        width: 'fit-content',
        padding: '1rem',
      }}
    >
      <FontAwesomeIcon
        icon={faAngleLeft}
        size="xl"
        style={{ paddingRight: '1rem' }}
      />
      <h2 style={{ margin: 0, color: '#4d4d4e' }}>WORK</h2>
    </Link>
  )
}
