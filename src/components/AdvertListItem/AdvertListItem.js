export const AdvertListItem = ({ data, onClick }) => {
  const {
    // year,
    make,
    // model,
    // type,
    // img,
    // functionalities,
    // rentalPrice,
    // rentalCompany,
    // address,
    // mileage,
  } = data;
  return <div onClick={() => onClick({ data })}>{make}</div>;
};
