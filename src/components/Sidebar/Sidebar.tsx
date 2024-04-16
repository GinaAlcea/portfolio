import { Link, NavLink } from 'react-router-dom'
import './Sidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faCode,
  faLightbulb,
  faAward
} from '@fortawesome/free-solid-svg-icons'
import Logo from '../../asset/Logo.svg'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Stack } from '@mui/material'

const Sidebar = () => {
  return (
    <Stack className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <Stack className="nav-bar-pages">
        <NavLink className="home" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink className="about" to="/about">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink className="skills" to="/skills">
          <FontAwesomeIcon icon={faLightbulb} />
        </NavLink>
        <NavLink className="work" to="/work">
          <FontAwesomeIcon icon={faCode} />
        </NavLink>
        <NavLink className="contact" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
        <NavLink className="igraph" to="/igraph">
          <FontAwesomeIcon icon={faAward} />
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
