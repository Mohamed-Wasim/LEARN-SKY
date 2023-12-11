import * as yup from "yup";

const StudentRegisterSchema = yup.object().shape({
  name: yup.string().required("THIS_FIELD_IS_REQUIRED"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("THIS_FIELD_IS_REQUIRED"),
  password: yup.string().required("THIS_FIELD_IS_REQUIRED"),
  terms: yup.boolean().required("YOU_MUST_ACCEPT_OUR_TERMS")
});
export default StudentRegisterSchema;
