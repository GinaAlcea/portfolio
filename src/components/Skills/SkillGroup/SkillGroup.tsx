import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SkillGroup.scss'

interface Props {
  value: any
}

const SkillGroup = ({ value }: Props) => {
  console.log(value.icon)
  const logo =
    typeof value.icon === 'object' ? (
      <FontAwesomeIcon
        className="brand-icon"
        icon={value.icon}
        title={value.name}
      />
    ) : (
      <img className="brand-icon" src={value.icon} alt={value.name} />
    )

  return (
    <div className="skill-group">
      <div className="skill-circle">
        <div className="hover-name">{value.name}</div>
        {logo}
      </div>
      <div className="hover-experience">
        {value.experience}
        <br />
        {value.type}
      </div>
    </div>
  )
}

export default SkillGroup
