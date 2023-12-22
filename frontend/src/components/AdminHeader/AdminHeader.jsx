import React, { useEffect, useState } from "react";
import "./styles.scss";
import { NavLink } from "react-router-dom";
import Search from "../LskySearch";
import LskyMatIcon from "../LskyMatIcon";
import adminprof from "../../assets/avatars/Avatar6.png";

const AdminHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log("scrollllll", scrollPosition);
      setIsScrolled(scrollPosition > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`admin_flex admin_header_container ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <div style={{ borderRadius: "25px", marginLeft: "2%", width: "60%" }}>
          <Search style={{ borderRadius: "25px" }} />
        </div>
        <div>
          <ul className="admin_flex admin_icon" style={{ marginLeft: "1%" }}>
            <li>
              <LskyMatIcon name="favorite" />
            </li>
            <li>
              <LskyMatIcon name="mail" />
            </li>
            <li>
              <LskyMatIcon name="notifications" />
            </li>
            <li>
              <NavLink to="AddToCard">
                <LskyMatIcon name="shopping_cart" />
              </NavLink>
            </li>
            <li>
              <img src={adminprof} alt="" className="admin-profile-image" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
