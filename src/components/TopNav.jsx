import React from "react";
import Daybutton from "./Daybutton";
import LocationDrop from "./LocationDrop";
import FavSwitch from "./FavSwitch";

function TopNav(props) {
  const options = Object.keys(props.sched).map((key) => {
    return { value: key, label: key };
  });

  return (
    <div className="topNav">
      <Daybutton day="Mon" />
      <Daybutton day="Tue" />
      <Daybutton day="Wed" />
      <Daybutton day="Thu" />
      <Daybutton day="Fri" />
      <Daybutton day="Sat" />
      <Daybutton day="Sun" />
      <LocationDrop placeHolder="Select..." options={options} />
      <FavSwitch />
    </div>
  );
}

export default TopNav;
