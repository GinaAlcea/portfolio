import { faAward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faJs,
  faGithub,
  faNpm,
  faHtml5,
  faCss3,
  faGlide,
  faSass,
  faMicrosoft,
} from '@fortawesome/free-brands-svg-icons'

const SkillCard = () => {
  // const CATEGORIES = {
  //   ho: { type: 'Hands-on professional experience' },
  //   rec: { type: 'Recreationally' },
  //   tk: { type: 'Theoretical knowledge' },
  // }

  const SKILLS = {
    ps: {
      name: 'PhotoShop',
      icon: faGlide,
      type: 'Recreationally',
      experience: '3+ years ',
    },
    id: {
      name: 'InDesign',
      icon: faGlide,
      type: 'Recreationally',
      experience: '3+ years ',
    },
    dsm: {
      name: '3DS Max',
      icon: faGlide,
      type: 'Recreationally',
      experience: '2+ years ',
    },
    js: {
      name: 'JavaScript',
      icon: faJs,
      type: 'Hands-on professional experience',
      experience: '2+ years',
    },
    html: {
      name: 'HTML5',
      icon: faHtml5,
      type: 'Hands-on professional experience',
      experience: '2+ years',
    },
    css: {
      name: 'CSS3',
      icon: faCss3,
      type: 'Hands-on professional experience',
      experience: '2+ years',
    },
    scrum: {
      name: 'Scrum',
      icon: faGlide,
      type: 'Hands-on professional experience',
      experience: '2+ years ',
    },
    react: {
      name: 'ReactJS',
      icon: faReact,
      type: 'Hands-on professional experience',
      experience: '2 years ',
    },
    npm: {
      name: 'NPM',
      icon: faNpm,
      type: 'Hands-on professional experience',
      experience: '2 years ',
    },
    gh: {
      name: 'GitHub',
      icon: faGithub,
      type: 'Hands-on professional experience',
      experience: '2 years ',
    },
    sass: {
      name: 'Sass',
      icon: faSass,
      type: 'Hands-on professional experience',
      experience: '2 years',
    },

    azure: {
      name: 'Azure',
      icon: faMicrosoft,
      type: 'Hands-on professional experience',
      experience: '2 years ',
    },
    sql: {
      name: 'MySQL',
      icon: faGlide,
      type: 'Theoretical knowledge',
      experience: '< 1 year',
    },
    ts: {
      name: 'TypeScript',
      icon: faGlide,
      type: 'Recreationally',
      experience: '< 1 years',
    },
  }

  // const cat1 = Object.values(SKILLS).filter((skill) => skill.type === 'Hands-on professional experience')
  // const cat2 = Object.values(SKILLS).filter((skill) => skill.type === 'Recreationally')
  // const cat3 = Object.values(SKILLS).filter((skill) => skill.type === 'Theoretical knowledge' )

  const delay = 100
  const duration = 1500
  const listAnimation = (i: number) =>
    `fadeIn ${duration}ms ${delay * i}ms backwards`

  const renderSkills = Object.values(SKILLS).map((skill, i) => {
    return (
      <div
        className="skill-group"
        key={i}
        style={{ animation: listAnimation(i) }}
      >
        <div className="skill-circle">
          <div className="hover-name">{skill.name}</div>
          <FontAwesomeIcon
            className="brand-icon"
            icon={skill.icon}
            title={skill.name}
            size="2xl"
          />
        </div>
        <div className="hover-experience">
          {skill.type} <br />
          {skill.experience}
        </div>
      </div>
    )
  })

  // console.log(cat1)

  return (
    <div className="skills-list">
      {renderSkills}
      {/* <div className="cat1">Hands-on professional experience{renderSkills}</div>
      <div className="cat2">Hands-on professional experience{renderSkills}</div>
      <div className="cat3">Hands-on professional experience{renderSkills}</div> */}
    </div>
  )
}
export default SkillCard
