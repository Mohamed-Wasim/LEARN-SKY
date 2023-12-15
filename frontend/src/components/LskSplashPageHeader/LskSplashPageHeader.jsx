import LskyButton from '../LskyButton';
import './LskSplashPageHeader.scss';

const LskSplashPageHeader = () => {
  return (
    <>
      <div className="header_container border-bottom ">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="navs_container">
          <ul className="navs">
            <li className="ms-5">
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
                to="/student/MyCourses"
                style={({ isActive }) => ({
                  color: isActive ? "#825CFE" : "black"
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
        {/* <div
          style={{
            width: "2px",
            height: "30%",
            backgroundColor: "rgba(0, 0, 0, 0.20)"
          }}
        ></div> */}

        <div className="icons_container">
          <ul className="navs">
            <li className="nav_icon">
              {/* <NavLink
                to="faverate"
                style={({ isActive }) => ({
                  color: isActive ? "#825CFE" : "black"
                })}
              > */}
                Sign in
              {/* </NavLink> */}
            </li>
            <li>
              {/* <NavLink
                to="messages"
                style={({ isActive }) => ({
                  color: isActive ? "#825CFE" : "black"
                })}
              > */}
                <LskyButton
                style={{
                    borderRadius :'100px'
                  }}
                >
                Contact
                </LskyButton>
              {/* </NavLink> */}
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default LskSplashPageHeader