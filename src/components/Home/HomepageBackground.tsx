import Particles, { initParticlesEngine } from '@tsparticles/react'
import { useEffect, useState } from 'react'
import { loadSlim } from '@tsparticles/slim'

const HomepageBackground = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      loadSlim(engine)
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
                },
              },
              modes: {
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
                enable: true,
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
                  max: 0.8,
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
