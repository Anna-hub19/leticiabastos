import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SobreMim from "./components/Sobre-mim/SobreMim";
import Servicos from "./components/Servicos/Servicos";

function Rotas() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          
          <Route path="/sobre-mim" element={<SobreMim/>} />
          
          <Route path="/servicos" element={<Servicos />} />
        </Routes>
      </Router>
    );
  }
  
  export default Rotas;
  