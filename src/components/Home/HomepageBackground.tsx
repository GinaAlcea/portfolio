import Particles, { initParticlesEngine } from '@tsparticles/react'
import { useEffect, useState } from 'react'
import { loadFull } from 'tsparticles' // if you are going to use `loadFull`, install the "tsparticles" package too.

const HomepageBackground = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
     loadFull(engine)
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
            fullScreen: {
              enable: true,
            },
            detectRetina: true,
            fpsLimit: 90,
            interactivity: {
              detectsOn: 'canvas',
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                  parallax: {
                    enable: false,
                    force: 10,
                    smooth: 5,
                  },
                },
              },
              modes: {
                attract: {
                  distance: 50,
                  duration: 0.4,
                  speed: 1,
                },
                bounce: {
                  distance: 40,
                },
                bubble: {
                  distance: 50,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                remove: {
                  quantity: 2,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                  speed: 1,
                },
                slow: {
                  factor: 3,
                  radius: 200,
                },
              },
            },
            particles: {
              color: {
                value: '#efeeee',
              },
              move: {
                angle: {
                  offset: 45,
                  value: 90,
                },
                attract: {
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
                enable: true,
                gravity: {
                  acceleration: 9.81,
                  enable: false,
                  maxSpeed: 50,
                },
                speed: 0.05,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 300,
              },
              opacity: {
                value: {
                  min: 0.1,
                  max: 0.5,
                },
                animation: {
                  count: 0,
                  enable: true,
                  speed: 0.1,
                  sync: false,
                  destroy: 'none',
                  startValue: 'random',
                },
              },
              reduceDuplicates: false,
              shape: {
                options: {},
                type: 'circle',
              },
              size: {
                value: {
                  min: 0.1,
                  max: 2,
                },
                animation: {
                  count: 0,
                  enable: true,
                  speed: 5,
                  sync: false,
                  destroy: 'none',
                  startValue: 'random',
                },
              },
              twinkle: {
                particles: {
                  enable: false,
                  frequency: 5,
                  opacity: 1,
                  color: {
                    value: '#ffff00',
                  },
                },
              },
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true,
          }}
        />
      )}
    </>
  )
}

export default HomepageBackground
