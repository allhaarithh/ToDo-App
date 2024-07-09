import React from 'react';
import ReactDOM from 'react-dom';

// Define your main component
function App() {
    return (
        <div>
            <h1>Welcome to My React Website!</h1>
            {/* Add your content here */}
        </div>
    );
}

// Render the main component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));
export default App;
