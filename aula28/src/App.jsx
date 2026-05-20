import { useState } from "react";

import '../bootstrap-5.3.8-dist/css/bootstrap.min.css'
import "./App.css";
import Sobre1 from "./components/Sobre1";
import Sobre2 from "./components/Sobre2";
import Sobre3 from "./components/Sobre3";
import Formulario from "./page/formulario";

function App() {
    let [abaAtual, setAbaAtual] = useState("");

    return (
      <>
        <h1 className="text-center bg-danger p-3"> Aula 28 </h1>

        <div>
          <div>
            <button onClick={() => setAbaAtual("primeiro")}>clique aqui</button>
          </div>
          <div>
            <button onClick={() => setAbaAtual("segundo")}>clique aqui</button>
          </div>
          <div>
            <button onClick={() => setAbaAtual("terceiro")}>clique aqui</button>
          </div>
        </div>

        {abaAtual == "primeiro" && <Sobre1 />}
        {abaAtual == "segundo" && <Sobre2 />}
        {abaAtual == "terceiro" && <Sobre3 />}

        <Formulario />
      </>
    );
  };

export default App;
