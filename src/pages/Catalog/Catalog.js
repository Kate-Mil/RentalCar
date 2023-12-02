import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { AdvertListItem } from "components/AdvertListItem/AdvertListItem";
import { ModalLearnMore } from "../../components/Modal/ModalLearnMore";
import { CatalogListWrapper } from "./Catalog.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  deleteFromFavorites,
  fetchAdverts,
  incrementPage,
  selectAdverts,
  selectError,
  selectFavorites,
  selectIsLoading,
  selectPage,
  selectPageLimit,
  selectFilter,
} from "../../redux";
import { processFilter } from "../../helpers/filter";
import data from "../../data.json";

export const Catalog = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const favorites = useSelector(selectFavorites);
  const adverts = useSelector(selectAdverts);
  const page = useSelector(selectPage);
  const pageLimit = useSelector(selectPageLimit);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const getAdvertsWithFavorites = adverts.map((advert) => {
    const favoriteIndex = favorites.findIndex((f) => f.id === advert.id);
    return favoriteIndex !== -1 ? favorites[favoriteIndex] : advert;
  });

  useEffect(() => {
    dispatch(fetchAdverts(page));
  }, [dispatch, page]);

  const handleChooseFavorite = (data) => {
    if (!favorites.includes(data)) {
      dispatch(addToFavorites(data));
    } else {
      dispatch(deleteFromFavorites(data));
    }
  };

  const toggleModal = (modalData) => {
    setShowModal(!showModal);
    setModalData(modalData);
  };
  console.log("Filter from Redux state:", filter);

  const filteredData = data.filter((item) => {
    const filterObject = processFilter(filter);
    console.log("filterObject.mileageFrom", Number(filterObject.mileageFrom));
    console.log("filterObject.mileageTo", Number(filterObject.mileageTo));
    console.log("item.mileage", item.mileage);
    if (
      (filterObject.brand && filterObject.brand !== item.make) ||
      (filterObject.mileageFrom !== undefined &&
        filterObject.mileageTo !== undefined &&
        item.mileage >= Number(filterObject.mileageFrom) &&
        item.mileage <= Number(filterObject.mileageTo)) ||
      (filterObject.price && filterObject.price <= item.rentalPrice)
    ) {
      return false;
    }

    return true;
  });

  console.log("Обработанный filter:", processFilter(filter));
  console.log("filteredData:", filteredData);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error.message}</p>}
      <div>
        <CatalogListWrapper>
          {getAdvertsWithFavorites.map((advert) => (
            <AdvertListItem
              key={advert.id}
              data={advert}
              favorites={favorites}
              onClick={toggleModal}
              onChooseFavorite={handleChooseFavorite}
            />
          ))}
        </CatalogListWrapper>
      </div>
      {adverts.length % pageLimit === 0 && (
        <button onClick={() => dispatch(incrementPage())}>LoadMore</button>
      )}
      {showModal && (
        <ModalLearnMore modalData={modalData} onClick={toggleModal} />
      )}
    </>
  );
};
