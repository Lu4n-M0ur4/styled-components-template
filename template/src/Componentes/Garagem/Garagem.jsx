import { Carro } from "../Carro/Carro";
import { GaragemContainer, Estacionamento } from "./style";

export function Garagem(props) {
  return (
    <>
     
      <GaragemContainer>
      <h1>Garagem da {props.nome}</h1>
        <Estacionamento>
          <Carro
            adicionadoPor={props.nome}
            cor={"Vermelho"}
            ano={2022}
            flex={"true"}
          />
          <Carro
            adicionadoPor={props.nome}
            cor={"Verde"}
            ano={2020}
            flex={"false"}
          />
          <Carro
            adicionadoPor={props.nome}
            cor={"Amarelo"}
            ano={2009}
            flex={"false"}
          />
          <Carro
            adicionadoPor={props.nome}
            cor={"Rosa"}
            ano={2022}
            flex={"true"}
          />
        </Estacionamento>
      </GaragemContainer>
    </>
  );
}