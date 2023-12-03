import {
  ImgWrapper,
  Container,
  Button,
  ItemText,
  WrapperDetails,
  ListDetails,
  ItemDetails,
  Title,
  Model,
  TitleWrapper,
  Img,
} from "./AdvertListItem.styled";
import { FavoriteButton } from "components/FavoriteBtn/FavoriteBtn";

// import defaultPhoto from "../../img/defaultPhoto.jpg";

export const AdvertListItem = ({
  data,
  onClick,
  onChooseFavorite,
  favorites,
}) => {
  const {
    year,
    id,
    make,
    model,
    type,
    img,
    accessories,
    rentalPrice,
    rentalCompany,
    address,
  } = data;

  const addressParts = address.split(/\s*\|\s*/);
  const city = addressParts[0];
  const country = addressParts[1];

  const handlClick = () => {
    onClick(data);
  };

  return (
    <>
      <Container>
        <ImgWrapper>
          <FavoriteButton
            onClick={() => onChooseFavorite(data)}
            isFavorite={favorites.includes(data)}
          />
          <Img
            src={img}
            //   src={img ? img : defaultPhoto}
            alt={`${make} ${model} ${year}`}
          />
        </ImgWrapper>

        <TitleWrapper>
          <Title>
            {make}
            <Model> {model}</Model>, {year}
          </Title>
          <Title>${rentalPrice}</Title>
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
              <ItemText>{rentalCompany}</ItemText>
            </ItemDetails>
            <ItemDetails>
              <ItemText>Premium</ItemText>
            </ItemDetails>
            <ItemDetails>
              <ItemText>{type}</ItemText>
            </ItemDetails>
            <ItemDetails>
              <ItemText>{model}</ItemText>
            </ItemDetails>
            <ItemDetails>
              <ItemText>{id}</ItemText>
            </ItemDetails>
            {accessories.length !== 0 && (
              <ItemDetails>
                <ItemText>{accessories[0]}</ItemText>
              </ItemDetails>
            )}
          </ListDetails>
        </WrapperDetails>

        <Button onClick={handlClick}>Learn more</Button>
      </Container>
    </>
  );
};
