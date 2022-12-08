import React from "react";
import ScheduleListCard from "./ScheduleListCard";
import TopNav from "./TopNav";

function ScheduleList(props) {
  return (
    <div>
      <TopNav sched={props.sched} />
      <ScheduleListCard />
      <ScheduleListCard />
      <ScheduleListCard />
    </div>
  );
}

export default ScheduleList;
