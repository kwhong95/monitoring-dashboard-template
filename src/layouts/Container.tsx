interface Props {
  current: string;
}

const Container: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default Container;
