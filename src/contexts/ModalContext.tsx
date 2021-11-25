import { createContext, Dispatch, useContext, useReducer } from "react";
import { ModalOwnProps, ModalType } from "../components/Modal/types";

type OpenModalPayload<T extends ModalType> = {
  type: T;
  props: ModalOwnProps<T>;
};

export type EnhancedModalPayload<T extends ModalType> = OpenModalPayload<T> & {
  id: string;
};

type ModalContextType = {
  openModal: () => void;
  closeModal: () => void;
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

const withModal = <P,>(Component: React.ComponentType<P>) => {
  const WithModal = (props: P) => {
    const [openModals, dispatch] = useReducer(reducer, []);
    const modalActions = {
      openModal: bindActionCreator(openModal, dispatch),
      closeModal: bindActionCreator(closeModal, dispatch),
      closeAll: bindActionCreator(closeModal, dispatch),
    };

    return (
      <ModalContext.Provider value={modalActions}>
        <Component {...props} />
        {/* <ModalConatiner openModals={openModals} /> */}
      </ModalContext.Provider>
    );
  };

  return WithModal;
};

export default withModal;

export const useModal = () => {
  return useContext(ModalContext);
};
