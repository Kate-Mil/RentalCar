export const processFilter = (filter) => {
  let processedFilter = {};

  for (const key in filter) {
    if (filter[key] === "") {
      continue;
    }

    processedFilter[key] = filter[key];
  }

  if (
    processedFilter.hasOwnProperty("mileageTo") &&
    processedFilter.hasOwnProperty("mileageFrom")
  ) {
    processedFilter.mileageTo = Number(processedFilter.mileageTo);
    processedFilter.mileageFrom = Number(processedFilter.mileageFrom);
  }

  if (processedFilter.hasOwnProperty("price")) {
    processedFilter.price = Number(processedFilter.price);
  }

  return processedFilter;
};
