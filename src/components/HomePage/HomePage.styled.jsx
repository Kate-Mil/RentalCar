import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: calc(18 / 12);
  padding-right: 6px;
  min-height: 100vh;
  margin-bottom: auto;
`;

export const Title = styled.h1`
  color: #121417;
`;

export const Heading2 = styled.h2`
  color: #121417;
`;

export const Section = styled.section`
  margin-bottom: 20px;

  & p {
    color: #121417;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: #3470ff;
`;

export const PartnerList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  margin: 0;

  & li {
    text-align: center;

    & img {
      width: 100px; /* Set the width as needed */
      height: auto;
    }

    & p {
      color: #121417;
    }
  }
`;

export const Footer = styled.footer`
  background-color: #121417;
  color: #fff;
  padding: 10px;
  text-align: center;
`;
