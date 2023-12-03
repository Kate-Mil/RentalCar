export const hendleFilterData = (data, filter) => {
  const filteredData = data.filter((item) => {
    if (
      (filter.brand && filter.brand !== item.make) ||
      (filter.mileageFrom &&
        filter.mileageTo &&
        (item.mileage < Number(filter.mileageFrom) ||
          item.mileage > Number(filter.mileageTo))) ||
      (filter.price && Number(filter.price) < Number(item.rentalPrice))
    ) {
      return false;
    }
    return true;
  });

  return filteredData;
};
