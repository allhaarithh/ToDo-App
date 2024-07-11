import React, {useState}from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory
import Fixednavbar from './fixednavbar';
import '../App.css'; // Corrected import statement
// Import the To-Do List component if available
// import TodoList from './TodoList';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import axios from 'axios';
import Footer from './footer'

library.add(fab);

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Replace URL with your actual backend login endpoint
            const response = await axios.post('http://localhost:5000/api/login', { email, password });
            console.log('Login successful', response.data);
            localStorage.setItem('token', response.data.token);
            // Assuming successful login response includes a way to verify it was successful
            navigate('/list'); // Redirect to list.jsx page
        } catch (error) {
            if (error.response) {
                // Handle errors returned from the server
                console.error('Login error', error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Login error', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Login error', error.message);
            }
        }
    };

    return (
        <div className="flex flex-col h-screen justify-between bg-purple-50">
            <Fixednavbar/>
            {/* Main Content - Login Form */}
            <main className="flex-grow flex items-center justify-center">
                <div className="w-full max-w-xs">
                    <form className="bg-purple-200 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-purple-50 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"  value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-6">
                            <label className="block text-purple-50 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-purple-300 hover:bg-purple-100 text-purple-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out hover:shadow-xl" type="submit">
                                Login
                                </button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Login;