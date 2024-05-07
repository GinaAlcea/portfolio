import AnimatedLetters from '../../AnimatedLetters/AnimatedLetters'
import { PROJECTS } from './Projects'
import EgeriaLogo from '../../../asset/egeria-images/egeria-logo.png'
import Glossary from '../../../asset/egeria-images/glossary.png'
import Home from '../../../asset/egeria-images/home.png'
import Lineage from '../../../asset/egeria-images/lineage-graph.png'
import Details from '../../../asset/egeria-images/detail-page.png'
import Cards from '../../../asset/egeria-images/cards.png'

import './Projects.scss'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BackButton } from '../../Navigation/BackButton'

const EGERIA_IMAGES = {
  glossary: {
    src: Glossary,
    alt: 'glossary',
    desc: 'Designed the glossary viewer to show which glossaries are available in the metadata repository with a hierarchical drill-down functionality to find the information they contain (categories and terms).',
  },
  details: {
    src: Details,
    alt: 'detais page',
    desc: 'The glossary terms have their own dedicated page with all the information about them. I made sure all the information from the back end was displayed in a clear way.',
  },
  cards: {
    src: Cards,
    alt: 'card component',
    desc: 'Designed cards with information on uploaded lineage, they are searchable and filterable by multiple properties. They are also actionable as they contain information about the status of uploading and the kind of lineage that is being processed.',
  },
  lineage: {
    src: Lineage,
    alt: 'lineage graph',
    desc: 'Optimized mostly visual aspects like the action buttons in the graph, information/icons on the cards and unifying the style',
  },
}

const Egeria = () => {
  const projectArray = PROJECTS.egeria.title.split('')

  const delay = 100
  const duration = 1500
  const listAnimation = (i: number) =>
    `fadeIn ${duration}ms ${delay * i}ms backwards`

  const renderImages = Object.values(EGERIA_IMAGES).map((img, i) => {
    return (
      <div
        style={{ animation: listAnimation(i), marginBottom: '2rem' }}
        key={i}
      >
        <img className="project-img noselect" src={img.src} alt={img.alt} />
        <p>{` * ${img.desc}`}</p>
      </div>
    )
  })

  return (
    <>
      <div className="container project-page">
        <BackButton />
        <div className="header-content">
          <div className="text-zone">
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
              }}
            >
              <h1>
                <AnimatedLetters strArray={projectArray} index={1} />
              </h1>
              <a
                className="project-link"
                href={PROJECTS.egeria.link}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={EgeriaLogo}
                  alt="egeria project"
                />
              </a>
              <a
                className="project-link"
                href={PROJECTS.egeria.gh}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="2xl" />
              </a>
            </div>
            <h2>{PROJECTS.egeria.subtitle}</h2>
            <p>{PROJECTS.egeria.description}</p>
            <p>{PROJECTS.egeria.work}</p>
          </div>
          <img className="project-main" src={Home} alt="egeria homepage" />
        </div>
        <div className="project-img-group">{renderImages}</div>
      </div>
    </>
  )
}

export default Egeria
