
import React from "react";
import { Link } from 'react-router-dom'; // Import Link

const Navbar = () => {
    return (
        <nav className="bg-purple-300 text-purple-50 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">
                    <Link to="/" className="hover:opacity-75 text-purple-100">Logo</Link> {/* Updated hover effect */}
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="hover:opacity-75">Home</Link> {/* Updated hover effect */}
                    </li>
                    <li>
                        <Link to="/about" className="hover:opacity-75">About</Link> {/* Updated hover effect */}
                    </li>
                    <li>
                        <Link to="/services" className="hover:opacity-75">Services</Link> {/* Updated hover effect */}
                    </li>
                    <li>
                        <Link to="/contact" className="hover:opacity-75">Contact</Link> {/* Updated hover effect */}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;