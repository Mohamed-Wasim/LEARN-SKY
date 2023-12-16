import "./LskReviewCardComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const LskReviewsCardComponent = (props) => {
  const { img, name, content, review } = props;
  return (
    <div className="flex RvCrdCont">
      <div className="flex RvImgTxtCont">
        <div className="RvImgCont">
          <img src={img} alt="profile" />
        </div>
        <div>
          <h3>{name}</h3>
        </div>
      </div>

      <div className="RvParaCont">
        <p>{content}</p>
      </div>

      <div className="flex RvCrdIcnCont">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        {/* <FontAwesomeIcon icon={`${faRegular} ${faStar}`} /> */}
      </div>
    </div>
  );
};

export default LskReviewsCardComponent;
