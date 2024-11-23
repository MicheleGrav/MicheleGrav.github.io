import { DiTerminalBadge } from "react-icons/di";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
    return (
        <nav id="navbar" className="mb-10 flex nowrap justify-between items-center gap-[5rem] max-w-full p-3 bg-[rgba(255,255,255,0.2)] dark:bg-[rgba(63,63,63,0.51)] backdrop-blur-lg shadow-md">
            { /* Previous logo / theme switcher */
            /* <div className="flex items-center">
                <DiTerminalBadge className="h-11 w-11 hover:animate-pulse"/> 
            </div>*/
            }
            <div>
                <ThemeToggleButton />
            </div>
            

            <div>
                <ul className="flex items-center justify-around gap-5 max-w-full">
                    <li className="cursor-pointer font-semibold text-black transition ease-in-out delay-75 bg-inherit hover:bg-slate500 duration300">
                        <a href="#stack"className="block sm:hidden text-sm text-nowrap md:text-lg font-semibold text-black dark:text-white uppercase tracking-wide relative inline-block p-3 
                        after:content-[''] after:absolute after:bottom-0 after:right-[5%] after:w-[90%] after:h-[2px] after:bg-black dark:after:bg-white transition-colors duration-700 ease-in-out
                        after:transition-all after:duration-300 after:ease-in-out
                        hover:after:w-0 hover:after:left-[5%]">Stack</a>
                        <a href="" className="hidden sm:block text-sm text-nowrap sm:text-lg font-semibold text-black dark:text-white uppercase tracking-wide relative inline-block p-3 
                        after:content-[''] after:absolute after:bottom-0 after:right-[5%] after:w-[90%] after:h-[2px] after:bg-black dark:after:bg-white transition-colors duration-700 ease-in-out
                        after:transition-all after:duration-300 after:ease-in-out
                        hover:after:w-0 hover:after:left-[5%]
                        focus:after:w-[90%] focus:after:right-[5%]">Tech Stack</a>
                    </li>
                    <li className="cursor-pointer text-lg font-semibold text-black transition ease-in-out delay-75 bg-inherit hover:bg-slate500 duration300">
                        <a href="" className="block sm:hidden text-sm text-nowrap md:text-lg font-semibold text-black dark:text-white uppercase tracking-wide relative inline-block p-3 
                        after:content-[''] after:absolute after:bottom-0 after:right-[5%] after:w-[90%] after:h-[2px] after:bg-black dark:after:bg-white transition-colors duration-700 ease-in-out
                        after:transition-all after:duration-300 after:ease-in-out
                        hover:after:w-0 hover:after:left-[5%]">Gallery</a>
                        <a href="#projects" className="hidden sm:block text-sm text-nowrap sm:text-lg font-semibold text-black dark:text-white uppercase tracking-wide relative inline-block p-3 
                        after:content-[''] after:absolute after:bottom-0 after:right-[5%] after:w-[90%] after:h-[2px] after:bg-black dark:after:bg-white transition-colors duration-700 ease-in-out
                        after:transition-all after:duration-300 after:ease-in-out
                        hover:after:w-0 hover:after:left-[5%]">Gallery / Edu</a>
                    </li>
                    <li className="cursor-pointer text-lg font-semibold text-black transition ease-in-out delay-75 bg-inherit hover:bg-slate500 duration300">
                        <a href="" className="block sm:hidden text-sm text-nowrap md:text-lg font-semibold text-black dark:text-white uppercase tracking-wide relative inline-block p-3 
                        after:content-[''] after:absolute after:bottom-0 after:right-[5%] after:w-[90%] after:h-[2px] after:bg-black dark:after:bg-white transition-colors duration-700 ease-in-out
                        after:transition-all after:duration-300 after:ease-in-out
                        hover:after:w-0 hover:after:left-[5%]">Contact</a>
                        <a href="#contact" className="hidden sm:block text-nowrap text-lg font-semibold text-black dark:text-white uppercase tracking-wide relative inline-block p-3 
                        after:content-[''] after:absolute after:bottom-0 after:right-[5%] after:w-[90%] after:h-[2px] after:bg-black dark:after:bg-white transition-colors duration-700 ease-in-out
                        after:transition-all after:duration-300 after:ease-in-out
                        hover:after:w-0 hover:after:left-[5%]">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;