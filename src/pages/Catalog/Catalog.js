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
  changeFilter,
  selectFilter,
} from "../../redux";
import { processFilter } from "../../helpers/filter";

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

  const filteredData = getAdvertsWithFavorites.filter((item) => {
    const filterObject = processFilter(filter);

    if (
      (filterObject.brand && filterObject.brand !== item.make) ||
      (filterObject.mileageFrom &&
        filterObject.mileageTo &&
        item.mileage >= filterObject.mileageFrom &&
        item.mileage <= filterObject.mileageTo) ||
      (filterObject.price &&
        filterObject.price < Number(item.rentalPrice.slice(1)))
    ) {
      return false;
    }
    return true;
  });

  const advertsForRender =
    Object.keys(filter).length === 0 ? getAdvertsWithFavorites : filteredData;

  useEffect(() => {
    dispatch(fetchAdverts(page));
    dispatch(changeFilter({}));
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

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error.message}</p>}
      <div>
        <CatalogListWrapper>
          {advertsForRender.map((advert) => (
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
