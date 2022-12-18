import React from "react";
import Switch from "react-switch";
import { useState } from "react";

function FavSwitch(props) {
  const [checked, setChecked] = useState(false);
  let handleChange = (nextChecked) => {
    setChecked(nextChecked);
    props.toggleFavsList(checked);
    props.hideLocation(checked);
  };

  return (
    <div className="favSwitch">
      <label>
        <span>My Schedule</span>
        <Switch onChange={handleChange} checked={checked} className="react-switch" />
      </label>
      {/* <p>
        The switch is <span>{checked ? "on" : "off"}</span>.
      </p> */}
    </div>
  );
}

export default FavSwitch;
