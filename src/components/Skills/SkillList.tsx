import {
  faReact,
  faJs,
  faGithub,
  faNpm,
  faHtml5,
  faCss3,
  faSass,
  faMicrosoft,
} from '@fortawesome/free-brands-svg-icons'
import logo3DSM from '../../asset/skills-images/logo3DSM.png'
import logoID from '../../asset/skills-images/logoID.png'
import logoPS from '../../asset/skills-images/logoPS.png'
import logoSCRUM from '../../asset/skills-images/logoSCRUM.svg'
import logoSQL from '../../asset/skills-images/logoSQL.svg'
import logoTS from '../../asset/skills-images/logoTS.png'

export const SKILLS = {
  ps: {
    name: 'PhotoShop',
    icon: logoPS,
    type: 'Recreationally',
    experience: '3+ years ',
  },
  id: {
    name: 'InDesign',
    icon: logoID,
    type: 'Recreationally',
    experience: '3+ years ',
  },
  dsm: {
    name: '3DS Max',
    icon: logo3DSM,
    type: 'Recreationally',
    experience: '2+ years ',
  },
  js: {
    name: 'JavaScript',
    icon: faJs,
    type: 'Hands-on professional experience',
    experience: '2+ years',
  },
  html: {
    name: 'HTML5',
    icon: faHtml5,
    type: 'Hands-on professional experience',
    experience: '2+ years',
  },
  css: {
    name: 'CSS3',
    icon: faCss3,
    type: 'Hands-on professional experience',
    experience: '2+ years',
  },
  scrum: {
    name: 'Scrum',
    icon: logoSCRUM,
    type: 'Hands-on professional experience',
    experience: '2+ years ',
  },
  react: {
    name: 'ReactJS',
    icon: faReact,
    type: 'Hands-on professional experience',
    experience: '2 years ',
  },
  npm: {
    name: 'NPM',
    icon: faNpm,
    type: 'Hands-on professional experience',
    experience: '2 years ',
  },
  gh: {
    name: 'GitHub',
    icon: faGithub,
    type: 'Hands-on professional experience',
    experience: '2 years ',
  },
  sass: {
    name: 'Sass',
    icon: faSass,
    type: 'Hands-on professional experience',
    experience: '2 years',
  },
  azure: {
    name: 'Azure',
    icon: faMicrosoft,
    type: 'Hands-on professional experience',
    experience: '2 years ',
  },
  sql: {
    name: 'MySQL',
    icon: logoSQL,
    type: 'Theoretical knowledge',
    experience: '< 1 year',
  },
  ts: {
    name: 'TypeScript',
    icon: logoTS,
    type: 'Recreationally',
    experience: '< 1 years',
  },
}
