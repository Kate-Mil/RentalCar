import { Outlet } from "react-router-dom";
import { LayoutWrapper, SectionWrapper, OutletWrapper } from "./Layout.styled";

const Layout = () => {
  // const location = useLocation();
  // const isHomePage = location.pathname === '/';

  return (
    <LayoutWrapper>
      <SectionWrapper>
        {/* {!isHomePage && <SearchBar />} */}
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      </SectionWrapper>
    </LayoutWrapper>
  );
};
export default Layout;
