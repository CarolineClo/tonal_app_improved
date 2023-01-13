import Favheart from "./Favheart";
import Notfav from "./Notfav";

const url = "http://localhost:8080/";

function ScheduleListCard(props) {
  let component = <Notfav toggleFav={props.toggleFav} index={props.slot.index} />;
  if (props.slot.fav == true) {
    component = <Favheart toggleFav={props.toggleFav} index={props.slot.index} />;
  }

  let bandImage = props.band && props.band.logo;
  let bandLogo;
  if (props.band && bandImage.includes("https")) {
    bandLogo = bandImage;
  } else {
    bandLogo = url + "logos/" + bandImage;
  }

  return (
    <div className="scheduleListCard">
      <div className={`cancelled_cover${props.slot.cancelled ? "" : "hide"}`}>
        <h2>cancelled</h2>
      </div>
      <h4 className="time">
        {props.slot.start} - {props.slot.end}
      </h4>
      {props.band && (
        <div className="imageCircle">
          <img src={bandLogo} alt="an image of the band playing at this time" />
        </div>
      )}
      <div className="bandInfo">
        <h4 className="name">{props.slot.act}</h4>
        {props.band && <p>{props.slot.stage}</p>}
      </div>
      {props.band && <div> {component}</div>}
    </div>
  );
}

export default ScheduleListCard;
