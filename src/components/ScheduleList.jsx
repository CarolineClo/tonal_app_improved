import React from "react";
import ScheduleListCard from "./ScheduleListCard";
import TopNav from "./TopNav";
import { useState } from "react";

function ScheduleList(props) {
  const sched = props.sched;
  const [day, setDay] = useState("mon");
  const [tent, setTent] = useState(null);

  const dayArr = [];

  function getDayArr() {
    Object.entries(sched).map((item) => {
      Object.entries(item[1]).map((weekDays) => {
        //console.log(weekDays);
        if (weekDays[0] === day) {
          weekDays[1].forEach((el) => {
            el.stage = item[0];
            dayArr.push(el);
          });
        }
      });
    });
  }
  getDayArr();

  function selectTent(option) {
    setTent(option);
  }

  function selectDay(option) {
    setDay(option);
    // console.log(tent);
  }

  function getTentArray() {
    Object.entries(dayArr).map((item) => {
      if (item[1].stage === tent) {
        // console.log("whoop!");
      }
    });
  }
  getTentArray();

  // const slots = dayArr.map((slot) => {
  //   return slot.start;
  // });
  // console.log(slots);

  return (
    <div>
      <TopNav sched={sched} selectDay={selectDay} selectTent={selectTent} />
      {dayArr.map((slot) => (
        <ScheduleListCard key={slot.entry} slot={slot} />
      ))}
    </div>
  );
}

export default ScheduleList;

// function getDayArr() {
//   Object.entries(sched).map((item) => {
//     Object.entries(item[1]).map((weekDays) => {
//       //console.log(weekDays);

//       if (weekDays[0] === day) {
//         weekDays[1].forEach((el) => {
//           el.stage = item[0];

//           dayArr.push(el);
//           //console.log(dayArr);
//         });
//       }
//     });
//   });
// }
// getDayArr();
