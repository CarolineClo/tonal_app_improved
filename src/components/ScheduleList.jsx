import React from "react";
import ScheduleListCard from "./ScheduleListCard";
import TopNav from "./TopNav";
import { useState } from "react";

function ScheduleList(props) {
  const sched = props.dayArr;
  const [day, setDay] = useState("mon");
  const [tent, setTent] = useState("");
  const [isFavList, setIsFavList] = useState(false);
  const [hidden, setHidden] = useState(false);

  let filtered = [];

  function getTentArr() {
    if (isFavList == true) {
      filtered = sched.filter((slot) => slot.fav == true);
    } else if (tent) {
      filtered = sched.filter((slot) => slot.stage === tent);
    } else {
      filtered = sched;
    }
    filtered = filtered.filter((slot) => slot.day === day);
  }
  getTentArr();

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
      <TopNav sched={props.sched} selectDay={selectDay} selectTent={selectTent} setDay={day} toggleFavsList={toggleFavsList} hidden={hidden} hideLocation={hideLocation} />
      {filtered.map((slot) => (
        <ScheduleListCard key={slot.entry} slot={slot} sched={sched} toggleFav={props.toggleFav} />
      ))}
    </div>
  );
}

export default ScheduleList;
