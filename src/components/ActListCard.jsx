import React from "react";

function ActListCard(props) {
  return (
    <div>
      <h3>{props.data.name}</h3>
      <h4>time</h4>
      <h4>stage</h4>
    </div>
  );
}

export default ActListCard;