import React from 'react';
import Navbar from './navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css'; // Corrected import statement
// Import the To-Do List component if available
// import TodoList from './TodoList';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fab);


function Home() {
    return (
        <div>
        <style>  {`
    .poppins-font {
        font-family: 'Poppins', sans-serif;
    }
    .monsterrat-font{
        font-family: 'Montserrat', sans-serif;
    }

    .maint1{
        margin-top: -15px;
    }
    
            `}
            </style>
            <Navbar />
            <div className="h-full main-content flex-grow">
                <div className='h-1/2'>
                    <h1 className="text-center maint1 monsterrat-font text-purple-300 text-7xl font-bold ">To-Do List App</h1>
                    <p className="text-center maint2 monsterrat-font text-purple-300 text-l">Welcome to your personal To-Do List App. Get organized and accomplish more every day!</p>
                </div>
                <div className='h-1/2 flex flex-row space-x-2 justify-center signlog'>
                    <button className='bg-purple-300 outer hover:shadow-lg hover:scale-105 transition duration-150 ease-in-out font-Poppins'><a href="./login" className='text-purple-50 inner poppins-font'>Login</a></button>
                    <button className='bg-purple-300 outer hover:shadow-lg hover:scale-105 transition duration-150 ease-in-out font-Poppins'><a href="./signup" className='text-purple-50 inner poppins-font'>Sign Up</a></button>
                </div>
            </div>
            <footer className="w-full flex justify-between items-center p-4 bg-purple-200">
                <div className="w-1/2 flex justify-center items-center">
                    <div className="flex flex-row justify-center space-x-4 logos">
                        <a href="https://www.linkedin.com/in/alhaarithofficial/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'linkedin']} size='2x' className='text-purple-50' />
                        </a>
                        <a href="https://github.com/allhaarithh" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'github']} size='2x' className='text-purple-50' />
                        </a>
                        <a href="https://instagram.com/allhaarithh" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' className='text-purple-50'/>
                        </a>
                        <a href="https://www.behance.net/alhaarithhakkim" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'behance']} size='2x' className='text-purple-50'/>
                        </a>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                        <p className='text-purple-50 poppins-font'>Alhaarith 2024 ©</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;