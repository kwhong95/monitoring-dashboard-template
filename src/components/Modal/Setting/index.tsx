import { BasicModalProps } from "../types";

import * as CS from "../common.styles";

interface Props extends BasicModalProps {
  title?: string;
}

const Setting: React.FC<Props> = ({ title }) => {
  return (
    <CS.Modal>
      <CS.Title>{title}</CS.Title>
    </CS.Modal>
  );
};

export default Setting;
