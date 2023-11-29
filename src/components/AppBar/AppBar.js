import { NavLink } from "react-router-dom";

export const AppBar = () => {
  return (
    <>
      <ul>
        <NavLink to="/catalog">
          <button>Catalog</button>
        </NavLink>
        <NavLink to="/favorites">
          <button>Favorites</button>
        </NavLink>
      </ul>
    </>
  );
};
