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
import RoutesnaarM from './components/Work/Projects/RoutesnaarM'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="work" element={<Work />}>
            <Route path="work/egeria" element={<Egeria />} />
            <Route path="work/mobiliteit" element={<RoutesnaarM />} />
          </Route>
           <Route path="igraph" element={<Igraph />} />

          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
