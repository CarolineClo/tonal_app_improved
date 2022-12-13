import React from "react";
import MyButton from "./MyButton";

function BottomNav(props) {
  return (
    <div>
      <MyButton name={"Artist"} function={props.changeListA}></MyButton>
      <MyButton name={"Home"} function={props.changeListH}></MyButton>
      <MyButton name={"Schedule"} function={props.changeListS}></MyButton>
      {/* <MyButton changeList={props.changeList} name={"Schedule"} button={"schedule"}></MyButton> */}
    </div>
  );
}

export default BottomNav;
