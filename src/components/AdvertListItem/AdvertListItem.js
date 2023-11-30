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

  const handlClick = () => {
    onClick(data);
  };
  return (
    <>
      <div>{make}</div>
      <button onClick={handlClick}>Learn more</button>
    </>
  );
};
