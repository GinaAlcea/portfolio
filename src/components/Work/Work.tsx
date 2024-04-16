import { useNavigate } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { PROJECTS } from './Projects/Projects'
import './Work.scss'

export const Work = () => {
  const workArray = 'My work'.split('')
  let navigate = useNavigate()

  const delay = 100
  const duration = 1500
  const listAnimation = (i: number) =>
    `fadeIn ${duration}ms ${delay * i}ms backwards`

  const renderProjectsGrid = Object.entries(PROJECTS).map(([key, value], i) => {
    const handleProjectClick = () => {
      navigate(`/work/${key}`)
    }

    return (
      <div
        className={`project ${value.size}`}
        key={i}
        style={{ animation: listAnimation(i) }}
        onClick={handleProjectClick}
      >
        <div className="hover-name">
          <h1>{value.title}</h1>
          <h2>{value.subtitle}</h2>
        </div>
        <img className="project-img" src={value.image}/>
      </div>
    )
  })

  return (
    <>
      <div className="container work-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters strArray={workArray} index={1} />
          </h1>
          <h2> A quick look into the work I've done</h2>
        </div>
        <div className="work-grid">{renderProjectsGrid}</div>
      </div>
    </>
  )
}

export default Work
