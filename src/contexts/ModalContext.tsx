import { createContext } from "react";
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
