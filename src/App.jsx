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
        <br/>
        <hr className='border border-black dark:border-white length w-[90%] place-self-center'></hr>
        {/*<hr class="w-[85%] mx-auto h-1 bg-gradient-to-r from-blue-500/25 via-purple-500/25 to-pink-500/25 dark:from-pink-500/25 dark:via-purple-500/25 dark:to-blue-500/25 animate-gradientShift border-none rounded-full" />*/}

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
