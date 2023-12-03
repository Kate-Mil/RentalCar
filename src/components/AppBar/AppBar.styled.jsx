import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  gap: 25px;
`;

export const Link = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  color: #121417;
  font-style: normal;

  transition: color 0.2s ease;

  &:hover {
    color: #3470ff;
  }
`;
