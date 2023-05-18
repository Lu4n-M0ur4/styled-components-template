import { Garagem } from "./Componentes/Garagem/Garagem";
import GlobalStyles from "./GlobalStyle";

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
    </>
  );
}
