import { Link, NavLink } from 'react-router-dom'
import './Sidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Stack } from '@mui/material'

const Sidebar = () => {
  return (
    <Stack className="nav-bar">
      <Link className="logo" to="/">
        <img src={''} alt="logo" />
      </Link>
      <Stack className="nav-bar-pages">
        <NavLink className="home" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink className="about" to="/about">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink className="contact" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </Stack>
      <Stack>
        <a
          className="nav-bar-socials"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/ginaisaia/"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className="nav-bar-socials"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/GinaAlcea"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </Stack>
    </Stack>
  )
}

export default Sidebar
