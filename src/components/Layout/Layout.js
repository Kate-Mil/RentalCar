import { Outlet, useLocation } from "react-router-dom";
import { SearchBar } from "components/SearchBar/SearchBar";
import { Header } from "components/Header/Header";
import { Container } from "./Layout.styled";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <Container>
      <Header />
      <main>
        {!isHomePage && <SearchBar />}
        <div>
          <Outlet />
        </div>
      </main>
    </Container>
  );
};
export default Layout;
