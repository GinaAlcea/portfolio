import AnimatedLetters from '../../AnimatedLetters/AnimatedLetters'
import '../Work.scss'
import { PROJECTS } from './Projects'

const Igraph = () => {
  const projectArray = 'iGraph'.split('')
  const images = [
    <img src={} />,
    <img src={} />,
    <img src={} />,
    <img src={} />,
  ]

  return (
    <>
      <div className="container work-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters strArray={projectArray} index={1} />
          </h1>
          <h2>{PROJECTS.igraph.subtitle}</h2>
          <p>Note: for confidentiality reasons all data represented is fake</p>
          <p>{PROJECTS.igraph.description}</p>
        </div>
      </div>
    </>
  )
}

export default Igraph
