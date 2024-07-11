import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css'; // Corrected import statement
// Import the To-Do List component if available
// import TodoList from './TodoList';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';


library.add(fab);

const Footer = () => (
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
            <p className='text-purple-50'>Alhaarith 2024 ©</p>
    </div>
</footer>
);

export default Footer;