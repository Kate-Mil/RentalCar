import { Outlet } from "react-router-dom";
import { AppBar } from "components/AppBar/AppBar";
import { LayoutWrapper, SectionWrapper, OutletWrapper } from "./Layout.styled";

const Layout = () => {
  // const location = useLocation();
  // const isHomePage = location.pathname === '/';

  return (
    <LayoutWrapper>
      <SectionWrapper>
        <AppBar />
        {/* {!isHomePage && <SearchBar />} */}
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      </SectionWrapper>
    </LayoutWrapper>
  );
};
export default Layout;
