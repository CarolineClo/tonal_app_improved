import React from "react";
import ScheduleListCard from "./ScheduleListCard";
import TopNav from "./TopNav";
import { useState } from "react";

function ScheduleList(props) {
  const sched = props.sched;
  const [day, setDay] = useState("mon");
  const [tent, setTent] = useState("");

  let dayArr = [];
  let filtered = [];

  // function daySelected(){
  //   if (day===day){
  //     className={activeButton}
  //   }
  // }

  function getTentArr() {
    if (tent) {
      filtered = dayArr.filter((slot) => slot.stage === tent);
    } else {
      filtered = dayArr;
    }
  }

  function getDayArr() {
    Object.entries(sched).map((item) => {
      Object.entries(item[1]).map((weekDays) => {
        if (weekDays[0] === day) {
          weekDays[1].forEach((el) => {
            el.stage = item[0];

            dayArr.push(el);
          });
        }
      });
    });
    getTentArr();
  }
  getDayArr();

  //ADD THE DAYS
  // function getDay(){ = Object.entries(sched).map((tents) => {
  //     //console.log(Object.keys(tents[1]));
  //   });}

  function selectTent(option) {
    setTent(option);
  }

  function selectDay(option) {
    setDay(option);
  }

  // function getTentArray() {
  //   Object.entries(dayArr).map((item) => {
  //     if (item[1].stage === tent) {
  //       console.log("change!");
  //     }
  //   });
  // }
  //getTentArray();

  return (
    <div>
      <TopNav sched={sched} selectDay={selectDay} selectTent={selectTent} setDay={day} />
      {filtered.map((slot) => (
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
