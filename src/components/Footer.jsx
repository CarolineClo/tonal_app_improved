import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="bottomNav">
        {" "}
        <Link to="acts">
          <button>Acts</button>
        </Link>
        <Link to="/">
          <button className="homeButton">H</button>
        </Link>
        <Link to="schedule">
          <button>Schedule</button>
        </Link>
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
