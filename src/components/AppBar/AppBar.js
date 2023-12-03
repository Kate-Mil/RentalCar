import { NavLink, useNavigate } from "react-router-dom";

export const AppBar = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
    window.location.reload();
  };

  return (
    <>
      <ul style={{ display: "flex", gap: 25, flexDirection: "row" }}>
        <NavLink to="/">
          <button>Home</button>
        </NavLink>
        <NavLink to="/catalog" onClick={() => handleButtonClick("/catalog")}>
          <button>Catalog</button>
        </NavLink>
        <NavLink
          to="/favorites"
          onClick={() => handleButtonClick("/favorites")}
        >
          <button>Favorites</button>
        </NavLink>
      </ul>
    </>
  );
};
