import { useState, useEffect } from "react";
import { getAdverts } from "../../API/advertsApi";
import Loader from "../../components/Loader/Loader";
import { AdvertListItem } from "components/AdvertListItem/AdvertListItem";
import { ModalLearnMore } from "../../components/Modal/ModalLearnMore";
import { CatalogListWrapper } from "./Catalog.styled";

export const Catalog = () => {
  const [adverts, setAdverts] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(12);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setIsloading(true);
      try {
        const data = await getAdverts(page);
        setAdverts((prevAdverts) => [...prevAdverts, ...data]);
        setPageLimit(data.length);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    }

    fetchData();
  }, [page]);

  const handleChooseFavorite = (data) => {
    if (!favorites.includes(data)) {
      setFavorites((prevFavorites) => [...prevFavorites, data]);
    } else {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((item) => item !== data)
      );
    }
  };
  console.log(favorites);

  const incrementPage = () => {
    setPage((prevState) => prevState + 1);
  };

  const toggleModal = (modalData) => {
    setShowModal(!showModal);
    setModalData(modalData);
  };
  return (
    <>
      <div>Hello Catalog</div>
      <div>
        <CatalogListWrapper>
          {adverts.map((advert) => (
            <AdvertListItem
              key={advert.id}
              data={advert}
              favorites={favorites}
              onClick={toggleModal}
              onChooseFavorite={handleChooseFavorite}
            />
          ))}
          {error && <p>{error.message}</p>}
          {isloading && <Loader />}
        </CatalogListWrapper>
      </div>
      {pageLimit >= 12 && <button onClick={incrementPage}>LoadMore</button>}
      {showModal && (
        <ModalLearnMore modalData={modalData} onClick={toggleModal} />
      )}
    </>
  );
};
