// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Ensure you have an App component in the src folder

// Get the root element from your HTML file (e.g., index.html)
const rootElement = document.getElementById("root");

// Create a root ReactDOM instance and render the App component
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
