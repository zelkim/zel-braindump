import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.tsx"; // Your main component
import Article from "./Article.tsx";
import "./index.css"; // Keep global styles

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:articleid" element={<Article />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
