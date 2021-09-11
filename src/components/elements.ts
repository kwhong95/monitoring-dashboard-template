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

export const Icon = styled.img``;

export const Text = styled.h3``;

export const Unit = styled.p``;

export const Payload = styled.div``;
