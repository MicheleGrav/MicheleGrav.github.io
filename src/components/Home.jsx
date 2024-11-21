import userLogo from '../assets/user-circle.svg';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Home = () => {
    return (
        <div className='flex justify-center '>
            <div className="flex flex-wrap justify-between h-[100%] w-[80%] bg-[rgba(255,255,255,0.2)] backdrop-blur-lg shadow-lg shadow-black/50 rounded-3xl p-10">
                <div className='flex flex-col gap-5 mr-5 ml-5'>
                    <img src={userLogo} alt="user logo" className='h-[200px]'></img>
                    <div className="flex items-center gap-2">
                        <FaLinkedin/> <p>placeholder</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaGithub/> <p>placeholder</p>
                    </div>    
                </div>
                <div className='flex flex-col align-center justify-center gap-3'>
                    <div className="flex flex-row items-center justify-center gap-3">
                        <span className='animate-wave text-3xl'>👋</span>
                        <h1 className='font-bold text-xl'>Hi, it's Michele</h1>
                    </div>
                    <p className='self-end'>IT student</p>
                </div>
            </div>
        </div>
    );
};

export default Home;