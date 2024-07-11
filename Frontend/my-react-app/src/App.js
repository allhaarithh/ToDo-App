import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/home.jsx';
import Login from './Components/login.jsx'
import Signup from './Components/signup.jsx'
import List from './Components/list.jsx';


// Define your main component
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/list" element={<List/>} />
      </Routes>
    </BrowserRouter>
  );
}

// Render the main component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));
export default App;
