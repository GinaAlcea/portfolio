import { Link, Outlet } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Work.scss'

interface Projects {
  [index: number]: Project[]
}

interface Project {
  title: string
  image: string
  subtitle: string
  link?: string
  gh?: string
  description: string
  size: string
}

export const Work = ({ projects }: { projects: Projects }) => {
  const workArray = 'My work'.split('')

  const delay = 1000
  const duration = 1500
  const listAnimation = (i: number) =>
    `fadeIn ${duration}ms ${delay * i}ms backwards`

  const renderProjectsGrid = Object.entries(projects).map(([key, value], i) => {
    return (
      <Link className={`project ${value.size}`} to={`${key}`} key={key}>
        <div
          className="project-group"
          style={{
            animation: listAnimation(i),
          }}
        >
          <div className="hover-name">
            <h1>{value.title}</h1>
            <h2>{value.subtitle}</h2>
          </div>
          <img className="project-img" src={value.image} />
        </div>
      </Link>
    )
  })

  return (
    <>
      <div className="container work-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters strArray={workArray} index={1} />
          </h1>
          <h2> A look into the work I've done</h2>
        </div>
        <div
          className="work-grid"
          style={{ animation: `fadeIn 1.5s 1s backwards` }}
        >
          {renderProjectsGrid}
        </div>
        <Outlet />
      </div>
    </>
  )
}

export default Work
