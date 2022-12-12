import React from "react";
import { useState } from "react";
import Notfav from "./Notfav";
function ScheduleListCard(props) {
  const [Fav, setFav] = useState(false);
  let component = <Notfav />;
  return (
    <div>
      <p>
        {props.slot.start} - {props.slot.end}
      </p>
      <h2>{props.slot.act}</h2>
      <p>{props.slot.stage}</p>
      {component}
    </div>
  );
}

export default ScheduleListCard;
