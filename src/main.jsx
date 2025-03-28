import React from "react";
import ReactDOM from "react-dom/client"; // Importar correctamente en React 18
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import Navbar from "./components/Navbar.jsx";
import App from "./App.jsx";
import Footer from "./components/Footer.jsx";

const Home = () => <h1 className="text-center mt-5">Bienvenido a Habbo Defense</h1>;

// Crear root para React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
