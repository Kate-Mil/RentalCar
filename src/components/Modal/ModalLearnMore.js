import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalContent } from "./ModalLearnMore.styled";

const modalRoot = document.getElementById("modal-root");

export const ModalLearnMore = ({ modalData, onClick }) => {
  console.log(modalData);
  useEffect(() => {
    const hendleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClick();
      }
    };
    window.addEventListener("keydown", hendleKeyDown);

    return () => {
      window.removeEventListener("keydown", hendleKeyDown);
    };
  }, [onClick]);

  const hendleOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  return createPortal(
    <Overlay onClick={hendleOverlayClick}>
      <ModalContent>
        <div>MODAL OPEN</div>
      </ModalContent>
    </Overlay>,
    modalRoot
  );
};
