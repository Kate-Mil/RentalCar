export const hendleFilterData = (data, filter) => {
  const filteredData = data.filter((item) => {
    if (
      (filter.brand && filter.brand !== item.make) ||
      (filter.mileageFrom &&
        filter.mileageTo &&
        (item.mileage < filter.mileageFrom * 1000 ||
          item.mileage > filter.mileageTo * 1000)) ||
      (filter.price && Number(filter.price) < Number(item.rentalPrice))
    ) {
      return false;
    }
    return true;
  });

  return filteredData;
};
