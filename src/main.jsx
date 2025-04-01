import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

import Navbar from "./components/Navbar.jsx";
import App from "./App.jsx";
import Footer from "./components/Footer.jsx";
import Directiva from "./Directiva.jsx";
import Uniformidad from "./components/Uniformidad.jsx";
import Escalafon from "./components/Escalafon.jsx";

const Home = () => <h1 className="text-center mt-5">Bienvenido a Habbo Defense</h1>;

// Componente contenedor para manejar el footer según la ruta
const Layout = () => {
  const location = useLocation();
  const mostrarFooter = location.pathname !== "/directiva"; // oculta solo en /directiva

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/directiva" element={<Directiva />} />
        <Route path="/uniformidad" element={<Uniformidad />} />
        <Route path="/escalafon" element={<Escalafon />} />
      </Routes>
      {mostrarFooter && <Footer />}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Layout />
      </Router>
    </Provider>
  </React.StrictMode>
);
