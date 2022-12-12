import Header from "./components/Header";
import Footer from "./components/Footer";
import ActList from "./components/ActList";
import ScheduleList from "./components/ScheduleList";
import Home from "./components/Home";
import Layout from "./components/Layout";
import NoPage from "./components/NoPage";

import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
//import configData from "/config.json";

import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [bands, setbands] = useState([]);
  const [sched, setsched] = useState({});

  let allBands = [];
  let stages = [];
  let favourites = [];

  const bandObj = {
    name: "",
    bio: "",
    members: "",
    stage: "",
    start: "",
    end: "",
    logo: "",
  };

  useEffect(() => {
    async function getBandData() {
      // const res = await fetch(configData.SERVER_URL + "bands");
      const res = await fetch("https://tonal-fest.fly.dev/bands");
      const bandData = await res.json();
      setbands(bandData);
    }
    getBandData();
  }, []);

  useEffect(() => {
    async function getSchedData() {
      // const res = await fetch(configData.SERVER_URL + "bands");
      const res = await fetch("https://tonal-fest.fly.dev/schedule");

      const schedData = await res.json();
      setsched(schedData);
    }
    getSchedData();
  }, []);

  return (
    <div className="app">
      <div className="lines">
        <p>green lines cool cool fancy</p>
        <p>green lines cool cool fancy</p>
      </div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="acts" element={<ActList sched={sched} bands={bands} />} />
        <Route path="schedule" element={<ScheduleList sched={sched} bands={bands} />} />
        <Route path="footer" element={<Footer />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// return (
//   <div className="App">
//     <Header />
//     {component}
//     <Footer changeListS={changeListS} changeListH={changeListH} changeListA={changeListA} />
//   </div>
// );

// useEffect(() => {
//   console.log("jamie", bands.length, Object.keys(sched), { ...sched });
//   //itterate the bands or something
//   // sched.map((band) => {
//   //   if (band.some("midgard"))
//   //     return sched;
//   //   }
//   // });
//   //for each band look in schedule
//   //search for act equals name
// }, [bands, sched]);

// const [list, setlist] = useState("Home");
// let component = <Home />;
// if (list === "Schedule") {
//   component = <ScheduleList bands={bands} sched={sched} />;
// } else if (list === "Artist") {
//   component = <ActList bands={bands} sched={sched} />;
// } else if (list === "Home") {
//   component = <Home bands={bands} sched={sched} changeListS={changeListS} changeListA={changeListA} />;
// }
// function changeListS() {
//   setlist("Schedule");
// }
// function changeListH() {
//   setlist("Home");
// }
// function changeListA() {
//   setlist("Artist");
// }

// const newArr = [];
//   const tentscheds = Object.entries(sched).map((tents) => {
//     console.log(tents);
//     Object.entries(tents[1]).map((day) => {
//       day[1].forEach((el) => {
//         return newArr.push(el);
//       });
//     });
//   });

//   console.log(tentscheds);
