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
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleWrap = styled.div``;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

export const Text = styled.h3`
  color: #fff;
`;

export const Unit = styled.p``;

export const Payload = styled.div``;


/* Button List */

export const ButtonListWrap = styled.div`
  display: flex;
  justify-content: space-around;
  height: 80%;
  align-items: center;
`;

/* button */

export const ButtonWrap = styled.button`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
`;