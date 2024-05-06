const randomInteger = (min: number, max: number) => {
  return Math.ceil(Math.random() * (max - min + 1) + min)
}

const randomDecimal = (min: number, max: number) => {
  return Math.random() * (max - min + 1) + min
}

export const generateShootingStars = (
  starsContainer: string,
  numStars: number
) => {
  for (let i = 0; i < numStars; i++) {
    createShootingStars(starsContainer)
  }
}

const createShootingStars = (starsContainer: string) => {
  const container = document.getElementById(starsContainer)

  if (container) {
    const div = document.createElement('div')
    div.className = 'shooting-star'

    div.style.top = `${randomInteger(0, 75)}%`
    div.style.left = `${randomInteger(50, 100)}%`

    div.style.height = `${randomInteger(0, 4)}px`
    div.style.width = div.style.height

    div.style.animationDelay = `${randomDecimal(0, 3.5)}s`
    div.style.animationDuration = `${randomDecimal(1.5, 3)}s`

    container.appendChild(div)
  }
}
