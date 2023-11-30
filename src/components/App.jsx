import { Home, Catalog, Favorites } from "../pages/index";
import { Route, Routes, Navigate } from "react-router-dom";
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
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
