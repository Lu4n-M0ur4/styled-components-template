import { CardContainer,CardInfo } from "./style";


export function Carro(props) {
  console.log(props)
  return (
    <CardContainer>
      <h2>Meu carro</h2>
      <h1>{props.imagem}</h1>
      <CardInfo>
        <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>Flex: {props.flex}</li>
        <li>Adicionado: {props.adicionadoPor}</li>
        
        
      </CardInfo>
    </CardContainer>
  );
}
