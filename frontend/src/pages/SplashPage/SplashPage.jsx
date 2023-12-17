import "./SplashPage.css";
import React, { useState, useEffect } from "react";
import CourseCardComponent from "../../components/CourseCardComponent/CourseCardComponent";
import LskyButton from "../../components/LskyButton";
import LskyModal from "../../components/LskyModal";
import StudentRegister from "../Student/StudentRegister/StudentRegister";
import SplashCardComponent from "../../components/SplashCardComponent/SplashCardComponent";
import LskCatgoryCardComponent from "../../components/LskCatgoryCardComponent/LskCatgoryCardComponent";
import LskReviewsCardComponent from "../../components/LskReviewCardComponent/LskReviewCardComponent";
import SplashPageHeader from "../../components/SplashPageHeader/SplashPageHeader";
import LskFooterCardComponent from "../../components/LskFooterCardComponent/LskFooterCardComponent";
import { SplashPgDtls, spReviwDtls } from "./data.jsx";
import StudentLogin from "../Student/StudentLogin/StudentLogin";
import Pen from "../../assets/img/Pen.png";
import Layers from "../../assets/img/Layers.png";
import chat from "../../assets/img/Chat_alt_3.png";
import chart from "../../assets/img/Chart.png";
import Globe from "../../assets/img/Globe Network.png";

const SplashPage = () => {
  const [isShowModal, setisShowModal] = useState(false); //key for doctype Form modal show
  const [spDtls, setSpDtls] = useState(SplashPgDtls);
  const [rwDtls, setRwDtls] = useState(spReviwDtls);
  const [mdlTyp, setMdlTyp] = useState("");
  const footer = [1, 2, 3];
  const footer1 = [1, 2, 3, 4];

  // const CrsTitl = "Our most popular courses";

  const HighlightTxt = ({ CrsTitl }) => {
    let crsHeadTitl;
    const words = CrsTitl.split(" ");

    if (words.length >= 2) {
      let preWords = words.slice(0, -2).join(" ");
      let lastTwoWords = words.slice(-2).join(" ");
      crsHeadTitl = (
        <p>
          {preWords} <span className="spanClr">{lastTwoWords}</span>
        </p>
      );
    }

    return crsHeadTitl;
  };

  // HelightTxt();

  const ctgryData = [
    { styles: { backgroundColor: "#4F56F8" }, name: "UI & UX" },
    { styles: { backgroundColor: "#EA833F" }, name: "Development" },
    { styles: { backgroundColor: "#F45E52" }, name: "Communication" },
    { styles: { backgroundColor: "#29DA82" }, name: "Testing" },
    { styles: { backgroundColor: "#3D5CFF" }, name: "Devops" },
    { styles: { backgroundColor: "#A170FF" }, name: "Development" },
  ];

  useEffect(() => {}, [SplashPgDtls]);

  return (
    <>
      <SplashPageHeader
        onClick={() => {
          setisShowModal(true);
          setMdlTyp("");
        }}
      />
      {/* <Header/> */}
      <LskyModal
        showMdl={isShowModal}
        mdlHndlr={() => {
          setisShowModal();
        }}
        size="lg"
        header=" "
      >
        <div style={{ marginLeft: "10px" }}>
          {mdlTyp === "Register" ? <StudentRegister /> : <StudentLogin />}
        </div>
      </LskyModal>
      <div className="sp_pg_cont">
        <div className="flex sp_banner">
          <div className="sp_banner_cntnt">
            <h1>
              Teaching in the Internet age means <br />
              we must teach tomorrow’s skills
              <br />
              <span className="spanClr">today</span>
              {/* {spDtls.headTitle} */}
            </h1>
            <p>{spDtls.subTitle}</p>
            <div className="spCont">
              <div className="sp_bnr_cont">
                <div className="sp_bnr_Img">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="banar-img"
                  />
                </div>
                <div className="flex sp_bnr_btn">
                  <LskyButton
                    style={{
                      borderRadius: "100px",
                    }}
                  >
                    Join as Organitation
                  </LskyButton>

                  <LskyButton
                    style={{
                      borderRadius: "100px",
                    }}
                    onClick={() => {
                      setisShowModal(true);
                      setMdlTyp("Register");
                    }}
                  >
                    Join as Student
                  </LskyButton>
                </div>
                <div className="sp_bnr_Img">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="banar-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sp_bdy">
          <div className="spOurCors sp_crs">
            <h1>
              {/* Our Most <span className="spanClr">Popular courses</span> */}
              {HighlightTxt({ CrsTitl: spDtls.crsHeadTitl })}
              {/* {spDtls.crsHeadTitl} */}
            </h1>
            <p className="spOurCrsPar">
              Let’s join our best classes with our famous instructor and
              institutes
            </p>
          </div>
          <div className="flex sp_dby_cntnt">
            {spDtls.showCrs.map((data) => {
              return (
                <SplashCardComponent
                  img={data.crsPrfleImg}
                  title={data.name}
                  content={data.desc}
                  author="Wade Warren"
                  onClick={() => {
                    setisShowModal(true);
                    setMdlTyp("Register");
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className="sp_bdy">
          <div className="flex spCategories">
            <h1>
              {HighlightTxt({ CrsTitl: spDtls.ctgryHeadTitl })}

              {/* Explore <span className="spanClr">Top Categories</span> */}
            </h1>
            <p></p>
          </div>
          <div className="flex sp_dby_cntnt">
            {ctgryData.map((category, idx) => (
              <LskCatgoryCardComponent
                key={idx}
                styles={{
                  backgroundColor:
                    idx === 0
                      ? `linear-gradient(151deg, #4F56F8 13.72%, #1C6ED4 87.9%), url(${Pen})`
                      : idx === 1
                      ? "linear-gradient(173deg, #EA833F 3.08%, #F1B455 95.39%)"
                      : idx === 2
                      ? "linear-gradient(134deg, #F45E52 14.18%, #D04F45 87.33%)"
                      : idx === 3
                      ? "linear-gradient(142deg, #29DA82 11.6%, #15B063 88.49%)"
                      : idx === 4
                      ? "linear-gradient(133deg, #3D5CFF 11.36%, #6985F9 89.87%)"
                      : idx === 5
                      ? "linear-gradient(139deg, #A170FF 15.16%, #774BD9 85.88%)"
                      : "blue",
                }}
                img={
                  idx === 0
                    ? Pen
                    : idx === 1
                    ? Layers
                    : idx === 2
                    ? chat
                    : idx === 3
                    ? chart
                    : idx === 4
                    ? Globe
                    : idx === 5
                    ? Pen
                    : Pen
                }
                text={category.name}
                // img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            ))}
          </div>
        </div>
        <div className="flex sp_bdy_abt">
          <div className="flex sp_abt_img">
            <div className="sp_abt_img_cont">
              <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
          </div>
          <div className="sp_bdy_abt_cont">
            <h1>
              The number one factor in{" "}
              <span className="spanClr">relevance drives out resistance.</span>
            </h1>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <LskyButton
              style={{
                borderRadius: "100px",
              }}
            >
              Learn More
            </LskyButton>
          </div>
        </div>
        <div className="flex SpCrsCont">
          <div className="sp_bdy_cont sp_tst_cont">
            <h1>Testimonials</h1>
            <p>
              Let’s join our best classes with our famous instructor and
              institutes
            </p>
          </div>
          <div className="flex sp_dby_cntnt">
            {/* { footer.map(()=>{
                    return <Card/>
                })} */}
            {rwDtls.rvWDtls.map((data) => {
              return (
                <LskReviewsCardComponent
                  img={data.rvwImg}
                  name={data.rvwNm}
                  content={data.rvwDta}
                />
              );
            })}
          </div>
        </div>
      </div>
      <footer className="sp_ftr_cont">
        <div className="flex sp_ftr_crdcont">
          {footer1.map(() => (
            <LskFooterCardComponent />
          ))}
        </div>
        <div className="sp_ftr_sec_cont">
          <div className="flex sp_ftr_sec">
            <div className="sp_ftr_sec1">
              <h2>Ravvy Soft</h2>
              <p>
                Veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
            <div className="sp_ftr_sec1">
              <h3>Quick Link</h3>
              <div>
                <div>
                  <p>About</p>
                  <p>Blog</p>
                  <p>Course</p>
                  <p>Contact</p>
                </div>
                <div></div>
              </div>
            </div>
            <div className="sp_ftr_sec1">
              <h3>Contact Us</h3>
              <div>
                <div>
                  <p>(209) 555-0104</p>
                  <p>rivera@example.com</p>
                  <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex sp_ftr_ftr">
          <div>
            <p>Copyright 2023 | All Rights Reserved</p>
          </div>
          <div className="flex">
            {/* <FontAwesomeIcon icon={faFacebook} /> */}
            {/* <FontAwesomeIcon icon={faTwitter} /> */}
            <p>Icon</p>
            <p>Icon</p>
            <p>Icon</p>
          </div>
        </div>
      </footer>
      {/* <LksPopupComponent/> */}
    </>
  );
};

export default SplashPage;
