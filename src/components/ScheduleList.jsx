import React from "react";
import ScheduleListCard from "./ScheduleListCard";
import ScheduleFilters from "./ScheduleFilters";
import { useState } from "react";

function ScheduleList(props) {
  const sched = props.dayArr;
  const [day, setDay] = useState("mon");
  const [tent, setTent] = useState("");
  const [isFavList, setIsFavList] = useState(false);
  const [hidden, setHidden] = useState(false);

  let filtered = [];
  const bands = props.bands;

  function filterList() {
    if (isFavList == true) {
      filtered = sched.filter((slot) => slot.fav == true);
    } else if (tent) {
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

  return (
    <div className="scheduleList">
      <ScheduleFilters locations={props.locations} selectDay={selectDay} selectTent={selectTent} setDay={day} toggleFavsList={toggleFavsList} hidden={hidden} hideLocation={hideLocation} />

      {filtered.map((slot, i) => {
        // console.log(slot.act, bands[slot.act]);
        const band = bands[slot.act];

        return <ScheduleListCard key={i} slot={slot} sched={sched} toggleFav={props.toggleFav} band={band} />;
      })}
    </div>
  );
}

export default ScheduleList;


