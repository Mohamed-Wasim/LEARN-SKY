import { useFormik } from "formik";
import { LskyToaster } from "../../../components/LskyToaster";
import LskyFormField from "../../../components/LskyFormField";
import LskyFormFooter from "../../../components/LskyFormFooter";
import { useTranslation } from "react-i18next";
import courseSchema from "./courseSchema";
import LskyPageHeader from "../../../components/LskyPageHeader";
import LskyFormHeader from "../../../components/LskyFormHeader";
import React, { useEffect, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

const AdminCourseForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); //translation
  const [courseId, setCourseId] = useState([]); //coures edit id
  const [oCourseFormData, setCourseFormData] = useState({}); //edit course data

  /**
   * Function for create and Update course deatailes
   * @param {object} oCourseFormik.values
   */
  const handleSubmitCourseForm = async (frmVlus) => {};

  /* Course Formik configutaion */
  const oCourseFormik = useFormik({
    validationSchema: courseSchema,
    enableReinitialize: true,
    onSubmit: handleSubmitCourseForm,
    initialValues: {
      CampID: oCourseFormData?.CampID ?? "",
      CampNa: oCourseFormData?.CampNa ?? "",
      Desc: oCourseFormData?.Desc ?? "",
      AdL1: oCourseFormData?.AdL1 ?? "",
      AdL2: oCourseFormData?.AdL2 ?? "",
      AdL3: oCourseFormData?.AdL3 ?? "",
      Cty: oCourseFormData?.Cty ?? "",
      Mob: oCourseFormData?.Mob ?? "",
      Tel: oCourseFormData?.Tel ?? "",
      Email: oCourseFormData?.Email ?? ""
    }
  });

  /*course Form Buttons configurations*/
  const oFormActions = {
    [courseId ? "update" : "save"]: {},
    [courseId ? "" : "reset"]: { onClick: oCourseFormik.resetForm },
    cancel: { onClick: () => navigate(-1) }
  };
  return (
    <>
      <LskyPageHeader
        heading={t("COURSE")}
        subHeading={courseId ? t("EDIT_COURSE") : t("CREATE_NEW_COURSE")}
      />
      <div className="form-list_container">
        <Form noValidate onSubmit={oCourseFormik.handleSubmit}>
          <div className="from-view_container ">
            <Col sm={12} md={8} lg={8} className="p-0 ps-1">
              <div className="list-form_container">
                <Row className="m-0 mb-5">
                  <Col sm={12} md={6} lg={6} className="p-0 pe-2">
                    <LskyFormField
                      label="CAMPUS_ID"
                      placeholder={t("CAMPUS_ID")}
                      fieldName="CampID"
                      field="input"
                      handleChange={oCourseFormik.handleChange}
                      handleBlur={oCourseFormik.handleBlur}
                      errors={oCourseFormik.errors.CampID}
                      value={oCourseFormik.values.CampID}
                      touched={oCourseFormik.touched.CampID}
                      isRequired={true}
                      disabled={courseId}
                    />
                  </Col>
                  <Col sm={12} md={6} lg={6} className="p-0 ps-2">
                    <LskyFormField
                      label="CAMPUS_NAME"
                      placeholder={t("CAMPUS_NAME")}
                      fieldName="CampNa"
                      field="input"
                      handleChange={oCourseFormik.handleChange}
                      handleBlur={oCourseFormik.handleBlur}
                      errors={oCourseFormik.errors.CampNa}
                      value={oCourseFormik.values.CampNa}
                      touched={oCourseFormik.touched.CampNa}
                      isRequired={true}
                    />
                  </Col>
                </Row>
                <Row className="m-0 mb-5">
                  <Col sm={12} md={6} lg={6} className="p-0 pe-2">
                    <LskyFormField
                      label="DESCRIPTION"
                      placeholder={t("CAMPUS_DESCRIPTION")}
                      fieldName="Desc"
                      field="input"
                      handleChange={oCourseFormik.handleChange}
                      value={oCourseFormik.values.Desc}
                    />
                  </Col>
                  <Col sm={12} md={6} lg={6} className="p-0 ps-2">
                    <LskyFormField
                      label="ADDRESS_LINE_1"
                      placeholder={t("ADDRESS_LINE_1")}
                      fieldName="AdL1"
                      field="input"
                      handleChange={oCourseFormik.handleChange}
                      value={oCourseFormik.values.AdL1}
                    />
                  </Col>
                </Row>
                <Row className="m-0 mb-5">
                  <Col sm={12} md={6} lg={6} className="p-0 pe-2">
                    <LskyFormField
                      label="LINE_2"
                      placeholder={t("ADDRESS_LINE_2")}
                      fieldName="AdL2"
                      field="input"
                      handleChange={oCourseFormik.handleChange}
                      value={oCourseFormik.values.AdL2}
                    />
                  </Col>
                  <Col sm={12} md={6} lg={6} className="p-0 ps-2">
                    <LskyFormField
                      label="LINE_3"
                      placeholder={t("ADDRESS_LINE_3")}
                      fieldName="AdL3"
                      field="input"
                      handleChange={oCourseFormik.handleChange}
                      value={oCourseFormik.values.AdL3}
                    />
                  </Col>
                </Row>
                <Row className="m-0 mb-5">
                  <Col sm={12} md={6} lg={6} className="p-0 pe-2">
                    <LskyFormField
                      label="LINE_4"
                      placeholder={t("ADDRESS_LINE_4")}
                      fieldName="Cty"
                      field="input"
                      handleChange={oCourseFormik.handleChange}
                      value={oCourseFormik.values.Cty}
                    />
                  </Col>
                  <Col sm={12} md={6} lg={6} className="p-0 ps-2">
                    <LskyFormField
                      label="MOBILE_NO"
                      placeholder={t("MOBILE_NUMBER")}
                      fieldName="Mob"
                      field="input"
                      handleChange={oCourseFormik.handleChange}
                      handleBlur={oCourseFormik.handleBlur}
                      value={oCourseFormik.values.Mob}
                      errors={oCourseFormik.errors.Mob}
                      touched={oCourseFormik.touched.Mob}
                    />
                  </Col>
                </Row>
                <Row className="m-0 mb-5">
                  <Col sm={12} md={6} lg={6} className="p-0 pe-2">
                    <LskyFormField
                      label="PHONE_NO"
                      placeholder={t("PHONE_NUMBER")}
                      fieldName="Tel"
                      field="input"
                      handleChange={oCourseFormik.handleChange}
                      handleBlur={oCourseFormik.handleBlur}
                      value={oCourseFormik.values.Tel}
                      errors={oCourseFormik.errors.Tel}
                      touched={oCourseFormik.touched.Tel}
                    />
                  </Col>
                  <Col sm={12} md={6} lg={6} className="p-0 ps-2">
                    <LskyFormField
                      label="EMAIL"
                      placeholder={t("NAME@DOMAIN.COM")}
                      fieldName="Email"
                      field="input"
                      handleChange={oCourseFormik.handleChange}
                      handleBlur={oCourseFormik.handleBlur}
                      errors={oCourseFormik.errors.Email}
                      value={oCourseFormik.values.Email}
                      touched={oCourseFormik.touched.Email}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </div>
          <LskyFormFooter actions={oFormActions} t={t} />
        </Form>
      </div>
    </>
  );
};

export default AdminCourseForm;
