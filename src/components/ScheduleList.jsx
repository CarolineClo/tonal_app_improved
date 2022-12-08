import React from "react";
import ScheduleListCard from "./ScheduleListCard";
import TopNav from "./TopNav";

function ScheduleList() {
  return (
    <div>
      <TopNav />
      <ScheduleListCard />
      <ScheduleListCard />
      <ScheduleListCard />
    </div>
  );
}

export default ScheduleList;
