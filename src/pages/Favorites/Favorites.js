import React from "react";
import { useState } from "react";
import { AdvertListItem } from "components/AdvertListItem/AdvertListItem";
import { ModalLearnMore } from "components/Modal/ModalLearnMore";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  deleteFromFavorites,
  selectFavorites,
} from "../../redux";
import { FavoritesListWrapper } from "./Favorites.styled";

export const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  console.log(favorites);

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
    <FavoritesListWrapper>
      {favorites.length === 0
        ? "There are no favorite adverts"
        : favorites.map((advert) => (
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
