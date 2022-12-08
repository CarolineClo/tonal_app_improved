import React from "react";
import Switch from "react-switch";
import { useState } from "react";

function FavSwitch() {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  return (
    <div className="favSwitch">
      <label>
        <span>Favourites</span>
        <Switch onChange={handleChange} checked={checked} className="react-switch" />
      </label>
      {/* <p>
        The switch is <span>{checked ? "on" : "off"}</span>.
      </p> */}
    </div>
  );
}

export default FavSwitch;
