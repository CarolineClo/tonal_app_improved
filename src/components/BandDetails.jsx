import React from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

function BandDetails() {
  const { name } = useParams();
  return (
    <div className="bandDetails">
      <h2>this is the band you clicked on</h2>
      <p>this is some information about them</p>
      <p>these is the band members {name}</p>
    </div>
  );
}

export default BandDetails;
