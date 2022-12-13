import Favheart from "./Favheart";
import Notfav from "./Notfav";
import { useState } from "react";

function ScheduleListCard(props) {
  const [fav, setFav] = useState(false);

  // let favArr = [];
  // function getFavArr() {
  //   Object.value(props.slot).map((item) => {
  //     console.log(item);
  //   });
  // }
  // console.table(props.slot);
  // getFavArr();

  function isFav() {
    setFav(!fav);
  }

  let component = <Notfav isFav={isFav} />;
  if (fav == true) {
    component = <Favheart isFav={isFav} />;
  }
  props.getDayArr(fav);

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
