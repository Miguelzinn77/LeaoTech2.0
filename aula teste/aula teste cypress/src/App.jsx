import { useState } from "react";
import { Browser, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import CadastroProdutos from "./pages/CadastroProdutos/CadastroProdutos";

const App = () => {
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastroProdutos" element={<CadastroProdutos />} />
      </Routes>
    </BrowserRouter>
  </>;
};

export default App;
