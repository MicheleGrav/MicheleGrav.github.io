import Navbar from './components/Navbar'
import Background from './components/Background'
import Home from './components/Home'
import Stack from './components/Stack'
import GalleryScroll from './components/GalleryScroll'
import GalleryFlip from './components/GalleryFlip'
import './index.css'

function App() {

  const images = [
    "./src/assets/img1.jpg",
    "./src/assets/img2.jpg",
    "./src/assets/img3.jpg",
    "./src/assets/img4.jpg",
    "./src/assets/img5.jpg",
    "./src/assets/img6.jpg",
    "./src/assets/img1.jpg",
    "./src/assets/img2.jpg",
    "./src/assets/img3.jpg",
    "./src/assets/img4.jpg",
    "./src/assets/img5.jpg",
    "./src/assets/img6.jpg",
  ];

  const words = ["Gallery", "Education"];

  return (
    <div>
      <Background />

      <div className='max-w-full max-h-full mx-auto overflow-x-hidden'>
        <Navbar />
        <Home />
        <Stack />

        <div className="flex justify-center text-3xl items-center px-4 mt-10">
          <GalleryFlip words={words} />
        </div>
        <GalleryScroll images={images}/>
        <br />
      </div>
    </div>
  )
}

export default App
