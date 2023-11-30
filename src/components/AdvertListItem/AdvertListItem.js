export const AdvertListItem = ({ data, onClick }) => {
  const {
    // year,
    //id,
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
