import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Body name={'Gina'} age={29} />
      <Footer />
    </div>
  )
}

export default App
