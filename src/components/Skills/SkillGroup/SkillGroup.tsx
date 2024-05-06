import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SkillGroup.scss'
import { IconDefinition, faStar } from '@fortawesome/free-solid-svg-icons'

interface Skill {
  name: string
  icon: string | IconDefinition
  type: string
  experience: string
  certificate?: boolean
}

const SkillGroup = ({ skill }: { skill: Skill }) => {
  const logo =
    typeof skill.icon === 'object' ? (
      <FontAwesomeIcon
        className="brand-icon"
        icon={skill.icon}
        title={skill.name}
      />
    ) : (
      <img className="brand-icon" src={skill.icon} alt={skill.name} />
    )

  return (
    <div className="skill-group">
      <div className="skill-circle">
        {skill.certificate && (
          <FontAwesomeIcon
            icon={faStar}
            size="2xl"
            className="certificate-icon"
          />
        )}
        <div className="hover-name">{skill.name}</div>
        {logo}
      </div>
      <div className="hover-experience">
        {skill.experience}
        <br />
        {skill.type}
      </div>
    </div>
  )
}

export default SkillGroup
