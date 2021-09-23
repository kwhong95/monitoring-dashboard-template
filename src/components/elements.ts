import { Link } from "react-router-dom";
import styled from "styled-components";

/* Item List */

export const ItemListWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  height: 100vh;
  grid-gap: 10px;
`;

/* Item */

export const ItemWrap = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  padding: 10px;
  background-color: #1c1c1c;
  border-radius: 10px;
  max-height: 47vh;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Text = styled.h2`
  position: relative;
  top: -1em;
  left: -5.4em;
  width: 10em;
  color: #fff;
  margin-top: .3em;
  font-size: 2.5em;
`;

export const Unit = styled.p`
  position: relative;
  width: 4.2em;
  text-align: right;
  top: -2rem;
  left: -13em;
  font-size: 32px;
  font-weight: 600;
  color: gray;
`;

export const Payload = styled.div`
  position: relative;
  width: 2.2em;
  text-align: right;
  top: -3rem;
  left: 4rem;
  font-weight: 700;
  font-size: 100px;
  z-index: 2;
`;


/* Button List */

export const ButtonListWrap = styled.div`
  display: flex;
  justify-content: space-around;
  height: 80%;
  align-items: center;
`;

/* Button */

export const ButtonWrap = styled(Link)`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 7%;
  width: 160px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  gap: 20px;
  text-decoration: none;
`;

export const ButtonText = styled.h2`
  color: #fff;
  font-size: 1.8rem;
`;

/* Detail */

export const DetailWrap = styled.div`
  position: relative;
  display: grid;
  flex-direction: column;
  grid-template-rows: 1fr 7fr;
  height: 84vh;
  background-color: rgba(0, 0, 0, 0.6);
  margin: 10px;
  top: 1rem;
  border-radius: 10px;
  overflow: hidden;
`;

export const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 60px 0 20px; 
`;

export const DetailTitle = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const DetailValue = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const DetailContent = styled.div`
  padding: 10px;
`;