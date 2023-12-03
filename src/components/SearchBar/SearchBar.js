import { useEffect, useState, useRef } from "react";
import { useFormik } from "formik";
import { FilterByCarBrand } from "components/FilterByCarBrand/FilterByCarBrand";
import { CloseBtn, Img, SearchFormWrapper, Wrapper } from "./SearchBar.styled";
import sprite from "../../img/sprite.svg";
import { SearchFormSchema } from "ValidationSchemas/SearchFormSchema";
import { changeFilter } from "../../redux";
import { useDispatch } from "react-redux";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

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

  const {
    values,
    touched,
    errors,
    setFieldValue,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: {
      brand: "",
      price: "",
      mileageFrom: "",
      mileageTo: "",
    },
    validationSchema: SearchFormSchema,
    onSubmit: async (values) => {
      dispatch(changeFilter(values));
      resetForm();
    },
  });

  const toggleDropdown = (e) => {
    setIsOpen(!isOpen);
    e.stopPropagation();
  };

  const handleSelectedCarBrand = (selectedCarBrand) => {
    setFieldValue("brand", selectedCarBrand);
  };

  return (
    <SearchFormWrapper onSubmit={handleSubmit}>
      <Wrapper>
        <label htmlFor="brand">
          Car brand
          <input
            type="text"
            name="brand"
            value={values.brand}
            onBlur={handleBlur}
            readOnly
            className={touched.brand && errors.brand ? "error" : ""}
            placeholder="Enter the text"
            autoComplete="off"
          />
          {touched.brand && errors.brand && (
            <div className="error-message">{errors.brand}</div>
          )}
        </label>
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
        {isOpen && (
          <FilterByCarBrand
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            onSelect={handleSelectedCarBrand}
          />
        )}
      </Wrapper>
      <label htmlFor="price">
        Price/ 1 hour
        <input
          type="text"
          name="price"
          value={values.price}
          onChange={handleChange}
          onBlur={handleBlur}
          className={touched.price && errors.price ? "error" : ""}
          placeholder="To"
          autoComplete="off"
        />
        {touched.price && errors.price && (
          <div className="error-message">{errors.price}</div>
        )}
      </label>
      <label htmlFor="mileageFrom">
        Сar mileage / km
        <input
          type="text"
          name="mileageFrom"
          value={values.mileageFrom}
          onChange={handleChange}
          onBlur={handleBlur}
          className={touched.mileageFrom && errors.mileageFrom ? "error" : ""}
          placeholder="From"
          autoComplete="off"
        />
        {touched.mileageFrom && errors.mileageFrom && (
          <div className="error-message">{errors.mileageFrom}</div>
        )}
        <input
          type="text"
          name="mileageTo"
          value={values.mileageTo}
          onChange={handleChange}
          onBlur={handleBlur}
          className={touched.mileageTo && errors.mileageTo ? "error" : ""}
          placeholder="To"
          autoComplete="off"
        />
        {touched.mileageTo && errors.mileageTo && (
          <div className="error-message">{errors.mileageTo}</div>
        )}
      </label>

      <button type="submit">Search</button>
    </SearchFormWrapper>
  );
};
