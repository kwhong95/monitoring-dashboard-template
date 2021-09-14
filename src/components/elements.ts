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

/* Button */

export const ButtonWrap = styled(Link)`
  background-color: rgba(0, 0, 0, 0.3);
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  gap: 10px;
  text-decoration: none;
`;

/* Detail */

export const DetailWrap = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-rows: 1fr 7fr;
  height: 83vh;
  background-color: rgba(0, 0, 0, 0.6);
  margin: 10px;
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

/* Connect */

export const ConnectWrap = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 2.3em;
  right: 2em;
`;

export const LED = styled.div<{ on: string }>`
  position: relative;
  margin-left: 5px;
  margin-bottom: 3px;
  width: 1em;
  height: 1em;
  border: 2px;
  border-radius: 2.5em;

  ${props => props.on === "on" ? {
      backgroundImage: "radial-gradient(farthest-corner at 50% 20%, #00c853 0%, #009624 100%)",
      boxShadow: "0 0.5em 1em #003300"
    } : {
      backgroundImage: "radial-gradient(farthest-corner at 50% 20%, #b30000 0%, #330000 100%)",
      boxShadow: "0 0.5em 1em rgba(102, 0, 0, 0.3)"
    }
  }
`;
