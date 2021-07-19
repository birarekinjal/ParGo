import * as Yup from "yup";

const resetPassword = Yup.object({
  new_password1: Yup.string()
    .required("This field is required.")
    .min(6, "Password must be of 6-12 characters.")
    .max(12, "Password must be of 6-12 characters."),
  new_password2: Yup.string()
    .required("This field is required.")
    .oneOf([Yup.ref("new_password1")], "Both password must match."),
});

export default resetPassword;
