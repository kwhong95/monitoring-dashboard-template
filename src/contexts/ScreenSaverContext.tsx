import { createContext, Dispatch, useContext, useReducer } from "react";

export type ScreenSaverInfo = {
  active: boolean;
  wait_time: number;
};

const ScreenSaverContext = createContext<ScreenSaverInfo | undefined>(
  undefined
);

type Action =
  | { type: "@screensaver/ACTIVE"; active: boolean }
  | { type: "@screensaver/WATE_TIME"; wait_time: number };

type ScreenSaverDispatch = Dispatch<Action>;

const ScreenSaverDispatchContext = createContext<
  ScreenSaverDispatch | undefined
>(undefined);

const ScreenSaverReducer = (
  state: ScreenSaverInfo,
  action: Action
): ScreenSaverInfo => {
  switch (action.type) {
    case "@screensaver/ACTIVE":
      return { ...state, active: action.active };
    case "@screensaver/WATE_TIME":
      return { ...state, wait_time: action.wait_time };
    default:
      throw new Error("잘못된 동작입니다!");
  }
};

const initialState: ScreenSaverInfo = {
  active: true,
  wait_time: 5000,
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
