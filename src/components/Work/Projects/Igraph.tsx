import AnimatedLetters from '../../AnimatedLetters/AnimatedLetters'
import './Projects.scss'
import { PROJECTS } from './Projects'

import homepageVid from '../../../asset/igraph-images/homepage-vid.mov'
import homepageMenu from '../../../asset/igraph-images/home-menu.png'
import graph from '../../../asset/igraph-images/graph.png'
import menu from '../../../asset/igraph-images/new-menu.png'
import stats from '../../../asset/igraph-images/stats-bars.png'
import oldGraph from '../../../asset/igraph-images/old-graph.png'
import oldMenu from '../../../asset/igraph-images/old-graph.png'
import oldStats from '../../../asset/igraph-images/old-stats.png'
import emptyCharts from '../../../asset/igraph-images/empty-charts.png'
import oldEmptyCharts from '../../../asset/igraph-images/old-empty-charts.png'
import { useParams } from 'react-router-dom'
import { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const NEW_IMAGES = {
  graph: { src: graph },
  home: { src: homepageMenu },
  stats: { src: stats },
  emptyCharts: { src: emptyCharts },
  menu: { src: menu },
}

const OLD_IMAGES = {
  oldGraph: { src: oldGraph },
  oldHome: { src: oldGraph },
  oldStats: { src: oldStats },
  oldEmptyCharts: { src: oldEmptyCharts },
  oldMenu: { src: oldMenu },
}

const Igraph = () => {
  // const { project } = useParams()
  const projectArray = 'iGraph'.split('')
  const [imageReveal, setImageReveal] = useState(0.5)
  const imageContainer = useRef<HTMLDivElement>(null)

  const slider = (xPosition: number): void => {
    if (imageContainer.current !== null) {
      const containerBoundingRect =
        imageContainer.current.getBoundingClientRect()
      setImageReveal(() => {
        if (xPosition < containerBoundingRect.left) {
          return 0
        } else if (xPosition > containerBoundingRect.right) {
          return 1
        } else {
          return (
            (xPosition - containerBoundingRect.left) /
            containerBoundingRect.width
          )
        }
      })
    }
  }

  const handleMouseDown = () => {
    window.onmousemove = handleMouseMove
    window.onmouseup = handleMouseUp
  }

  const handleMouseMove = (event: MouseEvent): void => {
    slider(event.clientX)
  }

  const handleMouseUp = () => {
    window.onmousemove = null
    window.onmouseup = null
  }
  const oldImgs = Object.values(OLD_IMAGES).map((img) => img.src)

  const renderNewImages = Object.values(NEW_IMAGES).map((img, i) => {
    return (
      <div className="project-img noselect" ref={imageContainer} key={i}>
        <img className="project-old-img" src={oldImgs[i]} />
        <img
          className="project-new-img"
          src={img.src}
          style={{
            clipPath: `polygon(0 0, ${imageReveal * 100}% 0, ${imageReveal * 100}% 100%, 0 100%)`,
          }}
        />
        <div
          className="reveal-handler"
          style={{ top: 0, left: `${imageReveal * 100}%` }}
        >
          <div className="reveal-handler-relative">
            <div className="divider"></div>
            <div className="handle" onMouseDown={handleMouseDown}>
              <FontAwesomeIcon icon={faAngleLeft} />
              <FontAwesomeIcon icon={faAngleRight} />
              <div className="sonar-wave"></div>
            </div>
          </div>
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
