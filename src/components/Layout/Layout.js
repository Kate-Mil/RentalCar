import { Outlet } from "react-router-dom";
import { AppBar } from "components/AppBar/AppBar";

const Layout = () => {
  // const location = useLocation();
  // const isHomePage = location.pathname === '/';

  return (
    <>
      <AppBar />
      {/* {!isHomePage && <SearchBar />} */}
      <div>
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
