import React from 'react';

const Background = () => {
    return (
        <div className="fixed top-0 -z-10 h-full w-full bg-white dark:bg-black transition-colors duration-700 ease-in-out overflow-hidden">
            {/* Magenta gradient */}
            <div class="absolute bottom-auto left-auto right-[-10vw] top-[-30vh] h-[600px] w-[600px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.3)] opacity-200 blur-[80px] animate-moveGradient1">
            </div>
            {/* Cyan gradient */}
            <div class="absolute bottom-[-30vh] left-[-10vw] right-auto top-auto h-[600px] w-[600px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(109,192,244,0.3)] opacity-200 blur-[80px] animate-moveGradient2">
            </div>
        </div>
    );
};

export default Background;