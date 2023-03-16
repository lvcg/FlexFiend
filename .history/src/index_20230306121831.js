// Connect application to the DOM

// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// App component
import App from './App';

// Render App component to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render App component to the DOM
root.render(
<App />
);