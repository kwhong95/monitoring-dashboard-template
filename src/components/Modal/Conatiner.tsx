import React, { cloneElement, useEffect, useState } from "react";
import type {
  EnhancedModalPayload,
  OverlayOptions,
} from "../../contexts/ModalContext";
import { useModal } from "../../contexts/ModalContext";

import * as S from "./overlay.styles";
import { ModalType } from "./types";

interface Props {
  openedModals: EnhancedModalPayload<ModalType>[];
}

const ModalContainer = ({ openedModals }: Props) => {
  return (
    <div id="modal-root">
      {openedModals.map((modalState) => (
        <OpenedModals key={modalState.id} {...modalState} />
      ))}
    </div>
  );
};

interface ImportedModule {
  default: React.ComponentType;
}

const OpenedModals: React.FC<EnhancedModalPayload<ModalType>> = ({
  type,
  id,
  props,
  overlayOptions,
}) => {
  const { closeModal } = useModal();
  const [Component, setComponent] = useState<React.ComponentType>();

  useEffect(() => {
    void import(`./${type}`).then((modal: ImportedModule) => {
      setComponent(() => modal.default);
    });
  });

  const close = () => closeModal({ id });

  if (!Component) return null;

  return (
    <ModalOverlay {...overlayOptions} closeSelf={close}>
      <Component {...props} />
    </ModalOverlay>
  );
};

interface OverlayProps extends OverlayOptions {
  closeSelf: () => void;
  children: React.ReactElement;
}

const ModalOverlay: React.FC<OverlayProps> = ({
  dim = true,
  closeDelay = 0,
  closeOverlayClick = true,
  preventScroll = true,
  children,
  closeSelf,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => setVisible(true), []);

  const delayedClose = () => {
    setVisible(true);
    setTimeout(closeSelf, closeDelay);
  };

  const onClick = (e: React.MouseEvent) => {
    if (!closeOverlayClick) return;
    if (e.target === e.currentTarget) {
      delayedClose();
    }
  };

  useEffect(() => {
    if (preventScroll) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "initial";
      };
    }
  }, [preventScroll]);

  return (
    <S.Overlay
      dim={dim}
      visible={visible}
      onClick={onClick}
      style={{ transitionDuration: `${delayedClose}ms` }}
    >
      {cloneElement(children, { close: delayedClose, visible })}
    </S.Overlay>
  );
};

export default ModalContainer;
