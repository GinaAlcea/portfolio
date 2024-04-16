import igraph from '../../../asset/igraphCover.svg'

interface Project {
  title: string
  image: string
  subtitle: string
  link?: string
  gh?: string
  description: string
  size: string
}

export const PROJECTS = {
  igraph: {
    title: 'iGraph',
    image: `${igraph}`,
    subtitle: 'UI/UX Design / ReactJS / Data Visualization',
    link: '',
    gh: '',
    description:
      'iGraph is an ING internal project. It tries to combine and visualize several important IT data sources using state-of-the-art graph database technologies. This enables the user to quickly visualize application dependencies, find responsible teams/people, observe an entire application landscape or see what application is subscribed to different APIs. ',
    size: 'medium',
  },
  egeria: {
    title: 'Egeria',
    image: '../../../asset/igraphCover.svg',
    subtitle: 'UI Design / ReactJS ',
    link: 'https://egeria-project.org/',
    gh: 'https://github.com/odpi/egeria',
    description:
      'Egeria is an open source project dedicated to enabling teams to collaborate by making metadata open and automatically exchanged between tools and platforms, no matter which vendor they come from',
    size: 'large',
  },
  mobiliteit: {
    title: 'Routes naar Mobiliteit',
    image: '../../../asset/igraphCover.svg',
    subtitle: 'UI/UX Design / Axure',
    link: '',
    gh: '',
    description: '',
    size: 'small',
  },
}
