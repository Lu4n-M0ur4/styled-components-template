import { styled } from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ff9937;
  width: 207px;
  height: 175px;
  padding: 14px 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;



`;

export const CardInfo = styled.ul`

display: flex;
flex-wrap: wrap;
margin-top: 80px;

gap:15px;

li{
    width: 80px;
    height: 14px;
    color: #000000;


    font-family: 'Inter';
    font-style: normal;
    font-weight: 400px;
    font-size: 12px;
    line-height: 12px;
}


`;
