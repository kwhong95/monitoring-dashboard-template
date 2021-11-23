import styled from '@emotion/styled'

interface Active {
  active: boolean;
}

export const Container = styled("div")<Active>`
  ${(props) => ({
    display: props.active ? "flex" : "none",
    background: props.theme.colors.bgColor,
    color: props.theme.colors.fontColor
  })};
  height: 100vh;
`;