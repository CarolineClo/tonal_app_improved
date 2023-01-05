import React from "react";
import ScheduleListCard from "./ScheduleListCard";
import ScheduleFilters from "./ScheduleFilters";
import { useState } from "react";

function ScheduleList(props) {
  const sched = props.dayArr;
  const bands = props.bands;
  //all states
  const [day, setDay] = useState("mon");
  const [tent, setTent] = useState("");
  const [isFavList, setIsFavList] = useState(false);
  const [hidden, setHidden] = useState(false);
  let contentsOfChosenScheduleList;
  let filtered = [];

  function filterList() {
    if (isFavList == true) {
      filtered = sched.filter((slot) => slot.fav == true);
    } else if (tent !== "all") {
      filtered = sched.filter((slot) => slot.stage === tent);
    } else {
      filtered = sched;
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

          return <ScheduleListCard key={i} slot={slot} sched={sched} toggleFav={props.toggleFav} band={band} />;
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
