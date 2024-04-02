import { Stack } from '@mui/material'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './About.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faJs,
  faGithub,
  faNpm,
  faHtml5,
  faCss3,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const aboutArray = 'About me'.split('')

  return (
    <div className="container about-page">
      <Stack direction={'row'} sx={{ width: '100%' }}>
        <div className="text-zone">
          <h1>
            <AnimatedLetters strArray={aboutArray} index={1} />
          </h1>
          <h2>creative / enthusiastic / adaptive</h2>
          <p>
            I am going to describe a little bit about me; what do i like and
            what am i like
          </p>
          <p>
            then i'll explain a little bit about how i got into IT and what i
            like about it and what i'm good at
          </p>
        </div>
        <div className="cube-container">
          <div className="skills-cube">
            <div className="side1">
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="side2">
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="side3">
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div className="side4">
              <FontAwesomeIcon icon={faJs} />
            </div>
            <div className="side5">
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <div className="side6">
              <FontAwesomeIcon icon={faNpm} />
            </div>
          </div>
        </div>
      </Stack>
    </div>
  )
}

export default About
