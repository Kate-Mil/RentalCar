import * as Yup from "yup";

export const SearchFormSchema = Yup.object().shape({
  brand: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
  // .required("Required"),
  price: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
  // .required("Required"),
  mileageFrom: Yup.number().positive().min(1),
  // .required("Required"),
  mileageTo: Yup.number().positive().min(1),
  // .required("Required")
});
