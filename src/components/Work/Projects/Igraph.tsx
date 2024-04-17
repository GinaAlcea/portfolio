import AnimatedLetters from '../../AnimatedLetters/AnimatedLetters'
import './Projects.scss'
import { PROJECTS } from './Projects'
import homepageVid from '../../../asset/igraph-images/homepage-vid.mov'
import homepageMenu from '../../../asset/igraph-images/home-menu.png'
import graph from '../../../asset/igraph-images/graph.png'
import menu from '../../../asset/igraph-images/new-menu.png'
import stats from '../../../asset/igraph-images/stats-bars.png'
import stats2 from '../../../asset/igraph-images/stats-search.png'
import oldGraph from '../../../asset/igraph-images/old-graph.png'
import oldMenu from '../../../asset/igraph-images/old-graph.png'
import oldStats from '../../../asset/igraph-images/old-stats.png'
import oldStats2 from '../../../asset/igraph-images/old-stats2.png'
import mediumold from '../../../asset/igraph-images/mediumold.png'
import { useParams } from 'react-router-dom'

const NEW_IMAGES = {
  graph: { src: graph },
  home: { src: homepageMenu },
  stats: { src: stats },
  stats2: { src: stats2 },
  menu: { src: menu },
}

const OLD_IMAGES = {
  oldGraph: { src: oldGraph },
  // oldHome: { src: mediumold },
  oldStats2: { src: oldStats2 },
  oldStats: { src: oldStats },
  oldMenu: { src: oldMenu },
}

const Igraph = () => {
  const { project } = useParams()
  const projectArray = 'iGraph'.split('')

  // const imagePath = '../../../asset/igraph-images/'
  const oldImgs = Object.values(OLD_IMAGES).map((img) => img.src)

  const renderNewImages = Object.values(NEW_IMAGES).map((img, i) => {
    return (
      <div className="project-img" key={i}>
        <div>
          <img className="project-new-img" src={img.src} />
        </div>
        <div>
          <img className="project-old-img" src={oldImgs[i]} />
        </div>
      </div>
    )
  })

  return (
    <>
      <div className="container project-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters strArray={projectArray} index={1} />
          </h1>
          <h2>{PROJECTS.igraph.subtitle}</h2>
          <p>
            <i>
              Note: for confidentiality reasons all data represented is fake.
            </i>
          </p>
          <p>{PROJECTS.igraph.description}</p>
          <p>{PROJECTS.igraph.work}</p>
        </div>
        <div className="project-zone">
          <video
            className="project-video"
            src={homepageVid}
            autoPlay
            muted
            loop
          />
          {renderNewImages}
        </div>
      </div>
    </>
  )
}

export default Igraph
