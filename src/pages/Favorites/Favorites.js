import React from "react";
import { useState, useEffect } from "react";
import { AdvertListItem } from "components/AdvertListItem/AdvertListItem";
import { ModalLearnMore } from "components/Modal/ModalLearnMore";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  deleteFromFavorites,
  selectFavorites,
  selectFilter,
} from "../../redux";
import { FavoritesListWrapper } from "./Favorites.styled";
import { hendleFilterData } from "../../helpers/filter";

export const Favorites = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const favorites = useSelector(selectFavorites);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

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

  useEffect(() => {
    const newFilteredData = hendleFilterData(favorites, filter);
    setFilteredData(newFilteredData);
  }, [filter, favorites]);

  const advertsForRender =
    Object.keys(filter).length === 0 ? favorites : filteredData;

  console.log("filterData", filteredData);

  return (
    <FavoritesListWrapper>
      {favorites.length === 0
        ? "There are no favorite adverts"
        : advertsForRender.map((advert) => (
            <AdvertListItem
              key={advert.id}
              data={advert}
              favorites={favorites}
              onClick={toggleModal}
              onChooseFavorite={handleChooseFavorite}
            />
          ))}
      {showModal && (
        <ModalLearnMore modalData={modalData} onClick={toggleModal} />
      )}
    </FavoritesListWrapper>
  );
};
