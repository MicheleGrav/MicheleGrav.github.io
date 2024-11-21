import { DiTerminalBadge } from "react-icons/di";

const Navbar = () => {
    return (
        <nav className="mb-10 flex justify-between items-center p-3 bg-[rgba(255,255,255,0.2)] backdrop-blur-lg shadow-lg">
            <div className="flex items-center">
                <DiTerminalBadge className="h-11 w-11 hover:animate-pulse"/> 
            </div>

            <div>
                <ul className="flex items-center justify-between flex-nowrap gap-6 space-x-4 max-w-full">
                    <li className="cursor-pointer text-lg font-semibold text-gray-800 transition ease-in-out delay-75 bg-inherit hover:bg-slate500 duration300">
                        <a href="#home" className="p-3 rounded-xl hover:animate-pulse">Home</a>
                    </li>
                    <li className="text-lg font-semibold text-gray-800">
                        <a href="#stack" className="p-3 rounded-xl hover:animate-pulse">Tech Stack</a>
                    </li>
                    <li className="text-lg font-semibold text-gray-800">
                        <a href="#projects" className="p-3 rounded-xl hover:animate-pulse">Gallery / Edu</a>
                    </li>
                    <li className="text-lg font-semibold text-gray-800">
                        <a href="#contact" className="p-3 rounded-xl hover:animate-pulse">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;