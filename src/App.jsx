import Navbar from './components/Navbar'
import Background from './components/Background'
import Home from './components/Home'
import Stack from './components/Stack'
import './index.css'

function App() {
  return (
    <div>
      <Background />

      <div className='max-w-full max-h-full mx-auto overflow-x-hidden'>
        <Navbar />
        <Home />
        <Stack />
      </div>
    </div>
  )
}

export default App
