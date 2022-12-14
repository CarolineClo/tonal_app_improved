import Favheart from "./Favheart";
import Notfav from "./Notfav";
import { useState } from "react";
import BandDetails from "./BandDetails";

function ScheduleListCard(props) {
  //const [fav, setFav] = useState(false);

  // function isFav() {
  //   setFav(!fav);
  // }

  let component = <Notfav toggleFav={props.toggleFav} index={props.slot.index} />;
  if (props.slot.fav == true) {
    component = <Favheart toggleFav={props.toggleFav} index={props.slot.index} />;
  }

  return (
    <div>
      <p>
        {props.slot.start} - {props.slot.end}
      </p>
      <h2>{props.slot.act}</h2>
      <p>{props.slot.stage}</p>
      <p>{props.slot.day}</p>
      {props.band && <p>{props.band.bio}</p>}

      {component}
    </div>
  );
}

export default ScheduleListCard;
