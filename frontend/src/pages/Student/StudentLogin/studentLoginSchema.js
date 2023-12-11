import * as yup from "yup";

const StudentLoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("THIS_FIELD_IS_REQUIRED"),
  password: yup.string().required("THIS_FIELD_IS_REQUIRED")
});
export default StudentLoginSchema;
