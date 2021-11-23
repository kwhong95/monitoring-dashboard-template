import styled from "@emotion/styled";
import { useScreenSaverState } from "../contexts/ScreenSaverContext";

interface Props {
  current: string;
}

const StyledContainer = styled("div")<{ active: boolean }>`
  ${(props) => ({
    background: props.theme.colors.bgColor,
    color: props.theme.colors.fontColor,
    display: props.active ? "none" : "flex",
  })}
  height: 100vh;
`;

const Container: React.FC<Props> = ({ children }) => {
  const { active } = useScreenSaverState();
  return <StyledContainer active={active}>{children}</StyledContainer>;
};

export default Container;
