import styled from '@emotion/styled'

interface Active {
  active: boolean;
}

export const Container = styled('div')<Active>`
  display: ${props => props.active ? 'grid' : 'none'};
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  height: 100vh;
  grid-gap: 10px;

  & > .item {
    border-radius: 10px;
    width: 80vh;
    display: grid;
    grid-template-rows: 1fr 2fr;
    padding: 10px;
    background-color: ${props => props.theme.colors.cardBgColor}
  }
`;