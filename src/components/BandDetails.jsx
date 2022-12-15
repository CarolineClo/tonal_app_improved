import React from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

function BandDetails(props) {
  const { id } = useParams();
  let bands = props.bands;
  let slots = props.slots;

  console.log(bands);

  const thisBand = bands.find((band) => {
    if (band.id == id) {
      return band;
    }
  });

  const bandMembers = thisBand.members.join(", ");
  let bandImage = thisBand.logo;
  let bandLogo;
  if (bandImage.includes("https")) {
    bandLogo = bandImage;
  } else {
    bandLogo = "";
  }
  console.log(id);
  console.log(thisBand);
  return (
    <div className="bandDetails">
      <img src={bandLogo} alt="" />
      <p>{id}</p>
      <h2>{thisBand.name}</h2>
      <p>{thisBand.bio}</p>
      <p>Band members: {bandMembers}</p>
    </div>
  );
}

export default BandDetails;

// function getSlot() {
//     Object.keys(slots).map((slot) => {
//       if ({ name } === slot.name) {
//         console.log(slot);
//       }
//     });
//   }
//   getSlot();

//const thisProduct = productsData.find((prod) => prod.id === productId);
