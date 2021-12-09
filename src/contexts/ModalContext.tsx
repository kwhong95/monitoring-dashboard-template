import { createContext, Dispatch, useContext, useReducer } from "react";
import { ModalOwnProps, ModalType } from "../components/Modal/types";
import ModalContainer from "../components/Modal/Conatiner";

type OpenModalPayload<T extends ModalType> = {
  type: T;
  props: ModalOwnProps<T>;
  overlayOptions?: OverlayOptions;
};

export type EnhancedModalPayload<T extends ModalType> = OpenModalPayload<T> & {
  id: string;
};

export interface OverlayOptions {
  dim?: boolean | string;
  closeDelay?: number;
  closeOverlayClick?: boolean;
  preventScroll?: boolean;
}

type ModalContextType = {
  openModal: <T extends ModalType>(payload: OpenModalPayload<T>) => void;
  closeModal: (payload: { id: string }) => void;
  closeAll: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  openModal: () => void 0,
  closeModal: () => void 0,
  closeAll: () => void 0,
});

const openModal = (payload: OpenModalPayload<ModalType>) => {
  return {
    type: "@modal/OPEN_MODAL" as const,
    payload: {
      ...payload,
      id: `${payload.type}_${Date.now()}`,
    },
  };
};

const closeModal = (payload: { id: string }) => {
  return { type: "@modal/CLOSE_MODAL" as const, payload };
};

const closeAll = () => {
  return { type: "@modal/CLOSE_ALL" as const };
};

type ModalActionCreator =
  | typeof openModal
  | typeof closeModal
  | typeof closeAll;

type ModalAction = ReturnType<ModalActionCreator>;

const reducer = (
  state: EnhancedModalPayload<ModalType>[],
  action: ModalAction
) => {
  switch (action.type) {
    case "@modal/OPEN_MODAL":
      return [...state, action.payload];
    case "@modal/CLOSE_MODAL":
      return state.filter((modal) => modal.id !== action.payload.id);
    case "@modal/CLOSE_ALL":
      return [];
  }
};

type ActionCreator<A> = { (...args: any[]): A };

function bindActionCreator<A, C extends ActionCreator<A>>(
  actionCreator: C,
  dispatch: Dispatch<A>
) {
  return (...args: Parameters<C>) => dispatch(actionCreator(...args));
}

export const ModalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [openedModals, dispatch] = useReducer(reducer, []);
  const modalActions = {
    openModal: bindActionCreator(openModal, dispatch),
    closeModal: bindActionCreator(closeModal, dispatch),
    closeAll: bindActionCreator(closeAll, dispatch),
  };

  return (
    <ModalContext.Provider value={modalActions}>
      <ModalContainer openedModals={openedModals} />
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
