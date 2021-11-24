import styled from '@emotion/styled'

export const Container = styled("div")<{ active: boolean }>`
  display: ${props => props.active ? 'flex' : 'none'};
  height: 100vh;
`;