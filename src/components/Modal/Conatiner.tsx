import { useContext, useEffect, useState } from "react";
import type { EnhancedModalPayload } from "../../contexts/ModalContext";
import { ModalContext } from "../../contexts/ModalContext";

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
}) => {
  const { closeModal } = useContext(ModalContext);
  const [Component, setComponent] = useState<React.ComponentType>();

  useEffect(() => {
    void import(`./${type}`).then((modal: ImportedModule) => {
      setComponent(() => modal.default);
    });
  });

  // const close = () => closeModal({ id })

  if (!Component) return null;
  return <Component {...props} />;
};
