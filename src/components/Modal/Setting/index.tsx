import { BasicModalProps } from "../types";
import { useScreenSaverDispatch } from "../../../contexts/ScreenSaverContext";

import * as CS from "../common.styles";

interface Props extends BasicModalProps {
  title?: string;
}

const Setting: React.FC<Props> = ({ title }) => {
  const dispatch = useScreenSaverDispatch();

  const handleScreenSaverWaitTime = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value;

    if (typeof value === "number")
      return dispatch({ type: "@screensaver/WATE_TIME", wait_time: value });
  };

  return (
    <CS.Modal>
      <CS.Title>{title}</CS.Title>
      <CS.Body>
        <CS.ItemBody>
          <CS.ItemTitle>Screen Saver</CS.ItemTitle>
          <CS.ItemBody>
            Wait Time:
            <select onChange={handleScreenSaverWaitTime}>
              <option value={5000}>5초</option>
              <option value={10000}>10초</option>
              <option value={20000}>20초</option>
            </select>
          </CS.ItemBody>
        </CS.ItemBody>
      </CS.Body>
    </CS.Modal>
  );
};

export default Setting;
