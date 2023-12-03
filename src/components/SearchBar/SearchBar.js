import { useFormik } from "formik";
import { generateNumberList } from "helpers/generateNumberList";
import brands from "./makes.json";
import {
  SearchFormWrapper,
  SelectedStyled,
  SelectStyles,
  WrapperInput,
  Label,
  Input,
  Button,
} from "./SearchBar.styled";

import { SearchFormSchema } from "ValidationSchemas/SearchFormSchema";
import { changeFilter } from "../../redux";
import { useDispatch } from "react-redux";

export const SearchBar = () => {
  const dispatch = useDispatch();

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

  const brandOptions = brands.map((price) => ({
    value: price,
    label: price,
  }));

  const prices = generateNumberList(20, 300, 10);
  const priceOptions = prices.map((price) => ({
    value: price,
    label: price,
  }));

  return (
    <SearchFormWrapper onSubmit={handleSubmit}>
      <Label htmlFor="brand">
        Car brand
        <SelectStyles
          type="text"
          name="brand"
          onChange={(selectedOption) =>
            setFieldValue("brand", selectedOption.value)
          }
          onBlur={handleBlur}
          value={brandOptions.find((option) => option.value === values.brand)}
          options={brandOptions}
          placeholder="Enter the text"
          styles={SelectedStyled}
        />
      </Label>
      <Label htmlFor="price">
        Price/ 1 hour
        <SelectStyles
          type="text"
          name="price"
          onChange={(selectedOption) =>
            setFieldValue("price", selectedOption.value)
          }
          onBlur={handleBlur}
          value={priceOptions.find((option) => option.value === values.price)}
          options={priceOptions}
          placeholder="To $"
          styles={SelectedStyled}
        />
      </Label>
      <WrapperInput>
        <Label htmlFor="mileageFrom">
          Сar mileage / km
          <Input
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
        </Label>
        <Label>
          <Input
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
        </Label>
      </WrapperInput>
      <Button type="submit">Search</Button>
    </SearchFormWrapper>
  );
};
