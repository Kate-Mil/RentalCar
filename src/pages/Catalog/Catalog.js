import { useState, useEffect } from "react";
import { getAdverts } from "../../API/advertsApi";
import Loader from "../../components/Loader/Loader";

export const Catalog = () => {
  const [adverts, setAdverts] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      setIsloading(true);
      try {
        const data = await getAdverts(page);
        console.log({ data });
        setAdverts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    }

    fetchData();
  }, [page]);

  const hendleClick = () => {
    setPage(page + 1);
  };
  return (
    <>
      <div>Hello Catalog</div>;
      <div>
        <ul>
          {adverts.map(({ id, make }) => (
            <li key={id}>
              <div>{make}</div>
            </li>
          ))}
          {error && <p>{error.message}</p>}
          {isloading && <Loader />}
        </ul>
      </div>
      <button onClick={hendleClick}>LoadMore</button>
    </>
  );
};
