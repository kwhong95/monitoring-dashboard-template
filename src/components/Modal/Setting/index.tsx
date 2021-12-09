import { BasicModalProps } from "../types";
import {
  useScreenSaverDispatch,
  useScreenSaverState,
} from "../../../contexts/ScreenSaverContext";

import * as CS from "../common.styles";

interface Props extends BasicModalProps {
  title?: string;
}

const Setting: React.FC<Props> = ({ title }) => {
  const { wait_time } = useScreenSaverState();
  const dispatch = useScreenSaverDispatch();

  const handleScreenSaverWaitTime = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value;
    dispatch({ type: "@screensaver/WATE_TIME", wait_time: value as any });
  };

  return (
    <CS.Modal>
      <CS.Title>{title}</CS.Title>
      <CS.Body>
        <CS.ItemBody>
          <CS.ItemTitle>Screen Saver</CS.ItemTitle>
          <CS.ItemBody>
            Wait Time:
            <select value={wait_time} onChange={handleScreenSaverWaitTime}>
              <option selected disabled>
                {wait_time / 1000}초
              </option>
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
