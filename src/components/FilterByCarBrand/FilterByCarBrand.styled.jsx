import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 226px;
  height: 40px;
  border-radius: 10px;
  background: #f8f8f7;

  cursor: pointer;
`;

export const List = styled.ul`
  position: absolute;
  top: 52px;
  right: 0;
  overflow: auto;
  z-index: 10;

  padding: 14px 8px 14px 18px;
  margin-top: calc(-14px - 8px);
  width: 224px;
  max-height: 272px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: #fff;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
`;

export const Item = styled.li`
color: #12141733;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height:  128.571%

  transition: color 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55),
    text-transform 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  &:hover {
    text-transform: uppercase;
    color: #3470ff;
  }
`;
