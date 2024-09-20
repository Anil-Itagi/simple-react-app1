import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState("Welcome to my React app!");

  const handleClick = () => {
    setMessage("You clicked the button!");
  };

  return (
    <div className="App">
      <h1>{message}</h1>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

export default App;
