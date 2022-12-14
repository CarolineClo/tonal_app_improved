import React from "react";
import ActListCard from "./ActListCard";
import { Link } from "react-router-dom";

function ActList(props) {
  return (
    <div className="actList">
      <h1>This years Acts</h1>
      <div className="listOfActs">
        {props.bands.map((band) => (
          <Link to={`/acts/${band.name}`} key={band.name}>
            <ActListCard key={band.name} data={band} slot={props.slots[band.name]} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ActList;
