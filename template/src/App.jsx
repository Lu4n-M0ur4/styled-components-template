import React from "react";
import { Garagem } from "./Componentes/Garagem/Garagem";
import GlobalStyles from "./GlobalStyle";
import Rodape from "./Componentes/Footer";

export default function App() {
  const nome = "Labenu";

  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  return (
    <>
      <GlobalStyles />

      <div className="App">
        <Garagem nome={nome} mensagemAprentacao={apresentaGaragem} />
      </div>
      <Rodape />
    </>
  );
}
