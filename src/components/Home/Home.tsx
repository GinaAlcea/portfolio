import './Home.scss'
import DownloadIcon from '@mui/icons-material/Download'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const Home = () => {
  const nameArray = 'Gina Isaia'.split('')

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h2>Hi, I'm</h2>
        <h1>
          <AnimatedLetters strArray={nameArray} index={1} />
        </h1>
        <h2>frontend developer / ux/ui designer / personality hire</h2>
        <a
          className="button"
          href="../../assets/GinaIsaia_CV"
          download
          title="Download CV"
        >
          DOWNLOAD CV <DownloadIcon />
        </a>
      </div>
    </div>
  )
}

export default Home
