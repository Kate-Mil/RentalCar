import { List, Link } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <>
      <List>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorites">Favorites</Link>
      </List>
    </>
  );
};
