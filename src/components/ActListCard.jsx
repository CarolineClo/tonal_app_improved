import React from "react";

function ActListCard(props) {
  const url = "https://tonal-fest.fly.dev/";
  let bandLogo;

  if (props.data.logo.includes("https")) {
    bandLogo = props.data.logo;
  } else {
    bandLogo = url + "logos/" + props.data.logo;
  }

  return (
    <div className="actListCard">
      {/* <div className="cancelled_cover"> */}
      <div className={`cancelled_cover${props.slot.cancelled ? "" : " hide"}`}>
        <h3>cancelled</h3>
      </div>
      <div className="ActInfo">
        <h3 className="bandName">{props.data.name}</h3>
        <p className="day">{props.slot.day}</p>
        <p>
          {props.slot.start} - {props.slot.end}
        </p>

        <h4>{props.slot.stage}</h4>
      </div>
      <div className="imageCircle">
        <img src={bandLogo} alt="a picture of the bands logo" />
      </div>
    </div>
  );
}

export default ActListCard;
