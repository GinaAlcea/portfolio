import Particles, { initParticlesEngine } from '@tsparticles/react'
import { useEffect, useState } from 'react'
import { loadFull } from 'tsparticles' // if you are going to use `loadFull`, install the "tsparticles" package too.

const HomepageBackground = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          options={{
            autoPlay: true,
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: {
                  delay: 0.5,
                  enable: true,
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 50,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#ffffff',
                animation: {
                  h: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0,
                  },
                  s: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0,
                  },
                  l: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0,
                  },
                },
              },
              links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              number: {
                density: {
                  enable: false,
                  width: 1920,
                  height: 1080,
                },
                value: 80,
              },
              opacity: {
                value: {
                  min: 0.1,
                  max: 1,
                },
              },
              shape: {
                close: true,
                fill: true,
                options: {},
                type: 'diamond',
              },
              size: {
                value: 7,
                animation: {
                  enable: true,
                  speed: 12,
                  sync: false,
                  mode: 'auto',
                  startValue: 'random',
                  destroy: 'none',
                },
              },
              twinkle: {
                lines: {
                  enable: false,
                  frequency: 15,
                  opacity: 1,
                },
                particles: {
                  enable: true,
                  frequency: 8,
                  opacity: 1,
                },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  )
}

export default HomepageBackground
