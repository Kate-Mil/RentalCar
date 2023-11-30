import { ImgWrapper, Container } from "./AdvertListItem.styled";
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
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
  } = data;

  const adressParts = address.split(/,\s*/);
  const city = adressParts[1];
  const country = adressParts[2];

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
          <img
            src={img}
            //   src={img ? img : defaultPhoto}
            alt={`${make} ${model} ${year}`}
          />
        </ImgWrapper>
        <div>
          <div>
            <h2>
              {make}
              <span>{model}</span>,{year}
            </h2>
            <p>{rentalPrice}</p>
          </div>
          <div>
            <p>{city}</p>
            <p>{country}</p>
            <p>{rentalCompany}</p>
            <p>premium</p>
            <p>{type}</p>
            <p>{model}</p>
            <p>{id}</p>
            {functionalities.length !== 0 && <p>{functionalities[0]}</p>}
          </div>
        </div>
        <button onClick={handlClick}>Learn more</button>
      </Container>
    </>
  );
};
