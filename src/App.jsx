import Footer from "./components/Footer";
import ActList from "./components/ActList";
import ScheduleList from "./components/ScheduleList";
import Home from "./components/Home";
import Layout from "./components/Layout";
import NoPage from "./components/NoPage";

import * as React from "react";
import { Routes, Route } from "react-router-dom";
//import configData from "/config.json";

import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [bands, setbands] = useState([]);
  const [sched, setsched] = useState({});
  const [dayArr, setDayArr] = useState([]);
  const classNameFunc = ({ isActive }) => (isActive ? "active_link" : "not_active_link ");

  useEffect(() => {
    async function getBandData() {
      // const res = await fetch(configData.SERVER_URL + "bands");
      const res = await fetch("http://localhost:8080/bands");
      const bandData = await res.json();
      setbands(bandData);
    }
    getBandData();
  }, []);

  useEffect(() => {
    async function getSchedData() {
      // const res = await fetch(configData.SERVER_URL + "bands");
      const res = await fetch("http://localhost:8080/schedule");

      const schedData = await res.json();
      setsched(schedData);
      getDayArr(schedData);
    }
    getSchedData();
    function getDayArr(schedData) {
      const nextArr = [];
      let i = 0;
      Object.entries(schedData).map((item) => {
        Object.entries(item[1]).map((weekDays) => {
          // if (weekDays[0] === day) {
          weekDays[1].forEach((el) => {
            el.stage = item[0];
            el.fav = false;
            el.day = weekDays[0];
            el.index = i;
            i++;
            nextArr.push(el);
          });
        });
      });

      setDayArr(nextArr);
    }
  }, []);

  function toggleFav(index) {
    const copy = [...dayArr];
    copy[index].fav = !copy[index].fav;
    setDayArr(copy);
    console.log(index);
  }

  return (
    <div className="app">
      <div className="lines">
        <p>green lines cool cool fancy</p>
        <p>green lines cool cool fancy</p>
      </div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home classNameFunc={classNameFunc} />} />
        <Route path="acts" element={<ActList sched={sched} bands={bands} />} />
        <Route path="schedule" element={<ScheduleList dayArr={dayArr} bands={bands} toggleFav={toggleFav} sched={sched} />} />
        <Route path="footer" element={<Footer />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
