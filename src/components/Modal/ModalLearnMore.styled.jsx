import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 20, 23, 0.5);
  // z-index: 1200;
`;

export const ModalContent = styled.div`
  border-radius: 24px;
  background: #fff;
  max-width: calc(100vw - 150px);
  max-height: calc(100vh - 403px);
`;
