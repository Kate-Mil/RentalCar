import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #12141780;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 760px;
  max-width: 540px;
  width: 100%;
  padding: 40px;
  border-radius: 24px;

  background: #fff;
`;

export const ImgWrapper = styled.div`
  width: 461px;
  height: 248px;
  margin-bottom: 14px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const Svg = styled.svg`
  stroke: #121417; 
  fill: none;   
}`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 14px;
`;

export const Title = styled.h2`
  color: #121417;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
`;

export const TitleWrapper = styled.div`
  display: block;

  margin-bottom: 8px;
`;

export const Model = styled.span`
  color: #3470ff;
`;

export const WrapperDetails = styled.div`
  max-width: 300px;
  margin-bottom: 14px;
`;

export const ListDetails = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  max-width: 100%;
`;

export const ItemDetails = styled.li`
  border-right: 1px solid #1214171a;
  &:last-child {
    border-right: none;
  }
`;

export const ItemText = styled.p`
  color: #12141780;
  font-size: 12px;
  font-weight: 400;
  line-height: calc(18 / 12);
  padding-right: 6px;

  &:last-child {
    padding-right: none;
  }
`;

export const DescrWrapper = styled.div`
  margin-bottom: 24px;
`;
export const DescrText = styled.p`
  color: #121417;
  font-size: 14px;
  font-weight: 400;
  line-height: 142.857%;
`;

export const AdvantagesWrapper = styled.div`
  margin-bottom: 24px;
`;

export const TitleAdvantages = styled.h3`
  margin-bottom: 8px;
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 142.857%;
`;

export const ListAdvantages = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 6px;
  max-width: 100%;
`;

export const ItemAdvantages = styled.li`
  border-right: 1px solid #1214171a;
  &:last-child {
    border-right: none;
  }
`;

export const TextAdvantages = styled.p`
  color: #12141780;
  font-size: 12px;
  font-weight: 400;
  line-height: calc(18 / 12);
  padding-right: 6px;

  &:last-child {
    padding-right: none;
  }
`;

export const RentalWrapper = styled.div`
  margin-bottom: 24px;
`;

export const RentalTitle = styled.h3`
  margin-bottom: 8px;
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 142.857%;
`;

export const RentalList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`;

export const RentalItem = styled.li`
  border-radius: 35px;
  background: #f9f9f9;
  padding: 7px 14px;
`;

export const RentalText = styled.p`
  color: #363535;
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
`;

export const WrapperDecor = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

export const RentalDecor = styled.span`
  color: #3470ff;
  font-size: 12px;
  font-weight: 600;
  line-height: calc(18 / 12);
  letter-spacing: -0.24px;
`;

export const Button = styled.a`
  display: flex;
  width: 168px;
  height: 44px;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  background: #0b44cd;

  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 142.857%;
  transition: background 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  &:hover,
  &:focus {
    background: #3470ff;
  }
`;
