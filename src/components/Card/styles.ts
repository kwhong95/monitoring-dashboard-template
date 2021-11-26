import styled from '@emotion/styled'

export const Container = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  width: 100%;
  height: 100vh;
  grid-gap: 10px;

  & > .item {
    border-radius: 10px;
    display: grid;
    grid-template-rows: 1fr 2fr;
    padding: 10px;
    background-color: ${props => props.theme.colors.cardBgColor}
  }
`;