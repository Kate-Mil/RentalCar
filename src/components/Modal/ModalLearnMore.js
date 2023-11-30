import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalContent } from "./ModalLearnMore.styled";

const modalRoot = document.getElementById("modal-root");

export const ModalLearnMore = ({ modalData, onClick }) => {
  const {
    data: {
      year,
      id,
      make,
      model,
      type,
      img,
      functionalities,
      rentalPrice,
      rentalConditions,
      fuelConsumption,
      engineSize,
      accessories,
      address,
      mileage,
    },
  } = modalData;

  useEffect(() => {
    const hendleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClick();
      }
    };
    window.addEventListener("keydown", hendleKeyDown);

    return () => {
      window.removeEventListener("keydown", hendleKeyDown);
    };
  }, [onClick]);

  const hendleOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  const adressParts = address.split(/,\s*/);
  const city = adressParts[1];
  const country = adressParts[2];

  const rentalConditionsParts = rentalConditions.split("\n");
  const minimumAgeMatch = rentalConditionsParts[0].match(/\d+/);
  const minimumAge = minimumAgeMatch ? minimumAgeMatch[0] : null;

  return createPortal(
    <Overlay onClick={hendleOverlayClick}>
      <ModalContent>
        <div>
          <button type="button">Close</button>
          <div>
            <img src={img} alt={`${make} ${model} ${year}`} />
          </div>
          <div>
            <h2>
              {make}
              <span>{model}</span>,{year}
            </h2>
          </div>
          <div>
            <p>{city}</p>
            <p>{country}</p>
            <p>Id: {id}</p>
            <p>Year: {year}</p>
            <p>Type: {type}</p>
            <p>Fuel Consumption:{fuelConsumption}</p>
            <p>Engine Size: {engineSize}</p>
          </div>
          <div>
            <h3>Accessories and functionalities:</h3>
            {accessories.length !== 0 &&
              accessories.map((el, index) => <p key={index}>{el}</p>)}
            {functionalities.length !== 0 &&
              functionalities.map((el, index) => <p key={index}>{el}</p>)}
          </div>
          <div>
            <h3>Rental Conditions: </h3>
            {minimumAge && (
              <p>
                Minimum age: <span className="highlight">{minimumAge}</span>
              </p>
            )}
            {rentalConditionsParts.slice(1).map((condition, index) => (
              <p key={index}>{condition}</p>
            ))}
            <p>Mileage: {mileage}</p>
            <p>Price:{rentalPrice}</p>
          </div>
          <a href="tel:+380730000000">Rental car</a>
        </div>
      </ModalContent>
    </Overlay>,
    modalRoot
  );
};
