import { LikesBnt } from "./FavoriteBtn.styled";
import sprite from "../../img/sprite.svg";

export const FavoriteButton = ({ onClick, isFavorite }) => (
  <LikesBnt type="button" onClick={onClick}>
    <svg width="18" height="18">
      {isFavorite ? (
        <use href={`${sprite}#active`}></use>
      ) : (
        <use href={`${sprite}#normal`}></use>
      )}
    </svg>
  </LikesBnt>
);
