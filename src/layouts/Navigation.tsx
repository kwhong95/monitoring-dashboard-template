import { Conatiner } from "../styles/navStyles";
import { useModal } from "../contexts/ModalContext";

const Nav: React.FC = () => {
  const { openModal } = useModal();

  const openSetting = () => {
    openModal({
      type: "Setting",
      props: { title: "Setting" },
    });
  };

  return (
    <Conatiner>
      <button onClick={openSetting}>Setting</button>
      <p>도장부스 모니터링</p>
      <p>Connected</p>
    </Conatiner>
  );
};

export default Nav;
