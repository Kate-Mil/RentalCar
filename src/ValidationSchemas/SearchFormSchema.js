import * as Yup from "yup";

export const SearchFormSchema = Yup.object().shape({
  brand: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
  price: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
  mileageFrom: Yup.number()
    .typeError("Car mileage must be a `number`")
    .positive("must be a positive number")
    .min(1, "must be greater than or equal to 1000"),
  mileageTo: Yup.number()
    .typeError("Car mileage must be a `number`")
    .positive("must be a positive number")
    .min(
      Yup.ref("mileageFrom"),
      "Must be greater than or equal to Mileage From"
    ),
});
