import React from "react";
import ScheduleListCard from "../components/ScheduleListCard";
import ScheduleFilters from "../components/ScheduleFilters";
import { useState } from "react";

function ScheduleList(props) {
  const schedule = props.schedule;
  const bands = props.bands;
  const favourites = props.favourites;
  //all states
  const [day, setDay] = useState("mon");
  const [tent, setTent] = useState("");
  const [isFavList, setIsFavList] = useState(false);
  const [hidden, setHidden] = useState(false);
  let contentsOfChosenScheduleList;
  let filtered = [];

  function filterList() {
    if (isFavList == true) {
      filtered = schedule.filter((slot) => favourites.includes(slot.act));
    } else if (tent !== "all tents") {
      filtered = schedule.filter((slot) => slot.stage === tent);
    } else {
      filtered = schedule;
    }
    filtered = filtered.filter((slot) => slot.day === day);
  }
  filterList();

  function selectTent(option) {
    setTent(option);
  }

  function selectDay(option) {
    setDay(option);
  }

  function toggleFavsList(checked) {
    setIsFavList(!checked);
  }

  function hideLocation(checked) {
    setHidden(!checked);
  }

  if (filtered.length < 1) {
    contentsOfChosenScheduleList = (
      <div className="emptyList">
        <p>You have not yet added any bands to your schedule on this day!</p>
      </div>
    );
  } else {
    contentsOfChosenScheduleList = (
      <div className="listOfSlots">
        {filtered.map((slot, i) => {
          const band = bands[slot.act];

          return <ScheduleListCard key={i} slot={slot} toggleFav={props.toggleFav} band={band} favourites={favourites} />;
        })}
      </div>
    );
  }

  return (
    <div className="scheduleList">
      <h1>Schedule</h1>
      <ScheduleFilters locations={props.locations} selectDay={selectDay} selectTent={selectTent} setDay={day} toggleFavsList={toggleFavsList} hidden={hidden} hideLocation={hideLocation} />

      {contentsOfChosenScheduleList}
    </div>
  );
}

export default ScheduleList;
