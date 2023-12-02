export const processFilter = (filter) => {
  let processedFilter = {};

  for (const key in filter) {
    if (filter[key] === "") {
      continue;
    }

    processedFilter[key] = filter[key];
  }

  //   if (
  //     processedFilter.hasOwnProperty("mileageTo") &&
  //     processedFilter.hasOwnProperty("mileageFrom")
  //   ) {
  //     processedFilter.mileage =
  //       processedFilter.mileageTo - processedFilter.mileageFrom;

  //     delete processedFilter.mileageTo;
  //     delete processedFilter.mileageFrom;
  //   }

  if (processedFilter.hasOwnProperty("price")) {
    processedFilter.price = "$" + processedFilter.price;
  }

  return processedFilter;
};
