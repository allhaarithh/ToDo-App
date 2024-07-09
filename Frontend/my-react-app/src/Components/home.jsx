import React from 'react';
import Navbar from './navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css'; // Corrected import statement
// Import the To-Do List component if available
// import TodoList from './TodoList';
const github = <FontAwesomeIcon icon={['fab', 'github']} />;
const linkedin = <FontAwesomeIcon icon={['fab', 'linkedin']} />;
const instagram = <FontAwesomeIcon icon={['fab', 'instagram']} />; // Corrected variable name
const behance = <FontAwesomeIcon icon={['fab', 'behance']} />; // Added variable

function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="main-content flex-grow"> {/* Apply the custom CSS class here */}
                <div>
                    <h1 className="text-center">To-Do List App</h1>
                    <p className="text-center">Welcome to your personal To-Do List App. Get organized and accomplish more every day!</p>
                </div>
            </div>
            <footer className="w-full text-center p-4 bg-purple-200 footer">
                <div className='flex flex-col items-center space-x-2'>
                    <div className="flex justify-center space-x-4">
                        <a href="https://www.linkedin.com/in/alhaarithofficial/" target="_blank" rel="noopener noreferrer">
                            {linkedin}
                        </a>
                        <a href="https://github.com/allhaarithh" target="_blank" rel="noopener noreferrer">
                            {github}
                        </a>
                        <a href="https://instagram.com/allhaarithh" target="_blank" rel="noopener noreferrer">
                            {instagram}
                        </a>
                        <a href="https://www.behance.net/alhaarithofficial" target="_blank" rel="noopener noreferrer">
                            {behance}
                        </a>
                    </div>
                    <div className="mt-4">
                        <p>2024 Alhaarith&copy;</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;