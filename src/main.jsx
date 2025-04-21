import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

import Navbar from "./components/Navbar.jsx";
import App from "./App.jsx";
import Footer from "./components/Footer.jsx";
import Fansite from "./components/Fansite.jsx";
import Noticias from "./components/Noticias.jsx";
import Eventos from "./components/Eventos.jsx";
import Radio from "./components/Radio.jsx";
import Staff from "./components/Staff.jsx";

const Home = () => (
  <h1 className="text-center mt-5">Hspeed</h1>
);

// Componente contenedor para manejar el footer según la ruta
const Layout = () => {
  const location = useLocation();
  const mostrarFooter = location.pathname !== "/staff"; // oculta solo en /staff

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/fansite" element={<Fansite />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/staff" element={<Staff />} />
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
