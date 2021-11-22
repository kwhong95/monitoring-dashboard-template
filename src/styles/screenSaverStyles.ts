import styled from '@emotion/styled'

interface Active {
  active: boolean;
}

export const Container = styled("div")<Active>`
  display: ${(props) => (props.active ? "flex" : "none")};
`;