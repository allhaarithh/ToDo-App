
import React,{useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom'; // Import Link
import '../Component CSS/navbar.css';
import LogoImage from '../Images/websitelogo.png';

function Navbar(){

    const navigate = useNavigate();
    useEffect(() => {
        const handleScroll = () => {
          const navbar = document.querySelector('.navbar');
          // Adjust the opacity based on the scroll position
          // You can adjust the values to get the desired effect
          const opacity = window.scrollY < 50 ? 1 : 0.5;
          navbar.style.backgroundColor = `rgba(176, 87, 141, ${opacity})`;
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const handleLogout = () => {
        const token = localStorage.getItem('token');
        if (token) {
          localStorage.removeItem('token');
          navigate('/login');
        }
        // If no token, do nothing
      };

    return (
        <nav className="bg-purple-300 text-purple-50 p-4 navbar">
            <style>
{`
    .poppins-font {
        font-family: 'Poppins', sans-serif;
    .navbar-logo{
        height: 5rem;
        width: auto;
        transition: box-shadow 0.3s ease-in-out; /* Add transition effect */
    }
    .navbar-logo:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,0.2); /* Add shadow on hover */
    }
    }
`}
</style>
            <div className="container mx-auto flex justify-between items-center poppins-font">
                <div className="text-lg font-bold">
                    <Link to="/" className="hover:opacity-75 text-purple-100"><img src={LogoImage} alt="ToDo list web app logo" className="navbar-logo "/></Link> {/* Updated hover effect */}
                </div>
                <ul className="flex space-x-4 font-Poppins">
                    <li>
                        <Link to="/" className="hover:opacity-75">Home</Link> {/* Updated hover effect */}
                    </li>
                    <li>
                        <Link to="/login" className="hover:opacity-75  ">Login</Link> {/* Updated hover effect */}
                    </li>
                    <li>
                        <Link to="/signup" className="hover:opacity-75 ">Signup</Link>{/* Updated hover effect */}
                    </li>
                    <li>
                    <button onClick={handleLogout} className="hover:opacity-75 ">Logout</button> {/* Updated hover effect */}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;