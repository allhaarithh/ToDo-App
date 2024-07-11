import React, { useState } from 'react';
import Fixednavbar from './fixednavbar';
import Footer from './footer';
const List = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };

    const handleAddTodo = () => {
        setTodos([...todos, inputValue]); // Add inputValue to todos array
        setInputValue(''); // Clear input field after adding
      };

    // Adjust handleDeleteTodo to use task ID and communicate with the backend
// Function to delete a todo
const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => index !== todoIndex); // Remove todo at specified index
    setTodos(newTodos);
  };
    

    return (
        
        <div className="flex flex-col h-screen justify-between bg-purple-50">
    <style>
{`
    .poppins-font {
        font-family: 'Poppins', sans-serif;
    }
`}
</style>
    <Fixednavbar/>
    <main className="flex-grow flex items-center justify-center poppins-font">
        <div className="w-full max-w-xs">
            <div className="flex flex-col items-center"> {/* Changed to flex-col for vertical stacking */}
                <div className="flex w-full"> {/* Container for input and button */}
                    <input type="text" value={inputValue} onChange={handleInputChange} className="w-full" />
                    <button className='bg-purple-300 text-purple-50  rounded-xl ml-5 p-1  text-lg px-6 text-center hover:bg-purple-200 hover:text-purple-300 hover:shadow-xl transition-shadow duration-300 ease-in-out' onClick={handleAddTodo}>Add</button>
                </div>
                <ul className="w-full mt-4"> {/* List below the input and button */}
                    {todos.map((todo, index) => (
                        <li key={index} className="flex justify-between items-center">
                            {todo}
                            <button className='bg-purple-300 text-purple-50 rounded-xl ml-5 p-1 text-lg text-center hover:bg-purple-200 hover:text-purple-300 hover:shadow-xl transition-shadow duration-300 ease-in-out' onClick={() => handleDeleteTodo(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </main>
    <Footer/>
</div>
    );
}

export default List;



