import styled from "styled-components";

export const Section = styled.div`
  padding: 50px 0;
`;

export const ListWrapper = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 29px;
  grid-row-gap: 50px;
  margin-bottom: 100px;
`;
