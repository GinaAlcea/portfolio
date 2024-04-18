import { Link, useParams, Routes, Route, Outlet } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
// import { PROJECTS } from './Projects/Projects'
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

  const delay = 100
  const duration = 1500
  const listAnimation = (i: number) =>
    `fadeIn ${duration}ms ${delay * i}ms backwards`

  const renderProjectsGrid = Object.entries(projects).map(([key, value], i) => {
    return (
      <Link className={`project ${value.size}`} to={`${key}`} key={key}>
        <div
          style={{
            animation: listAnimation(i),
            display: 'flex',
            justifyContent: 'center',
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
          <h2> A quick look into the work I've done</h2>
        </div>
        <div className="work-grid">{renderProjectsGrid}</div>
        <Outlet />
      </div>
    </>
  )
}

export default Work
