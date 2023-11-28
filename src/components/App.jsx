import { Home } from '../pages/Home/Home';
import { Favorites } from '../pages/Favorites/Favorites';
import { Catalog } from '../pages/Catalog/Catalog';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import GlobalStyle from './GlobalStyles';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </>
  );
};
