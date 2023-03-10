import React, { useState } from "react";
import Daybutton from "./Daybutton";
import LocationDrop from "./LocationDrop";
import FavSwitch from "./FavSwitch";

function ScheduleFilters(props) {
  const selectDay = props.selectDay;
  const selectTent = props.selectTent;
  const options = props.locations;

  return (
    <div className="topNav">
      <div className="dayNav">
        <Daybutton day="Mon" label="mon" selectDay={selectDay} setDay={props.setDay} />
        <Daybutton day="Tue" label="tue" selectDay={selectDay} setDay={props.setDay} />
        <Daybutton day="Wed" label="wed" selectDay={selectDay} setDay={props.setDay} />
        <Daybutton day="Thu" label="thu" selectDay={selectDay} setDay={props.setDay} />
        <Daybutton day="Fri" label="fri" selectDay={selectDay} setDay={props.setDay} />
        <Daybutton day="Sat" label="sat" selectDay={selectDay} setDay={props.setDay} />
        <Daybutton day="Sun" label="sun" selectDay={selectDay} setDay={props.setDay} />
      </div>
      <div className="optionsNav">
        <LocationDrop options={options} selectTent={selectTent} setDay={props.setDay} hidden={props.hidden} />
        <FavSwitch toggleFavsList={props.toggleFavsList} hideLocation={props.hideLocation} />
      </div>
    </div>
  );
}

export default ScheduleFilters;
