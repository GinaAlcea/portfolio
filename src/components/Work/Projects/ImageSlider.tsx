import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react'

interface Img {
  src: string
  alt: string
}

interface OldImg {
  src: string
  alt: string
}

interface Props {
  img: Img
  oldImg: OldImg
}

export const ImageSlider = ({ img, oldImg }: Props) => {
  const [imageReveal, setImageReveal] = useState(0.5)

  const imageContainer = useRef<HTMLDivElement>(null)

  const slider = (xPosition: number): void => {
    if (imageContainer.current !== null) {
      const containerBoundingRect =
        imageContainer.current.getBoundingClientRect()
      setImageReveal(() => {
        if (xPosition < containerBoundingRect.left) {
          return 0
        } else if (xPosition > containerBoundingRect.right) {
          return 1
        } else {
          return (
            (xPosition - containerBoundingRect.left) /
            containerBoundingRect.width
          )
        }
      })
    }
  }

  const handleMouseDown = () => {
    window.onmousemove = handleMouseMove
    window.onmouseup = handleMouseUp
  }

  const handleMouseMove = (event: MouseEvent): void => {
    slider(event.clientX)
  }

  const handleMouseUp = () => {
    window.onmousemove = null
    window.onmouseup = null
  }

  return (
    <div className="project-img noselect" ref={imageContainer}>
      <img className="project-old-img" src={oldImg.src} alt={oldImg.alt} />
      <img
        className="project-new-img"
        src={img.src}
        alt={img.alt}
        style={{
          clipPath: `polygon(0 0, ${imageReveal * 100}% 0, ${imageReveal * 100}% 100%, 0 100%)`,
        }}
      />
      <div
        className="reveal-handler"
        style={{ top: 0, left: `${imageReveal * 100}%` }}
      >
        <div className="reveal-handler-relative">
          <div className="divider"></div>
          <div className="handle" onMouseDown={handleMouseDown}>
            <FontAwesomeIcon icon={faAngleLeft} />
            <FontAwesomeIcon icon={faAngleRight} />
            <div className="sonar-wave"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
