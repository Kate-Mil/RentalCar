import { useEffect, useState, useRef } from "react";
import { FilterByCarBrand } from "components/FilterByCarBrand/FilterByCarBrand";
import { CloseBtn, Img, SearchFormWrapper, Wrapper } from "./SearchBar.styled";
import sprite from "../../img/sprite.svg";

export const SearchBar = () => {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [inputСarBrandValue, setInputСarBrandValue] = useState("");

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    const closeModal = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.addEventListener("click", closeModal);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("click", closeModal);
    };
  }, [isOpen, setIsOpen, containerRef]);

  const toggleDropdown = (e) => {
    console.log("click");
    setIsOpen(!isOpen);
    e.stopPropagation();
  };

  const handleSelectedCarBrand = (selectedCarBrand) => {
    console.log("Selected:", selectedCarBrand);
    setInputСarBrandValue(selectedCarBrand);
    // Вы можете использовать выбранное значение здесь в SearchBar
  };

  return (
    <SearchFormWrapper>
      <Wrapper>
        <input
          type="text"
          autoComplete="off"
          name="query"
          value={inputСarBrandValue}
          // onChange={(e) => setInputСarBrandValue(e.target.value)}
          autoFocus
          placeholder="Enter the text"
        />

        <CloseBtn
          type="button"
          ref={containerRef}
          onClick={(e) => toggleDropdown(e)}
          style={{ transform: isOpen ? "rotate(-180deg)" : "rotate(0)" }}
        >
          <Img width="12" height="12">
            <use href={`${sprite}#chevron-down`}></use>
          </Img>
        </CloseBtn>
        <div>
          {isOpen && (
            <FilterByCarBrand
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              onSelect={handleSelectedCarBrand}
            />
          )}
        </div>
      </Wrapper>
      <input
        type="text"
        autoComplete="off"
        name="query"
        autoFocus
        placeholder="To"
      />
      <input
        type="text"
        autoComplete="off"
        name="query"
        autoFocus
        placeholder="From"
      />
      <input
        type="text"
        autoComplete="off"
        name="query"
        autoFocus
        placeholder="To"
      />

      <button type="submit">Search</button>
    </SearchFormWrapper>
  );
};
