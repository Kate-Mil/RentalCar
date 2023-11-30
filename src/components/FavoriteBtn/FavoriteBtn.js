import { LikesBnt } from "./FavoriteBtn.styled";

export const FavoriteButton = ({ onClick, isFavorite }) => (
  <LikesBnt
    type="button"
    onClick={onClick}
    style={{ backgroundColor: isFavorite ? "red" : "initial" }}
  >
    Like
  </LikesBnt>
);
