import userLogo from '../assets/user-circle.svg';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Home = () => {
    return (
        <div id="home" className='flex justify-center animate-fadeIn mx-auto'>
            <div className=" flex flex-nowrap items-center justify-between h-[100%] w-[90%] bg-[rgba(255,255,255,0.2)] dark:bg-[rgba(63,63,63,0.51)] backdrop-blur-lg shadow-lg shadow-black/50 rounded-3xl p-10 gap-9">
                <div className=' animate-fadeIn delay-300 flex flex-col gap-5'>
                    <img src={userLogo} alt="user logo" className='h-[50px] sm:h-[200px] dark:invert dark:brightness-0 dark:contrast-200 transition-all duration-300 ease-in-out'></img>
                    <div className="flex items-center gap-2 dark:text-white text-sm sm:text-xl transition-all duration-300">
                        <FaLinkedin/> <p>placeholder</p>
                    </div>
                    <div className="flex items-center gap-2 dark:text-white text-sm sm:text-xl transition-all duration-300">
                        <FaGithub/> <p>placeholder</p>
                    </div>    
                </div>
                <div className=' flex flex-col items-end justify-center gap-3 w-'>
                    <div className="  flex flex-row items-end justify-center gap-2">
                        <span className='animate-wave origin-[70%_70%] text-lg'>👋</span>
                        <h1 className='font-bold text-nowrap text-sm sm:text-xl dark:text-white transition-all duration-300'>Hi, it's Michele</h1>
                    </div>
                    <p className=' self-end text-nowrap dark:text-white text-sm sm:text-xl transition-all duration-300'>IT Student</p>
                </div>
            </div>
        </div>
    );
};

export default Home;