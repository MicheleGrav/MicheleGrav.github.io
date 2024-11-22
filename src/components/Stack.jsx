const Stack = () => {
    return (
        <div className="flex justify-around mt-10">
            <div className="flex flex-col dark:text-white transition-all duration-300 gap-5">
                <h2 className="text-3xl">Frameworks</h2>
                <ul>
                    <li>React</li>
                    <li>TailwindCSS</li>
                    <li>Flutter</li>
                    <li>React Native</li>
                </ul>
            </div>

            <div className="flex flex-col dark:text-white transition-all duration-300 gap-5">
                <h2 className="text-3xl ">Languages</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Dart</li>
                    <li>Java</li>
                    <li>C</li>
                </ul>
            </div>
        </div>
    );
};

export default Stack;