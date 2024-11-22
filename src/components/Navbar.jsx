import { DiTerminalBadge } from "react-icons/di";

const Navbar = () => {
    return (
        <nav className="mb-10 flex justify-between items-center p-3 bg-[rgba(255,255,255,0.2)] backdrop-blur-lg shadow-lg">
            <div className="flex items-center">
                <DiTerminalBadge className="h-11 w-11 hover:animate-pulse"/> 
            </div>

            <div>
                <ul className="flex items-center justify-between gap-8 mx-auto max-w-full">
                    <li className="cursor-pointer text-lg font-semibold text-gray-800 transition ease-in-out delay-75 bg-inherit hover:bg-slate500 duration300">
                        <a href="#home" className="text-lg font-semibold text-gray-800 uppercase tracking-wide relative inline-block p-3 
                        after:content-[''] after:absolute after:bottom-0 after:right-[10%] after:w-[80%] after:h-[2px] after:bg-black
                        after:transition-all after:duration-300 after:ease-in-out
                        hover:after:w-0 hover:after:left-[10%]">Home</a>
                    </li>
                    <li className="text-lg font-semibold text-gray-800 uppercase tracking-wide relative inline-block p-3 
                        after:content-[''] after:absolute after:bottom-0 after:right-[10%] after:w-[80%] after:h-[2px] after:bg-black
                        after:transition-all after:duration-300 after:ease-in-out
                        hover:after:w-0 hover:after:left-[10%]">
                        <a href="#stack" className="p-3 rounded-xl hover:animate-pulse">Tech Stack</a>
                    </li>
                    <li className="text-lg font-semibold text-gray-800 uppercase tracking-wide relative inline-block p-3 
                        after:content-[''] after:absolute after:bottom-0 after:right-[10%] after:w-[80%] after:h-[2px] after:bg-black
                        after:transition-all after:duration-300 after:ease-in-out
                        hover:after:w-0 hover:after:left-[10%]">
                        <a href="#projects" className="p-3 rounded-xl hover:animate-pulse">Gallery / Edu</a>
                    </li>
                    <li className="text-lg font-semibold text-gray-800 uppercase tracking-wide relative inline-block p-3 
                        after:content-[''] after:absolute after:bottom-0 after:right-[10%] after:w-[80%] after:h-[2px] after:bg-black
                        after:transition-all after:duration-300 after:ease-in-out
                        hover:after:w-0 hover:after:left-[10%]">
                        <a href="#contact" className="p-3 rounded-xl hover:animate-pulse">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;