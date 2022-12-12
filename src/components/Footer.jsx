import React from "react";
import { Link, NavLink } from "react-router-dom";

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
          H
        </NavLink>
        <NavLink className={classNameFunc} to="schedule">
          Schedule
        </NavLink>
        {/* <MyButton changeList={props.changeList} name={"Schedule"} button={"schedule"}></MyButton> */}
      </div>
    </div>
  );
}

export default Footer;

// import React from "react";
// import MyButton from "./MyButton";

// function BottomNav(props) {
//   return (
//     <div>
//       <MyButton name={"Artist"} function={props.changeListA} button={"act"}></MyButton>
//       <MyButton name={"Home"} function={props.changeListH}></MyButton>
//       <MyButton name={"Schedule"} function={props.changeListS}></MyButton>
//       {/* <MyButton changeList={props.changeList} name={"Schedule"} button={"schedule"}></MyButton> */}
//     </div>
//   );
// }

// export default BottomNav;
