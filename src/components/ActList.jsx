import React from "react";
import ActListCard from "./ActListCard";
import TopNav from "./TopNav";

function ActList(props) {
  return (
    <div className="Actlist">
      <TopNav />
      {props.bands.map((band) => (
        <ActListCard key={band.name} data={band} />
      ))}
    </div>
  );
}

export default ActList;
