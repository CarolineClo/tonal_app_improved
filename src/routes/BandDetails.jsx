import React from "react";
import { useParams } from "react-router-dom";
import Notfav from "../components/Notfav";
import Favheart from "../components/Favheart";
const url = "http://localhost:8080/";

function BandDetails(props) {
  const { id } = useParams();
  let bands = props.bands;
  let slots = props.slots;

  const thisBand = bands.find((band) => {
    if (band.id == id) {
      return band;
    }
  });

  if (thisBand === undefined) {
    return <div>...</div>;
  }

  const slot = slots[thisBand.name];

  if (slot === undefined) {
    return <div>...</div>;
  }

  const bandMembers = thisBand.members.join(", ");
  let bandImage = thisBand.logo;
  let bandLogo;
  if (bandImage.includes("https")) {
    bandLogo = bandImage;
  } else {
    bandLogo = url + "logos/" + bandImage;
  }

  let component = <Notfav toggleFav={props.toggleFav} name={slot.act} />;
  if (props.favourites.includes(slot.act)) {
    component = <Favheart toggleFav={props.toggleFav} name={slot.act} />;
  }

  return (
    <div className="bandDetails">
      <div className="imageCircle">
        <img src={bandLogo} alt="a picture of the featured band" />
      </div>
      <div className="bandInfo">
        <h2 className="name">{thisBand.name}</h2>
        <div className="bandSlotWrapper">
          <div className="bandSlot">
            <h4 className="day"> {slot.day}</h4>

            <p>
              {slot.start} - {slot.end}
            </p>
            <h4>{slot.stage}</h4>
          </div>
          <div className="myFavButton">{component}</div>
        </div>
        <p>{thisBand.bio}</p>
        <p>
          <strong>Band members:</strong> {bandMembers}
        </p>
        {thisBand.logoCredits && (
          <p>
            <strong>Image credit:</strong> {thisBand.logoCredits}
          </p>
        )}
      </div>
    </div>
  );
}

export default BandDetails;
