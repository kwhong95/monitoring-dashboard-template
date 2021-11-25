import { createContext } from "react";

type OpenModalPayload = {
  type: string;
  props: any;
};

export type EnhancedModalPayload = OpenModalPayload & { id: string };

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
