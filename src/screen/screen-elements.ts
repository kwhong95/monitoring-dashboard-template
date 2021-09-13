import styled from "styled-components";

/* Common */

export const Container = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  color: #fff;
  z-index: 1;
`;

/* Screen Main */

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
  gap: 5px;
`;

export const CompanyName = styled.h3``;

export const Divider = styled.div`
  border: 1px solid #fff;
  width: 10em;
`;

export const AppName = styled.p``;

export const DetailBox = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;