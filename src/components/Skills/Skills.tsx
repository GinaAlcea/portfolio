import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import SkillGroup from './SkillGroup/SkillGroup'
import { SKILLS } from './SkillList'
import './Skills.scss'

const Skills = () => {
  const skillsArray = 'My skills'.split('')

  const delay = 100
  const duration = 1500
  const listAnimation = (i: number) =>
    `fadeIn ${duration}ms ${delay * i}ms backwards`

  const renderSkills = Object.values(SKILLS).map((skill, i) => {
    const offsetIncrements = 360 / Object.keys(SKILLS).length
    const angleIncrements = offsetIncrements * i

    return (
      <div
        className="skill-list"
        key={i}
        style={{
          animation: listAnimation(i),
          transform: `rotate(${angleIncrements}deg) translate(600px) rotate(-${angleIncrements}deg)`,
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
      <div className="skill-container">{renderSkills}</div>
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
        {/* <p>
          {Object.values(SKILLS).map((skill, i) => {
            return <h2 className='xp'>{skill.experience}<br />{skill.type}</h2>
          })}
        </p> */}
      </div>
    </div>
  )
}

export default Skills
