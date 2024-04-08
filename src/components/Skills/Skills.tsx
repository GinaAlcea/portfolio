import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { Stack } from '@mui/material'
import SkillCard from './SkillGrid'
import './Skills.scss'

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
            for some fundamental subjects in the IT field: MySQL Fundamentals,
            Professional Scrum Master I, Professional Scrum Master II and Azure
            Fundamentals 900.
          </p>
          <p>
            While working in the field for almost 2 years I've experienced what
            it's like to work in an IT environment and be part of the
            development process. All while getting hands on experience with
            ReactJS, JavaScript, HTML5, (S)CSS, NPM, GitHub and libraries like
            Mui and Mantine.
          </p>
        </div>
        <SkillCard />
      </Stack>
    </div>
  )
}

export default Skills
