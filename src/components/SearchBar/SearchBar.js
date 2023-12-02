import { useEffect, useState, useRef } from "react";
import { useFormik } from "formik";
import { FilterByCarBrand } from "components/FilterByCarBrand/FilterByCarBrand";
import { CloseBtn, Img, SearchFormWrapper, Wrapper } from "./SearchBar.styled";
import sprite from "../../img/sprite.svg";
import { SearchFormSchema } from "ValidationSchemas/SearchFormSchema";

export const SearchBar = () => {
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
      await new Promise((r) => setTimeout(r, 500));
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  const toggleDropdown = (e) => {
    console.log("click");
    setIsOpen(!isOpen);
    e.stopPropagation();
  };

  const handleSelectedCarBrand = (selectedCarBrand) => {
    console.log("Selected:", selectedCarBrand);
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
            $error={touched.brand && errors.brand}
            placeholder="Enter the text"
            autoComplete="off"
          />
          {touched.brand && errors.brand && <div>{errors.brand}</div>}
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
          $error={touched.price && errors.price}
          placeholder="To"
          autoComplete="off"
        />
        {touched.price && errors.price && <div>{errors.price}</div>}
      </label>
      <label htmlFor="mileage">
        Сar mileage / km
        <input
          type="text"
          name="mileageFrom"
          value={values.mileageFrom}
          onChange={handleChange}
          onBlur={handleBlur}
          $error={touched.mileageFrom && errors.mileageFrom}
          placeholder="From"
          autoComplete="off"
        />
        {touched.mileageFrom && errors.mileageFrom && (
          <div>{errors.mileageFrom}</div>
        )}
        <input
          type="text"
          name="mileageTo"
          value={values.mileageTo}
          onChange={handleChange}
          onBlur={handleBlur}
          $error={touched.mileageTo && errors.mileageTo}
          placeholder="To"
          autoComplete="off"
        />
        {touched.mileageTo && errors.mileageTo && <div>{errors.mileageTo}</div>}
      </label>

      <button type="submit">Search</button>
    </SearchFormWrapper>
  );
};
