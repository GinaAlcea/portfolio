import igraph from '../../../asset/igraphCover.svg'
import egeria from '../../../asset/EgeriaCover.svg'

export const PROJECTS = {
  igraph: {
    title: 'iGraph',
    image: `${igraph}`,
    subtitle: 'UI/UX Design / ReactJS / Data Visualization',
    description:
      'iGraph is an ING internal project. It tries to combine and visualize several important IT data sources using state-of-the-art graph database technologies. This enables the user to quickly visualize application dependencies, find responsible teams/people, observe an entire application landscape or see what application is subscribed to different APIs. ',
    work: 'I reworked components to be clearer, more stream lined and more intuitive for our users. By interviewing and involving them during this design process it became clear that our UI was not fitting their needs as they wanted to read less and be able to use iGraph without knowing exactly where to find their answers. I made it my goal to make sure their needs were met in the new UI by making the components more visual and the flow more natural. ',
    size: 'medium',
  },
  egeria: {
    title: 'Egeria',
    image: `${egeria}`,
    subtitle: 'UI Design / ReactJS ',
    link: 'https://egeria-project.org/',
    gh: 'https://github.com/odpi/egeria',
    description:
      'Egeria is an open source project dedicated to enabling teams to collaborate by making metadata open and automatically exchanged between tools and platforms, no matter which vendor they come from.',
    work: 'I worked on designing the general user UI. I wanted this UI to have a uniform style throughout the project, so I used an external library with styled components to make the UI look and feel clean and to the point. The UI offers a search function, and the ability to view assets, glossaries and lineage. I mostly worked on the look and functionality of the glossary view and optimizations on the lineage graph viewer. I have also documented in detail how to use this UI on their website',
    size: 'medium',
  },
}
