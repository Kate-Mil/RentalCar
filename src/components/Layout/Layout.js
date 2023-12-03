import { Outlet, useLocation } from "react-router-dom";
import { SearchBar } from "components/SearchBar/SearchBar";
import { Header } from "components/Header/Header";
import { Container } from "./Layout.styled";
import { Footer } from "components/Footer/Footer";

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
      <Footer />
    </Container>
  );
};
export default Layout;
