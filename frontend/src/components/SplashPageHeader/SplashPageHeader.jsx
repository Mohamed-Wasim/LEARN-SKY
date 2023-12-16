import "./styles.scss";
import LskyButton from "../LskyButton";
import img from "../../assets/img/SplashLogo.png";
import LskyLogo from "../LskyLogo/LskyLogo";
import { NavLink, Stack } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const SplashPageHeader = (props) => {
  const { t } = useTranslation(); //translator
  return (
    <>
      <div className="Logo_header_container border-bottom ">
        <div className="Splash_logo">
          <LskyLogo src={img} alt="Logo" />
        </div>
        <div className="splash_header_navs_container">
          <ul className="splash_header_navs">
            <li>
              {/* <NavLink
                to="/student/courses"
                style={({ isActive }) => ({
                  color: isActive ? "#825CFE" : "black"
                })}
              > */}
              Home
              {/* </NavLink> */}
            </li>
            <li className="ms-5">
              {/* <NavLink
                to="courses"
                style={({ isActive }) => ({
                  color: isActive ? "#825CFE" : "black",
                })}
              > */}
              Courses
              {/* </NavLink> */}
            </li>
            <li className="ms-5">
              {/* <NavLink
                to="/student/Practices"
                style={({ isActive }) => ({
                  color: isActive ? "#825CFE" : "black"
                })}
              > */}
              Partners
              {/* </NavLink> */}
            </li>
            <li className="ms-5">
              {/* <NavLink
                to="/student/Test"
                style={({ isActive }) => ({
                  color: isActive ? "#825CFE" : "black"
                })}
              > */}
              Universities
              {/* </NavLink> */}
            </li>
            <li className="ms-5">
              {/* <NavLink
                to="/student/Jobs"
                style={({ isActive }) => ({
                  color: isActive ? "#825CFE" : "black"
                })}
              > */}
              Placements
              {/* </NavLink> */}
            </li>
            <li className="ms-5">
              {/* <NavLink
                to="/student/OurSolution"
                style={({ isActive }) => ({
                  color: isActive ? "#825CFE" : "black"
                })}
              > */}
              Contact
              {/* </NavLink> */}
            </li>
          </ul>
        </div>
        <Stack direction="horizontal" gap={2}>
          <LskyButton
            style={{
              borderRadius: "100px",
            }}
            className="btn-transparent"
            onClick={props.onClick}
          >
            {t("SIGN_IN")}
          </LskyButton>
          <LskyButton
            style={{
              borderRadius: "100px",
            }}
            variant="primary"
          >
            {t("CONTACT_US")}
          </LskyButton>
        </Stack>
      </div>
    </>
  );
};

export default SplashPageHeader;
