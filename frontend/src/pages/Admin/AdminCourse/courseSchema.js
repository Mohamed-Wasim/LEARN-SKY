import * as yup from "yup";
export const CourseSchema = yup.object().shape({
  code: yup.string().required("THIS_FIELD_IS_REQUIRED"),
  name: yup.string().required("THIS_FIELD_IS_REQUIRED"),
  // crsPrfleImg: yup.string().required("THIS_FIELD_IS_REQUIRED"),
  desc: yup.string().required("THIS_FIELD_IS_REQUIRED"),
  crsType: yup.string().required("THIS_FIELD_IS_REQUIRED"),
  crsCat: yup.string().required("THIS_FIELD_IS_REQUIRED"),
  actulFee: yup
    .number()
    .min(1, "Value must be greater than 0")
    .required("THIS_FIELD_IS_REQUIRED"),
  discFee: yup
    .number()
    .min(1, "Value must be greater than 0")
    .required("THIS_FIELD_IS_REQUIRED"),
  duration: yup
    .number()
    .min(1, "Value must be greater than 0")
    .required("THIS_FIELD_IS_REQUIRED"),
  offers: yup.string().required("THIS_FIELD_IS_REQUIRED"),
  crsTopicInput: yup.string(),
  crsTopcHrs: yup.number(),
  topics: yup.array(),
  languages: yup.array()
});

export const CorseTypeFormSchema = yup.object().shape({
  TypeNm: yup.string().required("THIS_FIELD_IS_REQUIRED")
});

export const CourseCatFormSchema = yup.object().shape({
  CatNm: yup.string().required("THIS_FIELD_IS_REQUIRED")
});
