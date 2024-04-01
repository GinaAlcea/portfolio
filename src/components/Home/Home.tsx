import { Link } from 'react-router-dom'
import './Home.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import DownloadIcon from '@mui/icons-material/Download'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ' Gina Isaia'.split('')

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h2>Hi, I'm</h2>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            index={15}
          />
        </h1>
        <h2>frontend developer / ux/ui designer / personality hire</h2>
        {/* <Link className="flat-button" to="/contact"> */}
        <a
          className="download-button"
          href="../../assets/GinaIsaia_CV"
          download
          title="Download CV"
        >
          DOWNLOAD CV <DownloadIcon />
        </a>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default Home
