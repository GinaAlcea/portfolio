import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Work.scss'

const Work = () => {
  const workArray = 'My work'.split('')

  return (
    <>
      <div className="container work-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters strArray={workArray} index={1} />
          </h1>
          <h2> A quick look into the work I've done</h2>
        </div>
      </div>
    </>
  )
}

export default Work
