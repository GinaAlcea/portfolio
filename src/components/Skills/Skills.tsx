import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import SkillGroup from './SkillGroup/SkillGroup'
import { SKILLS } from './SkillList'
import './Skills.scss'
import { useEffect, useState } from 'react'

interface ISkills {
  [index: number]: Skill[]
}

interface Skill {
  name: string
  icon: string | IconDefinition
  type: string
  experience: string
}

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false)
  const skillsArray = 'My skills'.split('')

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024)
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const listAnimation = (i: number) => {
    const initialDelay = 1500
    const delay = 100
    const duration = 1500
    return `fadeIn ${duration}ms ${initialDelay + delay * i}ms backwards`
  }

  const renderSkills = Object.values(SKILLS).map((skill, i) => {
    const offsetIncrements = 360 / Object.keys(SKILLS).length
    const angleIncrements = offsetIncrements * i

    return (
      <div
        className="skill-list"
        key={i}
        style={{
          animation: listAnimation(i),
          transform: isMobile
            ? 'none'
            : `rotate(${angleIncrements}deg) translate(500px, 50px) rotate(-${angleIncrements}deg)`,
        }}
      >
        <SkillGroup value={skill} />
      </div>
    )
  })

  return (
    <div className="container skills-page">
      <div className="ring"></div>
      <div className="ring2"></div>
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
          I've also learned about how an application is created: from interview
          to design, from programming to testing and from implementation to
          managing it. In this time I've earned certificates for some
          fundamental subjects in the IT field: MySQL Fundamentals, Professional
          Scrum Master I, Professional Scrum Master II and Azure Fundamentals
          900.
        </p>
        <p>
          While working in the field for almost 2 years I've experienced what
          it's like to work in an IT environment and be part of the development
          process. All while getting hands on experience with ReactJS,
          JavaScript, HTML5, (S)CSS, NPM, GitHub and libraries like Mui and
          Mantine.
        </p>
      </div>
      <div className="skill-container">{renderSkills}</div>
    </div>
  )
}

export default Skills
