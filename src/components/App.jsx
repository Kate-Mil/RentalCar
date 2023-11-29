import { Home, Catalog, Favorites, NotFoundPage } from "../pages/index";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import GlobalStyle from "./GlobalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
