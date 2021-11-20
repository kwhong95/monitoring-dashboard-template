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
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
  gap: 5px;
  padding: 0 2rem;
`;

export const CompanyName = styled.h3``;

export const AppName = styled.p`
  font-size: 1.5rem;
`;

export const DetailBox = styled.div`
  background: #101010;
  border-radius: 10px;
`;