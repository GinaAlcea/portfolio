import { Link, NavLink } from 'react-router-dom'
import './Sidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faCode,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons'
import Logo from '../../asset/Logo.svg'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Stack } from '@mui/material'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="nav-bar-pages">
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
      </div>
      <div style={{ display: 'flex', flexDirection: 'inherit' }}>
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
      </div>
    </div>
  )
}

export default Sidebar
