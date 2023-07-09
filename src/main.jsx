import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



// Calling onClick function of a button without permanenetly calling the function


// <button onClick={() => handleClick(parameter)}>Click me</button>

// In this example, the onClick event is assigned to an anonymous function that calls the handleClick function with the desired parameter.

// Here's an example of how you can handle the click event and receive the parameter in the handleClick function:

// function handleClick(parameter) {
//   // Use the parameter as needed
//   console.log("Clicked with parameter:", parameter);
// }
