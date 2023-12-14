import "./CourseCardComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faClock,
  faGlobe,
  faUserGroup
} from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import LskyButton from "../LskyButton";
const CourseCardComponent = ({ course, addToCart, aCartCrs }) => {
  console.log("aCartCrs", aCartCrs);
  const { t } = useTranslation(); //translator
  return (
    <Card
      style={{
        width: "25rem",
        height: "25rem",
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)",
        transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
        cursor: "pointer"
      }}
      className="mycard"
    >
      <Card.Img variant="top" src={course?.crsPrfleImg} />
      {aCartCrs?.includes(course?._id) ? (
        <LskyButton
          variant="secondary"
          style={{
            position: "absolute",
            top: "48%",
            left: "23%",
            transform: "translateX(-50%)"
          }}
          onClick={() => {
            console.log("course?._idcourse?._id", course);
            addToCart(course?._id);
          }}
        >
          {t("ADDED")}
        </LskyButton>
      ) : (
        <LskyButton
          variant="secondary"
          style={{
            position: "absolute",
            top: "48%",
            left: "23%",
            transform: "translateX(-50%)"
          }}
        >
          {t("ADD_TO_CART")}
        </LskyButton>
      )}

      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title className="mt-4">{course?.name}</Card.Title>
        <span>{course?.desc}</span>
        <span>{`$ ${course?.actulFee} - $ ${course?.discFee}`}</span>
        <span>
          <div className="flex">
            <div className="IcnCont">
              <FontAwesomeIcon icon={faClock} />
              <span style={{ marginLeft: "3px" }}>{course?.duration}</span>
            </div>

            <div className="IcnCont ">
              <FontAwesomeIcon icon={faGlobe} />
              {course?.language.map((lang, index) => {
                return (
                  <span key={index} style={{ marginLeft: "3px" }}>
                    {lang},
                  </span>
                );
              })}
            </div>

            <div className="IcnCont">
              <FontAwesomeIcon icon={faUserGroup} />
              <span style={{ marginLeft: "3px" }}>{course?.learnCnt}</span>
            </div>
          </div>
        </span>
      </Card.Body>
    </Card>
  );
};

export default CourseCardComponent;
