import { NavLink } from "react-router-dom";

export const AppBar = () => {
  return (
    <>
      <ul style={{ display: "flex", gap: 25, flexDirection: "row" }}>
        <NavLink to="/">
          <button>Home</button>
        </NavLink>
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
