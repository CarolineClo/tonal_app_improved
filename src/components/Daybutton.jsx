import React from "react";

function Daybutton(props) {
  return (
    <div className="dayButton">
      <button>{props.day}</button>
    </div>
  );
}

export default Daybutton;
