import styled from "styled-components";

export const Button = styled.button`
  display: block;
  margin: auto;
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(24 / 16);
  text-decoration-line: underline;
  transition: color 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
