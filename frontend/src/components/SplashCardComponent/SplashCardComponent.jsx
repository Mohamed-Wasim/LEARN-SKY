import "./SplashCardComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faClock,
  faGlobe,
  faUserGroup,
  faCirclePlay,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import LskyButton from "../LskyButton";
import { useHistory } from "react-router-dom";

const SplashCardComponent = (props) => {
  const { img, title, content, author, onClick } = props;
  const { t } = useTranslation(); //translator
  const count = [1, 2, 3, 4, 5];
  // const history = useHistory();
  // Buy the course it redract to sign page
  const buyCourse = () => {
    // history.push("/target-route");
  };
  return (
    <Card
      style={{
        width: "24rem",
        height: "25rem",
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)",
        transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
        cursor: "pointer",
      }}
      className="mycard"
      onClick={onClick}
    >
      {/* <Card.Img variant="top" src="https://img.freepik.com/premium-photo/open-book-with-graduation-hat-light-bulb-education-learning-school-university-idea-concept-3d-illustration_56345-604.jpg?w=826" /> */}
      <Card.Img variant="top" src={img} alt="Course card Image" />
      {/* <LskyButton
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
        {t("ADD_TO_CART")}
      </LskyButton> */}
      <Card.Body className="d-flex flex-column custom-flex-container">
        <div className="IcnCont ">
          <div className="d-flex justify-content-between">
            <div>
              <FontAwesomeIcon icon={faCirclePlay} />
              25x Lesson
            </div>
            <div>
              {count.map((count) => (
                <FontAwesomeIcon icon={faStar} />
              ))}
            </div>
          </div>
          {/* {course?.language.map((lang) => {
                return <span style={{ marginLeft: "3px" }}>{lang},</span>;
              })} */}
        </div>
        <Card.Title className="mt-4">{title}</Card.Title>
        <span>{content}</span>
        <div className="mt-5 pt-3  d-flex justify-content-between SpCardFooter">
          <div className="SpCardFooterImg">
            <img src="https://img.freepik.com/premium-photo/open-book-with-graduation-hat-light-bulb-education-learning-school-university-idea-concept-3d-illustration_56345-604.jpg?w=826" />
          </div>
          <div className="SpCardFooterContent">
            <h6>{author}</h6>
            <p>{title}</p>
          </div>
          <div>
            <LskyButton
              style={{
                backgroundColor: "#24D198",
                borderRadius: "100px",
                border: "none",
              }}
              onClick={buyCourse}
            >
              Design
            </LskyButton>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SplashCardComponent;
