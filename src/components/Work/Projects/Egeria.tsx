import AnimatedLetters from '../../AnimatedLetters/AnimatedLetters'
import { PROJECTS } from './Projects'
import { ImageSlider } from './ImageSlider'
import EgeriaLogo from '../../../asset/egeria-images/egeria-logo.png'
import Glossary from '../../../asset/egeria-images/glossary.png'
import Home from '../../../asset/egeria-images/home.png'
import Lineage from '../../../asset/egeria-images/lineage-graph.png'
import Details from '../../../asset/egeria-images/detail-page.png'
import Cards from '../../../asset/egeria-images/cards.png'

import './Projects.scss'
import { Link } from 'react-router-dom'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IMAGES = {
  glossary: {
    src: Glossary,
    alt: 'glossary',
    desc: '*Designed the glossary viewer to show which are available in the metadata repository and a hierarchical drill-down functionality to narrow down to find the information they contain (categories and terms).',
  },
  details: {
    src: Details,
    alt: 'detais page',
    desc: '*The glossary terms have their own dedicated page with all the information about them. I made sure all the information from the back end was displayed in a clear way.',
  },
  cards: {
    src: '',
    alt: 'card component',
    desc: '*Designed cards with information on uploaded lineage, they are searchable and filterable by multiple properties. They are also actionable as they contain information about the status of uploading and the kind of lineage that is being processed.',
  },
  lineage: {
    src: Lineage,
    alt: 'lineage graph',
    desc: '*Optimized mostly visual aspects like the action buttons in the graph, information/icons on the cards and unifying colors',
  },
}

const Egeria = () => {
  const projectArray = 'Egeria'.split('')

  const imgs = Object.values(IMAGES).map((img) => {
    return <img className="project-img noselect" src={img.src} alt={img.alt} />
  })

  return (
    <>
      <div className="container project-page">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div className="text-zone">
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}
            >
              <h1>
                <AnimatedLetters strArray={projectArray} index={1} />
              </h1>
              <a href={PROJECTS.egeria.gh} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2xl"
                  style={{ paddingLeft: '1rem' }}
                />
              </a>
              <a href={PROJECTS.egeria.link} target="_blank" rel="noreferrer">
                <img
                  src={EgeriaLogo}
                  alt="egeria project"
                  style={{
                    color: '#4d4d4e',
                    height: '30px',
                    paddingLeft: '0.5rem',
                    filter:
                      'invert(100%) sepia(100%) saturate(0%) hue-rotate(85deg) brightness(109%) contrast(101%)',
                  }}
                />
              </a>
            </div>
            <h2>{PROJECTS.egeria.subtitle}</h2>
            <p>{PROJECTS.egeria.description}</p>
            <p>{PROJECTS.egeria.work}</p>
          </div>
        </div>
        <img className="project-main" src={Home} alt="egeria homepage" />
        {imgs}
      </div>
    </>
  )
}

export default Egeria
