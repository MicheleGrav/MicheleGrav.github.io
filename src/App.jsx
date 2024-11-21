import Navbar from './components/Navbar'
import Background from './components/Background'
import Home from './components/Home'

function App() {
  return (
    <div>
      <Background />

      <div className='w-full mx-auto'>
        <Navbar />
        <Home />
      </div>
    </div>
  )
}

export default App
