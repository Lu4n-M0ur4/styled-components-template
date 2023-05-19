import { styled } from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
 
  background-color: #ff9937;
  width: 207px;
  height: 175px;
  padding: 14px 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  h2 {
    background-color: red;
    text-align: center;
  }

  div {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 6px;
    background-color: blue;
  }
  img {
    width: 50%;
  }
`;

export const CardInfo = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 20px;
  background-color: grey;

  li {
    width: 80px;
    height: 14px;
    color: #000000;
    list-style: none;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400px;
    font-size: 12px;
    line-height: 12px;
  }
  
 
  `;
