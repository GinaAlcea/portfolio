import { useNavigate } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Work.scss'

const Work = () => {
  const workArray = 'My work'.split('')
  let navigate = useNavigate()

  const PROJECTS = {
    egeria: {
      title: 'Egeria',
      image: 'img1',
      subtitle: 'UI Design / ReactJS ',
      link: 'https://egeria-project.org/',
      gh: 'https://github.com/odpi/egeria',
      description:
        'Egeria is an open source project dedicated to enabling teams to collaborate by making metadata open and automatically exchanged between tools and platforms, no matter which vendor they come from',
      size: 'medium',
    },
    iGraph: {
      title: 'iGraph',
      image: 'img2',
      subtitle: 'UI/UX Design / ReactJS / Data Visualization',
      link: '',
      gh: '',
      description:
        'iGraph is an ING internal project. It tries to combine and visualize several important IT data sources using state-of-the-art graph database technologies. This enables you to quickly visualize application dependencies, find responsible teams/people, observe an entire application landscape or see what application is subscribed to different APIs. ',
      size: 'large',
    },
    mobiliteit: {
      title: 'Routes naar Mobiliteit',
      image: 'img3',
      subtitle: 'UI/UX Design / Axure',
      link: '',
      gh: '',
      description: '',
      size: 'small',
    },
  }

  const delay = 100
  const duration = 1500
  const listAnimation = (i: number) =>
    `fadeIn ${duration}ms ${delay * i}ms backwards`

  const renderProjectsGrid = Object.values(PROJECTS).map((project, i) => {
    const handleProjectClick = () => {
      let path = `${project.title}`
      navigate(path)
    }

    return (
      <div
        className={`project ${project.size}`}
        key={i}
        style={{ animation: listAnimation(i) }}
        onClick={handleProjectClick}
      >
        <div className="hover-name">
          <h1>{project.title}</h1>
          <h2>{project.subtitle}</h2>
        </div>
        <img src={project.image} />
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
