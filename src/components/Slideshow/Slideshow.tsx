import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

interface Props {
  images: JSX.Element[]
}

export const Slideshow = ({ images }: Props) => {
  const [imageSelected, setImageSelected] = useState(0)

  const previousImage = () => {
    if (imageSelected === 0) {
      setImageSelected(images.length - 1)
    } else setImageSelected(imageSelected - 1)
  }

  const nextImage = () => {
    if (imageSelected === images.length - 1) {
      setImageSelected(0)
    } else setImageSelected(imageSelected + 1)
  }

  console.log(images)

  return (
    <div style={{ position: 'relative', display: 'flex' }}>
      <div style={{ display: 'flex', translate: `-${imageSelected * 100}%` }}>
        {images.map((img) => {
          return img
        })}
      </div>
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          top: 0,
          width: '100%',
          height: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <button className="slideshow-button" onClick={previousImage}>
          <FontAwesomeIcon icon={faAngleLeft} size="2xl" />
        </button>
        <button className="slideshow-button" onClick={nextImage}>
          <FontAwesomeIcon icon={faAngleRight} size="2xl" />
        </button>
      </div>
    </div>
  )
}
