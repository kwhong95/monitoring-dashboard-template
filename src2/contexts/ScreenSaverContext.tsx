import { createContext, Dispatch, useContext, useReducer } from "react";

export type ScreenSaverInfo = {
  active: boolean;
  visible: boolean;
  delayTime: number;
  activeTime: number;
  inactiveTime: number;
};

const ScreenSaverContext = createContext<ScreenSaverInfo | undefined>(
  undefined
);

type Action =
  | { type: "SET_ACTIVE"; active: boolean }
  | { type: "SET_VISIBLE"; visible: boolean }
  | { type: "SET_DELAY_TIME"; delayTime: number }
  | { type: "SET_ACTIVE_TIME"; activeTime: number }
  | { type: "SET_INACTIVE_TIME"; inactiveTime: number };

type ScreenSaverDispatch = Dispatch<Action>;

const ScreenSaverDispatchContext = createContext<
  ScreenSaverDispatch | undefined
>(undefined);

const ScreenSaverReducer = (
  state: ScreenSaverInfo,
  action: Action
): ScreenSaverInfo => {
  switch (action.type) {
    case "SET_ACTIVE":
      return { ...state, active: true };
    case "SET_VISIBLE":
      return { ...state, visible: true };
    case "SET_DELAY_TIME":
      return { ...state, delayTime: action.delayTime };
    case "SET_ACTIVE_TIME":
      return { ...state, activeTime: action.activeTime };
    case "SET_INACTIVE_TIME":
      return { ...state, inactiveTime: action.inactiveTime };
    default:
      throw new Error("잘못된 동작입니다!");
  }
};

const initialState: ScreenSaverInfo = {
  active: false,
  visible: false,
  delayTime: 3000,
  activeTime: Infinity,
  inactiveTime: 5000,
};

export const ScreenSaverContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(ScreenSaverReducer, initialState);

  return (
    <ScreenSaverDispatchContext.Provider value={dispatch}>
      <ScreenSaverContext.Provider value={state}>
        {children}
      </ScreenSaverContext.Provider>
    </ScreenSaverDispatchContext.Provider>
  );
};

export const useScreenSaverState = () => {
  const state = useContext(ScreenSaverContext);
  if (!state) throw new Error("해당 상태를 찾을 수 없습니다.");
  return state;
};

export const useScreenSaverDispatch = () => {
  const dispatch = useContext(ScreenSaverDispatchContext);
  if (!dispatch) throw new Error("해당 동작을 찾을 수 없습니다.");
  return dispatch;
};
