import React from "react";
import "./styles.scss";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import image from "../../../assets/img/stuLoginImg.jpg";
import { useFormik } from "formik";
import LskyFormField from "../../../components/LskyFormField";
import SocialLoginButton from "../../../components/SocialLoginButton";
import LskyFormHeader from "../../../components/LskyFormHeader";
import LskyButton from "../../../components/LskyButton";
import { LskyToaster } from "../../../components/LskyToaster";
import { useTranslation } from "react-i18next";
import StudentLoginSchema from "../StudentLogin/studentLoginSchema";
import { onSighnIn } from "../../../services/studentService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setStudent } from "../../../store/slices/studentSlice";

const StudentLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const style = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh"
  };
  const onLogInStudent = async (frmVlus) => {
    try {
      const stuDetailes = await onSighnIn(frmVlus);
      dispatch(setStudent(stuDetailes));
      navigate("/student/home");
    } catch (err) {
      if (err && err.code === "INVALID_LOGIN") {
        LskyToaster("warning", t("INVALID_EMAIL_OR_PASSWORD"), 3000);
      } else {
        LskyToaster(
          "error",
          t("UNKNOWN_ERROR_PLEASE_CONTACT_ADMINISTRATOR"),
          3000
        );
      }
    }
  };
  /* Student LogIn Formik configutaion*/
  const oStudentRegisterFormik = useFormik({
    validationSchema: StudentLoginSchema,
    enableReinitialize: true,
    onSubmit: onLogInStudent,
    initialValues: {
      email: "",
      password: ""
    }
  });

  return (
    <Row>
      <Col sm={12} md={5} lg={5} className=" p-0 ps-1" style={style}>
        <p
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "40px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
            letterSpacing: "0.8px",
            marginTop: "142px",
            marginLeft: "35px"
          }}
        >
          {t("LEARN_SKY_.COM")}
        </p>
        <p
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
            marginTop: "168px",
            marginLeft: "35px"
          }}
        >
          {t("LEARN_SKY_COM_IS_THE_BEST_PLACE_TO_FIND_A_REMOTE_TALENT")}
        </p>
      </Col>
      <Col
        sm={12}
        md={7}
        lg={7}
        className=" p-0 ps-1  d-flex align-items-center flex-column justify-content-center"
      >
        <LskyFormHeader text="SIGHN_IN" t={t} className="mb-5 fs-6 fw-bold" />
        <div className="form-list_container form-input-container">
          <Form noValidate onSubmit={oStudentRegisterFormik.handleSubmit}>
            <div className="from-view_container ">
              <Row className="m-0 mb-5">
                <Col sm={12} md={10} lg={10} className="p-0 pe-2">
                  <LskyFormField
                    label="ENTER_YOUR_EMAIL"
                    placeholder={t("ENTER_YOUR_EMAIL")}
                    fieldName="email"
                    field="input"
                    handleChange={oStudentRegisterFormik.handleChange}
                    handleBlur={oStudentRegisterFormik.handleBlur}
                    errors={oStudentRegisterFormik.errors.email}
                    value={oStudentRegisterFormik.values.email}
                    touched={oStudentRegisterFormik.touched.email}
                    isRequired={true}
                  />
                </Col>
              </Row>
              <Row className="m-0 mb-5">
                <Col sm={12} md={10} lg={10} className="p-0 pe-2">
                  <LskyFormField
                    label="ENTER_YOUR_PASSWORD"
                    placeholder={t("ENTER_YOUR_PASSWORD")}
                    fieldName="password"
                    field="input"
                    handleChange={oStudentRegisterFormik.handleChange}
                    handleBlur={oStudentRegisterFormik.handleBlur}
                    errors={oStudentRegisterFormik.errors.password}
                    value={oStudentRegisterFormik.values.password}
                    touched={oStudentRegisterFormik.touched.password}
                    isRequired={true}
                  />
                </Col>
              </Row>
              <Row className="m-0 mb-5">
                <Col sm={12} md={10} lg={10} className="p-0 pe-2">
                  <span
                    style={{ color: "blue", float: "right", cursor: "pointer" }}
                  >
                    {t("FORGET_PASSWORD?")}
                  </span>
                </Col>
              </Row>
              <Row className="m-0 mb-5 mt-5">
                <Col sm={12} md={10} lg={10} className="p-0 pe-2">
                  <LskyButton
                    variant="primary"
                    type="submit"
                    className="ms-auto w-100"
                  >
                    {t("SIGHN_IN")}
                  </LskyButton>
                </Col>
              </Row>
              <Row className="m-0 mb-5 mt-5 ">
                <Col sm={12} md={10} lg={10} className="p-0 pe-2">
                  <div className="line-container">
                    <hr className="line w-50" />
                    <span className="or-text">{t("OR")}</span>
                    <hr className="line w-50" />
                  </div>
                </Col>
              </Row>
              <Row className="m-0 mb-5 mt-2">
                <Col sm={12} md={10} lg={10} className="p-0 pe-2">
                  <SocialLoginButton
                    provider="google"
                    appId="1088999236302-sq2it6mji1am0hjp1bpd3spltv2l6hl7.apps.googleusercontent.com"
                    onLoginSuccess={() => console.log()}
                    onLoginFailure={() => console.log()}
                    className="social-login_btn"
                  >
                    <svg
                      className="google_svg"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.1284 6.77594H13.625V6.75H8V9.25H11.5322C11.0169 10.7053 9.63219 11.75 8 11.75C5.92906 11.75 4.25 10.0709 4.25 8C4.25 5.92906 5.92906 4.25 8 4.25C8.95594 4.25 9.82563 4.61062 10.4878 5.19969L12.2556 3.43187C11.1394 2.39156 9.64625 1.75 8 1.75C4.54844 1.75 1.75 4.54844 1.75 8C1.75 11.4516 4.54844 14.25 8 14.25C11.4516 14.25 14.25 11.4516 14.25 8C14.25 7.58094 14.2069 7.17188 14.1284 6.77594Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M2.4707 5.09094L4.52414 6.59688C5.07977 5.22125 6.42539 4.25 8.00008 4.25C8.95602 4.25 9.8257 4.61062 10.4879 5.19969L12.2557 3.43187C11.1395 2.39156 9.64633 1.75 8.00008 1.75C5.59945 1.75 3.51758 3.10531 2.4707 5.09094Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M8.0001 14.25C9.61447 14.25 11.0813 13.6322 12.1904 12.6275L10.256 10.9906C9.60746 11.4838 8.81493 11.7506 8.0001 11.75C6.37447 11.75 4.99416 10.7134 4.47416 9.26685L2.43604 10.8372C3.47041 12.8612 5.57104 14.25 8.0001 14.25Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M14.1284 6.77594H13.625V6.75H8V9.25H11.5322C11.2857 9.94263 10.8417 10.5479 10.255 10.9909L10.2559 10.9903L12.1903 12.6272C12.0534 12.7516 14.25 11.125 14.25 8C14.25 7.58094 14.2069 7.17188 14.1284 6.77594Z"
                        fill="#1976D2"
                      />
                    </svg>
                    {t("CONTINUE_WITH_GOOGLE")}
                  </SocialLoginButton>
                </Col>
              </Row>
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  );
};
export default StudentLogin;
