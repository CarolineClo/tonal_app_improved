import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  const classNameFunc = ({ isActive }) => (isActive ? "active_link" : "not_active_link");
  return (
    <div className="footer">
      <div className="bottomNav">
        {" "}
        <NavLink className={classNameFunc} to="acts">
          Acts
        </NavLink>
        <NavLink className={classNameFunc} to="/">
          Home
        </NavLink>
        <NavLink className={classNameFunc} to="schedule">
          Schedule
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;
