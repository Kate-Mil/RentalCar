import { List, Item, Container } from "./FilterByCarBrand.styled";
import { selectError, selectIsLoading } from "../../redux";

import makes from "./makes.json";
import { useSelector } from "react-redux";

export const FilterByCarBrand = ({ isOpen, onClose, onSelect }) => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleItemClick = (name) => {
    onSelect(name);
  };

  return (
    <Container onClick={() => onClose()}>
      <List isOpen={isOpen}>
        {makes.map((name, index) => (
          <Item key={index} onClick={() => handleItemClick(name)}>
            {name}
          </Item>
        ))}
        {error && <p>{error.message}</p>}
        {isLoading && <p>Loading...</p>}
      </List>
    </Container>
  );
};
