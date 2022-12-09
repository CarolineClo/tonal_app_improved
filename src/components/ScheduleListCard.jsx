import React from "react";

function ScheduleListCard(props) {
  return (
    <div>
      <p>
        {props.slot.start} - {props.slot.end}
      </p>
      <h2>{props.slot.act}</h2>
      <p>{props.slot.stage}</p>
    </div>
  );
}

export default ScheduleListCard;
