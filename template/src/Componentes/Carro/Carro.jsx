import { CardContainer, CardInfo } from "./style";

export function Carro(props) {
  console.log(props);
  return (
    <CardContainer>
      <h2>Meu carro</h2>
      <div>
        <img
          src="https://fotos.jornaldocarro.estadao.com.br/uploads/2019/03/30175446/45281968-1160x773.jpg"
          alt=""
        />
      </div>
      <CardInfo>
        <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>Flex: {props.flex}</li>
        <li>Adicionado: {props.adicionadoPor}</li>
      </CardInfo>
    </CardContainer>
  );
}
