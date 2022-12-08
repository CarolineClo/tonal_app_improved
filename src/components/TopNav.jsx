import React from "react";
import Daybutton from "./Daybutton";
import LocationDrop from "./LocationDrop";
import FavSwitch from "./FavSwitch";
import { useEffect } from "react";
import { useState } from "react";

function TopNav(props) {
  const options = Object.keys(props.sched).map((key) => {
    return { value: key, label: key };
  });

  // const options = [
  //   { value: "mid", label: "Vid" },
  //   { value: "val", label: "Val" },
  //   { value: "other", label: "Oth" },
  // ];

  // const [options, setOptions] = useState([]);

  // useEffect(() => {
  //   setOptions(
  //     Object.keys(props.sched).map((key) => {
  //       return { value: key, label: key };
  //     })
  //   );
  // }, [props.sched]);

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
