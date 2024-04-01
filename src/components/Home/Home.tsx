import { Link } from 'react-router-dom'
import './Home.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = 'Gina'.split('')
  const jobArray = 'Frontend engineer'.split('')

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            index={15}
          />
          <br />
          front-end engineer
        </h1>
        <h2>frontend developer / ux designer / personality hire</h2>
        <Link className="flat-button" to="/contact">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
