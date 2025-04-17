// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "App.jsx";
import "./index.css"; // opsional, kalau kamu pakai Tailwind atau CSS sendiri

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
