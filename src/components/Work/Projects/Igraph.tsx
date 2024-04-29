import AnimatedLetters from '../../AnimatedLetters/AnimatedLetters'
import { PROJECTS } from './Projects'
import { ImageSlider } from './ImageSlider'

import homepageVid from '../../../asset/igraph-images/homepage-vid.mov'
import homepageMenu from '../../../asset/igraph-images/home-menu.png'
import graph from '../../../asset/igraph-images/graph.png'
import stats from '../../../asset/igraph-images/stats-bars.png'
import oldGraph from '../../../asset/igraph-images/old-graph.png'
import oldStats from '../../../asset/igraph-images/old-stats.png'
import emptyCharts from '../../../asset/igraph-images/empty-charts.png'
import oldEmptyCharts from '../../../asset/igraph-images/old-empty-charts.png'
import './Projects.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const NEW_IMAGES = {
  home: {
    src: homepageMenu,
    alt: 'new-ui-home',
    desc: 'Introduced search bar for more natural way of searching, users do not have to know where the data is located to find it. No more subtabs when using the graph database.',
  },
  graph: {
    src: graph,
    alt: 'new-ui-graph',
    desc: 'Cleaned up graph overview; search options are elevated to search bar instead of on-screen with graph. All graph actions moved into uniform action bar. Graph view itself clearer and less crowded.',
  },
  stats: {
    src: stats,
    alt: 'new-ui-stats',
    desc: 'Added new types of charts to fit the data, and optimized their functionalities. Proportioned the visualization of data and added tabs instead of scrollbar for clearer navigation. ',
  },
  emptyCharts: {
    src: emptyCharts,
    alt: 'new-ui-placeholders',
    desc: 'Added empty charts to visualize expectation for users',
  },
}

const OLD_IMAGES = {
  oldHome: { src: oldGraph, alt: 'old-ui-home' },
  oldGraph: { src: oldGraph, alt: 'old-ui-graph' },
  oldStats: { src: oldStats, alt: 'old-ui-stats' },
  oldEmptyCharts: { src: oldEmptyCharts, alt: 'old-ui-placeholders' },
}

const Igraph = () => {
  // const [imageSelected, setImageSelected] = useState(0)
  const projectArray = 'iGraph'.split('')

  const oldImgs = Object.values(OLD_IMAGES).map((img) => img)

  const renderNewImages = Object.values(NEW_IMAGES).map((img, i) => {
    return (
      <>
        <ImageSlider img={img} oldImg={oldImgs[i]} key={i} />
        <p>{` * ${img.desc}`}</p>
      </>
    )
  })

  console.log(renderNewImages)

  return (
    <>
      <div className="container project-page">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div className="text-zone">
            <h1>
              <AnimatedLetters strArray={projectArray} index={1} />
            </h1>
            <h2>{PROJECTS.igraph.subtitle}</h2>

            <i>
              Note: for confidentiality reasons all data represented is fake.
            </i>

            <p>{PROJECTS.igraph.description}</p>
            <p>{PROJECTS.igraph.work}</p>
          </div>
          <video
            className="project-main"
            src={homepageVid}
            autoPlay
            muted
            loop
          />
        </div>
        {renderNewImages}
      </div>
    </>
  )
}

export default Igraph
