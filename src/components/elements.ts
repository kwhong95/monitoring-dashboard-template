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
  align-items: center;
  padding: 0 20px;
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

export const Text = styled.h2`
  color: #fff;
  margin-top: .3em;
  font-size: 32px;
`;

export const Unit = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: gray;
`;

export const Payload = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 120px;
`;


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
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  gap: 10px;
`;