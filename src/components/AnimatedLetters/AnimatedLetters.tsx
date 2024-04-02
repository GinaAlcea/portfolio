import './AnimatedLetters.scss'

interface Props {
  strArray: Array<string>
  index: number
}

const AnimatedLetters = ({ strArray, index }: Props) => {
  return (
    <span>
      {strArray.map((char: string, i: number) => (
        <span
          key={char + i}
          className={`text-animate
        _${i + index}`}
        >
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
