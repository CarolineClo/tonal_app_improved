import React from "react";

function Daybutton(props) {
  const selectDay = props.selectDay;
  return (
    <div className="dayButton">
      <button onClick={() => selectDay(props.label)}>{props.day}</button>
    </div>
  );
}

export default Daybutton;
