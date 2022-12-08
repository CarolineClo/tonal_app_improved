import Header from "./components/Header";
import Footer from "./components/Footer";
import ActList from "./components/ActList";
import ScheduleList from "./components/ScheduleList";
import Home from "./components/Home";
//import configData from "/config.json";

import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [bands, setbands] = useState([]);
  const [sched, setsched] = useState({});
  const [list, setlist] = useState("Home");
  let component = <Home />;
  if (list === "Schedule") {
    component = <ScheduleList bands={bands} sched={sched} />;
  } else if (list === "Artist") {
    component = <ActList bands={bands} sched={sched} />;
  } else if (list === "Home") {
    component = <Home bands={bands} sched={sched} changeListS={changeListS} changeListA={changeListA} />;
  }
  function changeListS() {
    setlist("Schedule");
  }
  function changeListH() {
    setlist("Home");
  }
  function changeListA() {
    setlist("Artist");
  }

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
    }
    getSchedData();
  }, []);

  useEffect(() => {
    console.log("jamie", bands.length, Object.keys(sched), { ...sched });
    //itterate the bands or something
    // sched.map((band) => {
    //   if (band.some("midgard"))
    //     return sched;
    //   }
    // });
    //for each band look in schedule
    //search for act equals name
  }, [bands, sched]);

  return (
    <div className="App">
      <Header />
      {component}
      <Footer changeListS={changeListS} changeListH={changeListH} changeListA={changeListA} />
    </div>
  );
}

export default App;
