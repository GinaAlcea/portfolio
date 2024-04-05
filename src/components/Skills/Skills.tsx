import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Skills.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faJs,
  faGithub,
  faNpm,
  faHtml5,
  faCss3,
} from '@fortawesome/free-brands-svg-icons'
import { Stack } from '@mui/material'
import SkillCard from '../Cards/SkillCard'

const Skills = () => {
  const skillsArray = 'My skills'.split('')

  return (
    <div className="container skills-page">
      <Stack direction={'row'} sx={{ width: '100%' }}>
        <div className="text-zone">
          <h1>
            <AnimatedLetters strArray={skillsArray} index={1} />
          </h1>
          <h2> soft skills / certificates / hard skills </h2>
          <p>
            While working in hospitality definitely strengthened my soft skills
            regarding communication, teamwork and patience, the people around me
            described me as patient, people-oriented and persevering even before
            that.
          </p>
          <p>
            Besides developing these soft skills further during my traineeship,
            I've also learned about how an application is created: from
            interview to design, from programming to testing and from
            implementation to managing it. In this time I've earned certificates
            for some fundamental subjects in the IT field.
          </p>
          <p>
            While working in the field for almost 2 years I've experienced what
            it's like to work in an IT environment and be part of the
            development process. All while getting hands on experience with
            ReactJS, JavaScript, HTML5, (S)CSS, NPM, GitHub and libraries like
            Mui and Mantine.
          </p>
        </div>
          {/* <CertificateCard /> */}
          <SkillCard />
        {/* <div className="cube-container">
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
        </div> */}
      </Stack>
    </div>
  )
}

export default Skills
