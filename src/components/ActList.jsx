import React from "react";
import ActListCard from "./ActListCard";
import { Link } from "react-router-dom";

function ActList(props) {
  return (
    <div className="Actlist">
      <h1>All bands Playing Tonal Festival!</h1>
      {props.bands.map((band) => (
        <Link to={`/acts/${band.name}`} key={band.name}>
          <ActListCard key={band.name} data={band} slot={props.slots[band.name]} />{" "}
        </Link>
      ))}
    </div>
  );
}

export default ActList;
