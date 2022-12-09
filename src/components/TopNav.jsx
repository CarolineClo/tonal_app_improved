import React, { useState } from "react";
import Daybutton from "./Daybutton";
import LocationDrop from "./LocationDrop";
import FavSwitch from "./FavSwitch";

function TopNav(props) {
  const selectDay = props.selectDay;
  const selectTent = props.selectTent;
  const options = Object.keys(props.sched).map((key) => {
    return { value: key, label: key };
  });

  return (
    <div className="topNav">
      <Daybutton day="Mon" label="mon" selectDay={selectDay} />
      <Daybutton day="Tue" label="tue" selectDay={selectDay} />
      <Daybutton day="Wed" label="wed" selectDay={selectDay} />
      <Daybutton day="Thu" label="thu" selectDay={selectDay} />
      <Daybutton day="Fri" label="fri" selectDay={selectDay} />
      <Daybutton day="Sat" label="sat" selectDay={selectDay} />
      <Daybutton day="Sun" label="sun" selectDay={selectDay} />
      <LocationDrop options={options} selectTent={selectTent} />
      <FavSwitch />
    </div>
  );
}

export default TopNav;
