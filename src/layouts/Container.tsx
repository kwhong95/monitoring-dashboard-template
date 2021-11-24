import styled from "@emotion/styled";

const Wrapper = styled("div")`
  ${(props) => ({
    background: props.theme.colors.bgColor,
    color: props.theme.colors.fontColor,
  })};
`;

const Container: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
