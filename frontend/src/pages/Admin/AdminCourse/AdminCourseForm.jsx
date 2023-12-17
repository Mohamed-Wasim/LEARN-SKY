import { useFormik } from "formik";
import { LskyToaster } from "../../../components/LskyToaster";
import LskyFormField from "../../../components/LskyFormField";
import { useTranslation } from "react-i18next";
import {
  CourseSchema,
  CorseTypeFormSchema,
  CourseCatFormSchema
} from "./courseSchema";
import {
  fetchCourseType,
  createCourseType,
  updateCourseType
} from "../../../services/courseTypeService";
import {
  fetchCourseCat,
  createCourseCat,
  updateCourseCat
} from "../../../services/courseCatagoryService";
import { createCourse } from "../../../services/courseService";
import LskyPageHeader from "../../../components/LskyPageHeader/index";
import React, { useEffect, useState } from "react";
import { Form, Row, Col, FormLabel, Stack } from "react-bootstrap";
// import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { useNavigate, useLocation } from "react-router-dom";
import LskyFileUpload from "../../../components/LskyFileUpload";
import LskyButton from "../../../components/LskyButton";
import LskyBadge from "../../../components/LskyBadge/LskyBadge";
import { SearchLanguages } from "../../../services/domainService";
import SimpleSelect from "../../../components/SimpleSelect/SimplSelect";
import LskyModal from "../../../components/LskyModal";

const AdminCourseForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); //translation
  const [courseId, setCourseId] = useState(""); //coures edit id
  const [oCourseFormData, setCourseFormData] = useState({}); //edit course
  const [oCourseTypeFormData, setCourseTypeFormData] = useState({}); //edit course data
  const [oCourseCatFormData, setCourseCatFormData] = useState({}); //edit course data
  const [isCrsTypeModal, setCrsTypeModal] = useState(false); //key for Course ype Form modal show
  const [isCrsCatModal, setCrsCatModal] = useState(false); //key for course catagory Form modal show
  const [aCourseCat, setCourseCat] = useState([]);
  const [aCourseType, setCourseType] = useState([
    { _id: "FIX", TypeNm: "Fixed" },
    { _id: "FLX", TypeNm: "Flexible" }
  ]);
  /**
   * Function for create and Update course deatailes
   * @param {object} oCourseFormik.values
   */
  const handleSubmitCourseForm = async (frmVlus) => {
    /*This Create course catagory  Functionality*/
    try {
      const oRes = await createCourse(frmVlus);
      if (oRes && oRes.message) {
        LskyToaster(
          "warning",
          t("COURSE_CATAGORY_IS_ALREADY_AVAILABLE."),
          3000
        );
        return;
      } else {
        LskyToaster("success", t("SAVED_SUCCESSFULLY"), 3000);
      }
      oCourseFormik.resetForm();
    } catch (err) {
      LskyToaster(
        "error",
        t("UNABLE_TO_CREATEPLEASE_CONTACT_ADMINISTRATOR"),
        3000
      );
    }
  };

  /*add course topics */
  const onAddCourseTopic = (type) => {
    const tempCrsTopic = JSON.parse(
      JSON.stringify(oCourseFormik.values.topics)
    );
    const inputCrsTopic = JSON.parse(
      JSON.stringify(oCourseFormik.values.crsTopicInput)
    );
    const inputCrsCrsHrs = JSON.parse(
      JSON.stringify(oCourseFormik.values.crsTopcHrs)
    );
    tempCrsTopic.push({ topic: inputCrsTopic, hrs: inputCrsCrsHrs });
    oCourseFormik.setFieldValue("topics", tempCrsTopic);
    oCourseFormik.setFieldValue("crsTopicInput", "");
    oCourseFormik.setFieldValue("crsTopcHrs", 0);
  };

  const removeCourseType = (index) => {
    const tempCrsTopic = JSON.parse(
      JSON.stringify(oCourseFormik.values.topics)
    );
    tempCrsTopic.splice(index, 1);
    oCourseFormik.setFieldValue("topics", tempCrsTopic);
  };

  /* Course Formik configutaion */
  const oCourseFormik = useFormik({
    validationSchema: CourseSchema,
    enableReinitialize: true,
    onSubmit: handleSubmitCourseForm,
    initialValues: {
      code: oCourseFormData?.code ?? "",
      name: oCourseFormData?.name ?? "",
      // crsPrfleImg: oCourseFormData?.crsPrfleImg ?? "",
      desc: oCourseFormData?.desc ?? "",
      crsType: oCourseFormData?.crsType ?? "",
      crsCat: oCourseFormData?.crsCat ?? "",
      actulFee: oCourseFormData?.actulFee ?? 0,
      discFee: oCourseFormData?.discFee ?? 0,
      duration: oCourseFormData?.duration ?? 0,
      offers: oCourseFormData?.offers ?? "",
      crsTopicInput: oCourseFormData?.crsTopicInput ?? "",
      crsTopcHrs: oCourseFormData?.crsTopcHrs ?? 0,
      topics: oCourseFormData?.topics ?? [],
      languages: oCourseFormData?.languages ?? []
    }
  });

  /**
   * Function for create and Update course type
   * @param {object} oCourseTypeFormik.values along with this CourseTypeId is added
   */
  const handleSubmitCourseTypeForm = async (frmVlus) => {
    if (oCourseTypeFormData?._id) {
      /*This is Update course Type Functionality*/
      frmVlus = {
        ...frmVlus,
        _id: oCourseTypeFormData._id
      };
      try {
        const oRes = await updateCourseType(frmVlus);
        if (oRes && oRes.message) {
          LskyToaster("warning", t("COURSE_TYPE_IS_ALREADY_AVAILABLE."), 3000);
          return;
        } else {
          LskyToaster("success", t("UPDATED_SUCCESSFULLY"), 3000);
        }
        getCourseTypes();
        oCourseTypeFormik.resetForm();
        setCrsTypeModal(false);
      } catch (err) {
        LskyToaster(
          "error",
          t("UNABLE_TO_UPDATEPLEASE_CONTACT_ADMINISTRATOR"),
          3000
        );
      }
    } else {
      /*This Create batch Type Functionality*/
      try {
        const oRes = await createCourseType(frmVlus);
        console.log("oRes", oRes);
        if (oRes && oRes.message) {
          LskyToaster("warning", t("BATCH_TYPE_IS_ALREADY_AVAILABLE."), 3000);
          return;
        } else {
          LskyToaster("success", t("SAVED_SUCCESSFULLY"), 3000);
          oCourseFormik.setFieldValue("crsType", oRes._id);
        }
        getCourseTypes();
        oCourseTypeFormik.resetForm();
        setCrsTypeModal(false);
      } catch (err) {
        LskyToaster(
          "error",
          t("UNABLE_TO_CREATEPLEASE_CONTACT_ADMINISTRATOR"),
          3000
        );
      }
    }
  };

  /* Course Type Formik configutaion */
  const oCourseTypeFormik = useFormik({
    validationSchema: CorseTypeFormSchema,
    enableReinitialize: true,
    onSubmit: handleSubmitCourseTypeForm,
    initialValues: {
      TypeNm: oCourseTypeFormData.TypeNm ?? ""
    }
  });

  /**
   * Function for create and Update course catagory
   * @param {object} oCourseCatagoryFormik.values along with this course CatagoryId is added
   */
  const handleSubmitCourseCatForm = async (frmVlus) => {
    if (oCourseCatFormData?._id) {
      /*This is Update course catagory Functionality*/
      frmVlus = {
        ...frmVlus,
        _id: oCourseCatFormData._id
      };
      try {
        const oRes = await updateCourseCat(frmVlus);
        if (oRes && oRes.message) {
          LskyToaster(
            "warning",
            t("COURSE_CATAGORY_IS_ALREADY_AVAILABLE."),
            3000
          );
          return;
        } else {
          LskyToaster("success", t("UPDATED_SUCCESSFULLY"), 3000);
        }
        getCourseCatagory();
        oCourseCatagoryFormik.resetForm();
        setCrsCatModal(false);
      } catch (err) {
        console.log("err", err);
        LskyToaster(
          "error",
          t("UNABLE_TO_UPDATEPLEASE_CONTACT_ADMINISTRATOR"),
          3000
        );
      }
    } else {
      /*This Create course catagory  Functionality*/
      try {
        const oRes = await createCourseCat(frmVlus);
        if (oRes && oRes.message) {
          LskyToaster(
            "warning",
            t("COURSE_CATAGORY_IS_ALREADY_AVAILABLE."),
            3000
          );
          return;
        } else {
          LskyToaster("success", t("SAVED_SUCCESSFULLY"), 3000);
          oCourseFormik.setFieldValue("crsCat", oRes._id);
        }
        getCourseCatagory();
        oCourseCatagoryFormik.resetForm();
        setCrsCatModal(false);
      } catch (err) {
        LskyToaster(
          "error",
          t("UNABLE_TO_CREATEPLEASE_CONTACT_ADMINISTRATOR"),
          3000
        );
      }
    }
  };

  /* Course Catagory Formik configutaion */
  const oCourseCatagoryFormik = useFormik({
    validationSchema: CourseCatFormSchema,
    enableReinitialize: true,
    onSubmit: handleSubmitCourseCatForm,
    initialValues: {
      CatNm: oCourseCatFormData.CatNm ?? ""
    }
  });

  /* Function for fetch course types */
  const getCourseTypes = async () => {
    try {
      const aCrsTypes = await fetchCourseType();
      setCourseType(aCrsTypes);
    } catch (err) {
      LskyToaster(
        "error",
        t("UNKNOWN_ERROR_PLEASE_CONTACT_YOUR_ADMINISTRATOR"),
        3000
      );
    }
  };

  /* Function for fetch course catagory */
  const getCourseCatagory = async () => {
    try {
      const aCrsCat = await fetchCourseCat();
      setCourseCat(aCrsCat);
    } catch (err) {
      LskyToaster(
        "error",
        t("UNKNOWN_ERROR_PLEASE_CONTACT_YOUR_ADMINISTRATOR"),
        3000
      );
    }
  };

  /* Handling Batch type modal and set values */
  const handleModal = (isEdit, ForKey) => {
    if (ForKey === "type") {
      if (isEdit) {
        const types = aCourseType.filter((type) => {
          return type._id === oCourseFormik.values.crsType;
        });
        setCourseTypeFormData(types[0]);
      }
      setCrsTypeModal(true);
    } else {
      if (isEdit) {
        const cat = aCourseCat.filter((cat) => {
          return cat._id === oCourseFormik.values.crsCat;
        });
        setCourseCatFormData(cat[0]);
      }
      setCrsCatModal(true);
    }
  };

  /* Function for fetch language detailes */
  const srearchLanguage = async (value) => {
    try {
      if (value && value.length > 2) {
        const data = await SearchLanguages(value);
        if (data.length > 0) {
          return data;
        } else {
          return data;
        }
      }
    } catch (err) {
      LskyToaster(
        "error",
        t("UNABLE_TO_CREATEPLEASE_CONTACT_ADMINISTRATOR"),
        3000
      );
    }
  };

  /* useEffect for call fetch course types  and catagoryfunctions */
  useEffect(() => {
    // getCourseTypes();
    getCourseCatagory();
  }, []);
  return (
    <>
      <LskyPageHeader
        heading={t("COURSE")}
        subHeading={courseId ? t("EDIT_COURSE") : t("CREATE_NEW_COURSE")}
      />
      <LskyModal
        showMdl={isCrsTypeModal}
        mdlHndlr={() => {
          oCourseTypeFormik.resetForm();
          setCrsTypeModal();
        }}
        header={
          oCourseTypeFormData._id
            ? t("EDIT_COURSE_TYPE")
            : t("CREATE_NEW_COURSE_TYPE")
        }
      >
        <Form noValidate onSubmit={oCourseTypeFormik.handleSubmit}>
          <Row className="ms-5 mb-5">
            <LskyFormField
              label="COURSE_TYPE_NAME"
              fieldName="TypeNm"
              field="input"
              handleChange={oCourseTypeFormik.handleChange}
              handleBlur={oCourseTypeFormik.handleBlur}
              errors={oCourseTypeFormik.errors.TypeNm}
              value={oCourseTypeFormik.values.TypeNm}
              touched={oCourseTypeFormik.touched.TypeNm}
              isRequired={true}
            />
          </Row>
          <Row>
            <Stack direction="horizontal" gap={2}>
              <LskyButton variant="primary" type="submit" className="ms-auto">
                {oCourseTypeFormData?._id ? t("UPDATE") : t("SAVE")}
              </LskyButton>
              <LskyButton
                variant="secondary"
                className="ms-2"
                type="reset"
                onClick={() => {
                  oCourseTypeFormik.resetForm();
                  setCrsTypeModal(false);
                }}
              >
                {t("CANCEL")}
              </LskyButton>
            </Stack>
          </Row>
        </Form>
      </LskyModal>
      <LskyModal
        showMdl={isCrsCatModal}
        mdlHndlr={() => {
          oCourseCatagoryFormik.resetForm();
          setCrsCatModal();
        }}
        header={
          oCourseCatFormData._id
            ? t("EDIT_COURSE_CATAGORY")
            : t("CREATE_NEW_COURSE_CATAGORY")
        }
      >
        <Form noValidate onSubmit={oCourseCatagoryFormik.handleSubmit}>
          <Row className="ms-5 mb-5">
            <LskyFormField
              label="COURSE_CATAGORY_NAME"
              fieldName="CatNm"
              field="input"
              handleChange={oCourseCatagoryFormik.handleChange}
              handleBlur={oCourseCatagoryFormik.handleBlur}
              errors={oCourseCatagoryFormik.errors.CatNm}
              value={oCourseCatagoryFormik.values.CatNm}
              touched={oCourseCatagoryFormik.touched.CatNm}
              isRequired={true}
            />
          </Row>
          <Row>
            <Stack direction="horizontal" gap={2}>
              <LskyButton variant="primary" type="submit" className="ms-auto">
                {oCourseCatFormData?._id ? t("UPDATE") : t("SAVE")}
              </LskyButton>
              <LskyButton
                variant="secondary"
                className="ms-2"
                type="reset"
                onClick={() => {
                  oCourseCatagoryFormik.resetForm();
                  setCrsCatModal(false);
                }}
              >
                {t("CANCEL")}
              </LskyButton>
            </Stack>
          </Row>
        </Form>
      </LskyModal>
      <div className="form-list_container ps-6">
        <Form noValidate onSubmit={oCourseFormik.handleSubmit}>
          <div className="from-view_container ">
            <Col sm={12} md={8} lg={8} className="p-0 ps-1">
              <div className="list-form_container">
                <Row className="m-0 mb-5">
                  <Col sm={12} md={6} lg={6} className="p-0 pe-2">
                    <LskyFormField
                      label="COURSE_CODE"
                      placeholder={t("COURSE_CODE")}
                      fieldName="code"
                      field="input"
                      handleChange={oCourseFormik.handleChange}
                      handleBlur={oCourseFormik.handleBlur}
                      errors={oCourseFormik.errors.code}
                      value={oCourseFormik.values.code}
                      touched={oCourseFormik.touched.code}
                      isRequired={true}
                      disabled={courseId}
                    />
                  </Col>
                  <Col sm={12} md={6} lg={6} className="p-0 ps-2">
                    <LskyFormField
                      label="COURSE_NAME"
                      placeholder={t("COURSE_NAME")}
                      fieldName="name"
                      field="input"
                      handleChange={oCourseFormik.handleChange}
                      handleBlur={oCourseFormik.handleBlur}
                      errors={oCourseFormik.errors.name}
                      value={oCourseFormik.values.name}
                      touched={oCourseFormik.touched.name}
                      isRequired={true}
                    />
                  </Col>
                </Row>
                <Row className="m-0 mb-5">
                  <Col sm={12} md={6} lg={6} className="p-0 pe-2">
                    <LskyFormField
                      label="DESCRIPTION"
                      placeholder={t("DESCRIPTION")}
                      fieldName="desc"
                      field="input"
                      handleChange={oCourseFormik.handleChange}
                      value={oCourseFormik.values.desc}
                    />
                  </Col>
                  <Col sm={12} md={6} lg={6} className="p-0 ps-2">
                    {/* <FormLabel className="fs-3 text-secondary">
                      {t("COURSE_PROFILE_IMAGE")}
                    </FormLabel>
                    <LskyFileUpload
                      src={oCourseFormik.values.crsPrfleImg}
                      accept=".gif,.png,.jpg,.jpeg,.pdf"
                      onSelectFiles={(e) => {
                        oCourseFormik.setFieldValue("crsPrfleImg", e);
                      }}
                    /> */}
                  </Col>
                </Row>
                <Row className="m-0 mb-5">
                  <Col sm={12} md={6} lg={6} className="p-0 pe-2">
                    <Row className="m-0 mb-5">
                      <Col sm={12} md={8} lg={8} className="p-0 pe-2">
                        <SimpleSelect
                          className="basic-single"
                          classNamePrefix="select"
                          defaultValue={oCourseFormik.values.crsCat}
                          // isDisabled={isDisabled}
                          name="crsCat"
                          options={aCourseCat}
                          labelKey="CatNm"
                          valueKey="CatNm"
                          label="COURSE_CATAGORY"
                          isRequired={true}
                          handleBlur={oCourseFormik.handleBlur}
                          errors={oCourseFormik.errors.crsCat}
                          touched={oCourseFormik.touched.crsCat}
                          onChange={(e) => {
                            console.log(e);
                            oCourseFormik.setFieldValue("crsCat", e.value);
                          }}
                        />
                      </Col>
                      <Col sm={12} md={3} lg={3} className="p-0 ">
                        <Stack gap={2} direction="horizontal">
                          <LskyButton
                            variant="primary"
                            className="mt-5"
                            onClick={() => handleModal(null, "cat")}
                          >
                            {t("ADD")}
                          </LskyButton>
                          <LskyButton
                            variant="secondary"
                            className="mt-5"
                            onClick={() => handleModal(true, "cat")}
                            disabled={!oCourseFormik.values.crsCat}
                          >
                            {t("EDIT")}
                          </LskyButton>
                        </Stack>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={12} md={6} lg={6} className="p-0 ps-2">
                    <Row className="m-0 mb-5">
                      <Col sm={12} md={8} lg={8} className="p-0 pe-2">
                        <SimpleSelect
                          className="basic-single"
                          classNamePrefix="select"
                          label="COURSE_TYPE"
                          fieldName="crsType"
                          field="select"
                          labelKey="TypeNm"
                          valueKey="_id"
                          options={aCourseType && aCourseType}
                          handleBlur={oCourseFormik.handleBlur}
                          defaultValue={oCourseFormik.values.crsType}
                          onChange={(e) =>
                            oCourseFormik.setFieldValue("crsType", e.value)
                          }
                          errors={oCourseFormik.errors.crsType}
                          touched={oCourseFormik.touched.crsType}
                          isRequired={true}
                        />
                      </Col>
                      <Col sm={12} md={3} lg={3} className="p-0 ">
                        <Stack gap={2} direction="horizontal">
                          <LskyButton
                            variant="primary"
                            className="mt-5"
                            onClick={() => handleModal(null, "type")}
                            disabled={true}
                          >
                            {t("ADD")}
                          </LskyButton>
                          <LskyButton
                            variant="secondary"
                            className="mt-5"
                            onClick={() => handleModal(true, "type")}
                            disabled={true}
                          >
                            {t("EDIT")}
                          </LskyButton>
                        </Stack>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="m-0 mb-5">
                  <Col sm={12} md={6} lg={6} className="p-0 pe-2">
                    <LskyFormField
                      label="ACTUAL_FEE"
                      placeholder={t("ACTUAL_FEE")}
                      fieldName="actulFee"
                      field="input"
                      handleChange={oCourseFormik.handleChange}
                      handleBlur={oCourseFormik.handleBlur}
                      value={oCourseFormik.values.actulFee}
                      errors={oCourseFormik.errors.actulFee}
                      touched={oCourseFormik.touched.actulFee}
                      isRequired={true}
                    />
                  </Col>
                  <Col sm={12} md={6} lg={6} className="p-0 ps-2">
                    <LskyFormField
                      label="DISCOUNT_FEE"
                      placeholder={t("DISCOUNT_FEE")}
                      fieldName="discFee"
                      field="input"
                      handleChange={oCourseFormik.handleChange}
                      handleBlur={oCourseFormik.handleBlur}
                      value={oCourseFormik.values.discFee}
                      errors={oCourseFormik.errors.discFee}
                      touched={oCourseFormik.touched.discFee}
                      isRequired={true}
                    />
                  </Col>
                </Row>
                <Row className="m-0 mb-5">
                  <Col sm={12} md={6} lg={6} className="p-0 pe-2">
                    <LskyFormField
                      label="DURATION"
                      placeholder={t("COURSE_DURATION")}
                      fieldName="duration"
                      field="input"
                      handleChange={oCourseFormik.handleChange}
                      handleBlur={oCourseFormik.handleBlur}
                      value={oCourseFormik.values.duration}
                      errors={oCourseFormik.errors.duration}
                      touched={oCourseFormik.touched.duration}
                      isRequired={true}
                    />
                  </Col>
                  <Col sm={12} md={6} lg={6} className="p-0 ps-2">
                    <LskyFormField
                      label="COURSE_OFFERS"
                      placeholder={t("COURSE_OFFERS")}
                      fieldName="offers"
                      field="input"
                      handleChange={oCourseFormik.handleChange}
                      handleBlur={oCourseFormik.handleBlur}
                      errors={oCourseFormik.errors.offers}
                      value={oCourseFormik.values.offers}
                      touched={oCourseFormik.touched.offers}
                    />
                  </Col>
                </Row>
                <Row className="m-0 mb-5">
                  <Col sm={12} md={6} lg={6} className="p-0 pe-2">
                    <Row className="m-0 mb-5">
                      <Col sm={12} md={8} lg={8} className="p-0 pe-2">
                        <LskyFormField
                          label="TOPICS"
                          placeholder={t("COURSE_TOPICS")}
                          fieldName="crsTopicInput"
                          field="input"
                          handleChange={oCourseFormik.handleChange}
                          handleBlur={oCourseFormik.handleBlur}
                          value={oCourseFormik.values.crsTopicInput}
                          errors={oCourseFormik.errors.crsTopicInput}
                          touched={oCourseFormik.touched.crsTopicInput}
                          isRequired={true}
                        />
                      </Col>
                      <Col sm={12} md={3} lg={3} className="p-0 ps-2">
                        <Stack gap={2} direction="horizontal">
                          <LskyFormField
                            label="HOURS"
                            placeholder={t("HOURS")}
                            fieldName="crsTopcHrs"
                            field="input"
                            handleChange={oCourseFormik.handleChange}
                            handleBlur={oCourseFormik.handleBlur}
                            value={oCourseFormik.values.crsTopcHrs}
                            errors={oCourseFormik.errors.crsTopcHrs}
                            touched={oCourseFormik.touched.crsTopcHrs}
                            isRequired={true}
                          />
                          <LskyButton
                            variant="primary"
                            className="mt-5"
                            onClick={() => onAddCourseTopic()}
                            disabled={
                              !oCourseFormik.values.crsTopicInput ||
                              !oCourseFormik.values.crsTopcHrs
                            }
                          >
                            {t("ADD")}
                          </LskyButton>
                        </Stack>
                      </Col>
                    </Row>
                    <Row className=" mb-5">
                      <div className="badge-container">
                        {oCourseFormik?.values?.topics?.map((badge, index) => (
                          <LskyBadge
                            key={index}
                            text={`${badge.topic} - ${badge.hrs}Hrs`}
                            onRemove={() => removeCourseType(index)}
                            bg="info"
                            iconColor="black"
                          />
                        ))}
                      </div>
                    </Row>
                  </Col>
                  <Col sm={12} md={6} lg={6} className="p-0 ps-2">
                    <SimpleSelect
                      fieldName="languages"
                      field="select"
                      isMulti={true}
                      isApi={true}
                      isSearchable={true}
                      label="COURSE_LANGUAGES"
                      labelKey="name"
                      loadOptions={srearchLanguage}
                      defaultValue={oCourseFormik.values.languages}
                      selectValue={oCourseFormik.values.languages}
                      onChange={(e) =>
                        oCourseFormik.setFieldValue("languages", e)
                      }
                      data={oCourseFormik.values.languages}
                      valueKey="_id"
                      placeholder={t("TYPE_LANGUAGES")}
                      isRequired={true}
                    />
                  </Col>
                </Row>
                <Row className="m-0 mb-5">
                  <Stack direction="horizontal" gap={2}>
                    <LskyButton className="ms-auto" type="submit">
                      {courseId ? t("UPDATE") : t("SAVE")}
                    </LskyButton>
                    <LskyButton
                      variant="secondary"
                      onClick={() => navigate(-1)}
                    >
                      {t("CANCEL")}
                    </LskyButton>
                    <LskyButton
                      variant="secondary"
                      onClick={() => oCourseFormik.resetForm()}
                    >
                      {t("RESET")}
                    </LskyButton>
                  </Stack>
                </Row>
              </div>
            </Col>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AdminCourseForm;
