import React from "react";
import Daybutton from "./Daybutton";
import LocationDrop from "./LocationDrop";
import FavSwitch from "./FavSwitch";

function TopNav() {
  const options = [
    { value: "mid", label: "Vid" },
    { value: "val", label: "Val" },
    { value: "other", label: "Oth" },
  ];
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
