import * as Yup from "yup";

const invitation = Yup.object({
  email: Yup.string()
    .required("This field is required.")
    .email("Enter valid email address."),
});

export default invitation;
