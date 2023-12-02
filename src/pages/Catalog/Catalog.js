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
} from "../../redux";

export const Catalog = () => {
  const dispatch = useDispatch();
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
