import { useNavigate } from "react-router-dom";
import { List, Link } from "./AppBar.styled";

export const AppBar = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
    window.location.reload();
  };

  return (
    <>
      <List>
        <Link to="/">Home</Link>
        <Link to="/catalog" onClick={() => handleButtonClick("/catalog")}>
          Catalog
        </Link>
        <Link to="/favorites" onClick={() => handleButtonClick("/favorites")}>
          Favorites
        </Link>
      </List>
    </>
  );
};
