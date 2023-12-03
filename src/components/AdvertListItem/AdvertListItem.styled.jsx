import styled from "styled-components";

export const ImgWrapper = styled.div`
  position: relative;
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 14px;
`;

export const Container = styled.div`
  height: 100%;
  max-width: 274px;
`;

export const Title = styled.h2`
  color: #121417;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 9px;
  margin-bottom: 8px;
`;

export const Model = styled.span`
  color: #3470ff;
`;

export const WrapperDetails = styled.div`
  margin-bottom: 28px;
`;

export const ListDetails = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  // max-width: 100%;
`;

export const ItemDetails = styled.li`
  border-right: 1px solid #1214171a;
  &:last-child {
    border-right: none;
  }
`;

export const ItemText = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: calc(18 / 12);
  padding-right: 6px;

  &:last-child {
    padding-right: none;
    max-width: 87px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  background: #3470ff;

  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 142.857%;
  transition: background 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;
