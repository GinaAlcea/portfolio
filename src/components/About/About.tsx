import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './About.scss'

const About = () => {
  const aboutArray = 'About me'.split('')

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters strArray={aboutArray} index={1} />
        </h1>
        <h2>creative / enthusiastic / adaptive</h2>
        <p>
          I would describe myself as someone who tries to find balance in
          everything she does. I like to create pretty things that look nice -
          but they need to serve a purpose too. I like to go out and explore the
          world - but I also find so much peace in the places and people I know.
          For me, as long as everything is in balance I feel perfectly in place.
        </p>
        <p>
          However, that doesn't mean that I'm afraid to change things up! In
          2022 I decided to change careers and went from assistent-manager in an
          Irish pub to an IT trainee, and I've loved every moment of it so far.
          My colleagues would add that I bring a breath of fresh air as I try to
          balance work with fun, while maintaining a positive but realistic
          view. I take their opinions to heart while trying to create the best
          result possible.
          {/*
            I
            like learning new things, meeting new people and trying things I
            haven't tried before. I'm very eager to explore new subjects to form
            new opinions by myself, but I also appreciate people who share their
            experiences and show me their view on these subjects.
          </p>
          <p>
            A good example of how much I like to learn new things: in 2022 in
            decided to change careers and went from assistent-manager in an
            Irish pub to an IT trainee, and I've loved every moment of it so
            far! */}
        </p>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <div className="sun">
          <div className="moon"></div>
        </div>
      </div>
    </div>
  )
}

export default About
