import { styled } from "styled-components";

export const Botao = styled.button`
background-color: orange;
border: 0;
border-radius: 4px;
padding: 10px 15px;
margin: 20px 0;
transition: .3s ease-in;

&:hover{
    background-color: black;
    color: white; 
}`



export const GaragemContainer = styled.main`
display: flex;
flex-direction: column;
align-items: center;
background-color: orange;
border: 0;
border-radius: 4px;

`
export const Estacionamento = styled.section`
background-color: red;
display: grid;
grid-template-columns: 1fr 1fr;
row-gap: 3rem;
gap: 3rem;



border: 0;
border-radius: 4px;
`