import './AnimatedLetters.scss'

interface Props {
  letterClass: string
  strArray: Array<string>
  index: number
}

const AnimatedLetters = ({ letterClass, strArray, index }: Props) => {
  return (
    <span>
      {strArray.map((char: string, i: number) => (
        <span key={char + i} className={`${letterClass} _${i + index}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
