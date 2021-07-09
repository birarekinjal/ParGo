import * as Yup from "yup";

const editUser = Yup.object({
  name: Yup.string()
    .required("This field is required.")
    .matches(
      /^([a-zA-Z\s])*$/,
      "Numbers and special characters are not allowed."
    ),
  bio: Yup.string()
    .required("This field is required.")
    .matches(
      /^([a-zA-Z\s])*$/,
      "Numbers and special characters are not allowed."
    ),
  contactNo: Yup.number()
    .typeError("Value must be a number.")
    .integer("Value must be a number.")
    .required("Required.")
    .min(1000000000, "Enter valid number")
    .max(9999999999, "Enter valid number"),

  experience: Yup.string().required("This field is required."),

  location: Yup.string()
    .required("This field is required.")
    .matches(
      /^([a-zA-Z\s])*$/,
      "Numbers and special characters are not allowed."
    ),
  occuption: Yup.string()
    .required("This field is required.")
    .matches(
      /^([a-zA-Z\s])*$/,
      "Numbers and special characters are not allowed."
    ),
  passion: Yup.string()
    .required("This field is required.")
    .matches(
      /^([a-zA-Z\s])*$/,
      "Numbers and special characters are not allowed."
    ),
  website: Yup.string()
    .required("This field is required")
    .url("Enter correct url!"),
});

export default editUser;
