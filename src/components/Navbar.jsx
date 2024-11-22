import { DiTerminalBadge } from "react-icons/di";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
    return (
        <nav className="mb-10 flex justify-between items-center p-3 bg-[rgba(255,255,255,0.2)] dark:bg-[rgba(63,63,63,0.51)] backdrop-blur-lg shadow-lg">
            {/* <div className="flex items-center">
                <DiTerminalBadge className="h-11 w-11 hover:animate-pulse"/> 
            </div>*/}
            <div>
                <ThemeToggleButton />
            </div>
            

            <div>
                <ul className="flex items-center justify-between gap-8 mx-auto max-w-full">
                    <li className="cursor-pointer text-lg font-semibold text-gray-800 transition ease-in-out delay-75 bg-inherit hover:bg-slate500 duration300">
                        <a href="#home" className="text-lg font-semibold text-gray-800 dark:text-white uppercase tracking-wide relative inline-block p-3 
                        after:content-[''] after:absolute after:bottom-0 after:right-[5%] after:w-[90%] after:h-[2px] after:bg-black dark:after:bg-white transition-colors duration-700 ease-in-out
                        after:transition-all after:duration-300 after:ease-in-out
                        hover:after:w-0 hover:after:left-[5%]">Home</a>
                    </li>
                    <li className="cursor-pointer text-lg font-semibold text-gray-800 transition ease-in-out delay-75 bg-inherit hover:bg-slate500 duration300">
                        <a href="#stack" className="text-lg font-semibold text-gray-800 dark:text-white uppercase tracking-wide relative inline-block p-3 
                        after:content-[''] after:absolute after:bottom-0 after:right-[5%] after:w-[90%] after:h-[2px] after:bg-black dark:after:bg-white transition-colors duration-700 ease-in-out
                        after:transition-all after:duration-300 after:ease-in-out
                        hover:after:w-0 hover:after:left-[5%] hover:animate-pulse">Tech Stack</a>
                    </li>
                    <li className="cursor-pointer text-lg font-semibold text-gray-800 transition ease-in-out delay-75 bg-inherit hover:bg-slate500 duration300">
                        <a href="#projects" className="text-lg font-semibold text-gray-800 dark:text-white uppercase tracking-wide relative inline-block p-3 
                        after:content-[''] after:absolute after:bottom-0 after:right-[5%] after:w-[90%] after:h-[2px] after:bg-black dark:after:bg-white transition-colors duration-700 ease-in-out
                        after:transition-all after:duration-300 after:ease-in-out
                        hover:after:w-0 hover:after:left-[5%] hover:animate-pulse">Gallery / Edu</a>
                    </li>
                    <li className="cursor-pointer text-lg font-semibold text-gray-800 transition ease-in-out delay-75 bg-inherit hover:bg-slate500 duration300">
                        <a href="#contact" className="text-lg font-semibold text-gray-800 dark:text-white uppercase tracking-wide relative inline-block p-3 
                        after:content-[''] after:absolute after:bottom-0 after:right-[5%] after:w-[90%] after:h-[2px] after:bg-black dark:after:bg-white transition-colors duration-700 ease-in-out
                        after:transition-all after:duration-300 after:ease-in-out
                        hover:after:w-0 hover:after:left-[5%] hover:animate-pulse">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;