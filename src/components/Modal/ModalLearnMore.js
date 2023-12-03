import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  Overlay,
  ModalContent,
  ImgWrapper,
  CloseBtn,
  Img,
  Button,
  Title,
  TitleWrapper,
  Model,
  WrapperDetails,
  ListDetails,
  ItemDetails,
  ItemText,
  DescrWrapper,
  DescrText,
  AdvantagesWrapper,
  TitleAdvantages,
  ListAdvantages,
  ItemAdvantages,
  TextAdvantages,
  RentalWrapper,
  RentalTitle,
  RentalDecor,
  RentalText,
  WrapperDecor,
  RentalList,
  RentalItem,
  Svg,
} from "./ModalLearnMore.styled";
import sprite from "../../img/sprite.svg";
import defaultPhoto from "../../img/defaultPhoto.jpg";

export const ModalLearnMore = ({ modalData, onClick }) => {
  const [modalRoot, setModalRoot] = useState(null);

  const {
    year,
    id,
    make,
    model,
    type,
    img,
    description,
    functionalities,
    rentalPrice,
    rentalConditions,
    fuelConsumption,
    engineSize,
    accessories,
    address,
    mileage,
  } = modalData;

  useEffect(() => {
    const modalRootDiv = document.createElement("div");
    modalRootDiv.id = "modal-root";
    document.body.appendChild(modalRootDiv);
    setModalRoot(modalRootDiv);

    return () => {
      document.body.removeChild(modalRootDiv);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClick();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClick]);

  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [modalRoot]);

  const handleOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  if (!modalRoot) {
    return null;
  }
  const addressParts = address.split(/\s*\|\s*/);
  const city = addressParts[0];
  const country = addressParts[1];

  const rentalConditionsParts = rentalConditions.split("\n");
  const minimumAgeMatch = rentalConditionsParts[0].match(/\d+/);
  const minimumAge = minimumAgeMatch ? minimumAgeMatch[0] : null;

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalContent>
        {" "}
        <CloseBtn type="button" onClick={() => onClick()}>
          <Svg width="24" height="24">
            <use href={`${sprite}#close`}></use>
          </Svg>
        </CloseBtn>
        <ImgWrapper>
          <Img
            src={img !== "" ? img : defaultPhoto}
            alt={`${make} ${model} ${year}`}
          />
        </ImgWrapper>
        <TitleWrapper>
          <Title>
            {make}
            <Model> {model}</Model>, {year}
          </Title>
        </TitleWrapper>
        <WrapperDetails>
          <ListDetails>
            <ItemDetails>
              <ItemText>{city}</ItemText>
            </ItemDetails>
            <ItemDetails>
              <ItemText>{country}</ItemText>
            </ItemDetails>
            <ItemDetails>
              <ItemText>Id: {id}</ItemText>
            </ItemDetails>
            <ItemDetails>
              <ItemText>Year: {year}</ItemText>
            </ItemDetails>
            <ItemDetails>
              <ItemText>Type: {type}</ItemText>
            </ItemDetails>
            <ItemDetails>
              <ItemText>Fuel Consumption:{fuelConsumption}</ItemText>
            </ItemDetails>
            <ItemDetails>
              <ItemText>Engine Size: {engineSize}</ItemText>
            </ItemDetails>
          </ListDetails>
        </WrapperDetails>
        <DescrWrapper>
          <DescrText>{description}</DescrText>
        </DescrWrapper>
        <AdvantagesWrapper>
          <TitleAdvantages>Accessories and functionalities:</TitleAdvantages>
          <ListAdvantages>
            {accessories.length !== 0 &&
              accessories.map((el) => (
                <ItemAdvantages key={el.id}>
                  <TextAdvantages>{el.name}</TextAdvantages>
                </ItemAdvantages>
              ))}
            {functionalities.length !== 0 &&
              functionalities.map((el) => (
                <TextAdvantages key={el.id}>{el.name}</TextAdvantages>
              ))}
          </ListAdvantages>
        </AdvantagesWrapper>
        <RentalWrapper>
          <RentalTitle>Rental Conditions: </RentalTitle>
          <RentalList>
            {minimumAge && (
              <RentalItem>
                <WrapperDecor>
                  <RentalText>
                    Minimum age:
                    <RentalDecor> {minimumAge}</RentalDecor>
                  </RentalText>
                </WrapperDecor>
              </RentalItem>
            )}
            {rentalConditionsParts.slice(1).map((condition, index) => (
              <RentalItem>
                <RentalText key={index}>{condition}</RentalText>
              </RentalItem>
            ))}{" "}
            <RentalItem>
              <WrapperDecor>
                <RentalText>
                  Mileage:
                  <RentalDecor>
                    {" "}
                    {mileage.toLocaleString("en-US", {
                      maximumFractionDigits: 3,
                    })}
                  </RentalDecor>
                </RentalText>
              </WrapperDecor>
            </RentalItem>
            <RentalItem>
              <WrapperDecor>
                <RentalText>
                  Price:<RentalDecor> {rentalPrice}$</RentalDecor>
                </RentalText>
              </WrapperDecor>
            </RentalItem>
          </RentalList>
        </RentalWrapper>
        <Button href="tel:+380730000000">Rental car</Button>
      </ModalContent>
    </Overlay>,
    modalRoot
  );
};
