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
  width: 541px;
  max-width: calc(100vw - 150px);
  // max-height: calc(100vh - 403px);
`;

export const ImgWrapper = styled.div`
  width: 461px;
  height: 248px;
  border-radius: 14px;
  background: #f3f3f2;
  margin-bottom: 14px;
`;

export const Container = styled.div`
  position: relative;
  padding: 40px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
`;
