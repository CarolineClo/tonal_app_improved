import React from "react";
import { useState, useEffect } from "react";

function Daybutton(props) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function activate() {
      if (props.label === props.setDay) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }
    activate();
  });

  const selectDay = props.selectDay;
  return (
    <div className="dayButton">
      <button
        className={isActive ? "activeButton " : ""}
        onClick={() => {
          selectDay(props.label);
        }}
      >
        {props.day}
      </button>
    </div>
  );
}

export default Daybutton;
