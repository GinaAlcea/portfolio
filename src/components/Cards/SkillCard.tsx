import { faAward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Cards.scss'
import {
  faReact,
  faJs,
  faGithub,
  faNpm,
  faHtml5,
  faCss3,
  faGlide,
} from '@fortawesome/free-brands-svg-icons'

const SkillCard = () => {
  const SKILLS = {
    js: { name: 'JavaScript', icon: faJs, experience: '2 years' },
    react: { name: 'ReactJS', icon: faReact, experience: '2 years' },
    html: { name: 'HTML5', icon: faHtml5, experience: '2 years' },
    css: { name: 'CSS3', icon: faCss3, experience: '2 years' },
    npm: { name: 'NPM', icon: faNpm, experience: '2 years' },
    gh: { name: 'GitHub', icon: faGithub, experience: '111 years' },
    ts: { name: 'TypeScript', icon: faGlide, experience: '2 years' },
    sass: { name: 'Sass', icon: faGlide, experience: '2 years' },
    ps: { name: 'PhotoShop', icon: faGlide, experience: '2321 years' },
    id: { name: 'InDesign', icon: faGlide, experience: '2432 years' },
  }

  const renderSkills = Object.values(SKILLS).map((skill, i) => {
    return (
      <div className="skill-group">
        <div className="skill-circle">
          <div className="hover-name">{skill.name}</div>
          <FontAwesomeIcon
            className="brand-icon"
            icon={skill.icon}
            title={skill.name}
            size="2xl"
          />
        </div>
        <div className="hover-experience">{skill.experience}</div>
      </div>
    )
  })

  return <div className="skills-list">{renderSkills}</div>
}
export default SkillCard
