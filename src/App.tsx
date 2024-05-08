import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Work from './components/Work/Work'
import Skills from './components/Skills/Skills'
import Egeria from './components/Work/Projects/Egeria'
import Igraph from './components/Work/Projects/Igraph'
import { PROJECTS } from './components/Work/Projects/Projects'
import { useEffect } from 'react'
import NotFound from './components/NotFound/NotFound'

function App() {
  useEffect(() => {
    const adjustPadding = () => {
      const browserUIHeight =
        window.innerHeight - document.documentElement.clientHeight
      const appElement = document.querySelector<HTMLElement>('.App')
      if (appElement) {
        appElement.style.paddingTop = browserUIHeight + 'px'
      }
    }

    adjustPadding()
    window.addEventListener('resize', adjustPadding)

    return () => {
      window.removeEventListener('resize', adjustPadding)
    }
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="work" element={<Work projects={PROJECTS} />} />
          <Route path="work/igraph" element={<Igraph />} />
          <Route path="work/egeria" element={<Egeria />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
