import Footer from "./components/Footer";
import NoPage from "./routes/NoPage";
import ActList from "./routes/ActList";
import ScheduleList from "./routes/ScheduleList";
import Home from "./routes/Home";
import BandDetails from "./routes/BandDetails";
import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const url = "http://localhost:8080/";

function App() {
  const [bands, setbands] = useState([]);
  const [locations, setLocations] = useState([]);
  const [dayArr, setDayArr] = useState([]);
  const [bandsByName, setBandsByName] = useState({});
  const [slotsByName, setSlotsByName] = useState({});
  const classNameFunc = ({ isActive }) => (isActive ? "active_link" : "not_active_link ");

  useEffect(() => {
    async function getBandData() {
      const res = await fetch(url + "bands");
      const bandData = await res.json();
      setbands(bandData);
      let i = 1;
      bandData.map((band) => {
        Object.assign(band, { id: i++ });
      });
      const entries = bandData.map((band) => {
        return [band.name, band];
      });
      setBandsByName(Object.fromEntries(entries));
    }

    getBandData();
  }, []);

  useEffect(() => {
    const tempArr = [];
    async function getSchedData() {
      const res = await fetch(url + "schedule");
      const schedData = await res.json();

      // setLocations(Object.keys(schedData));
      getLocations(schedData);
      getDayArr(schedData);
    }
    getSchedData();
    function getLocations(schedData) {
      const tempArr = ["all"];
      Object.keys(schedData).map((tent) => {
        tempArr.push(tent);
      });
      setLocations(tempArr);
    }
    function getDayArr(schedData) {
      const nextArr = [];
      let i = 0;
      Object.entries(schedData).map((item) => {
        Object.entries(item[1]).map((weekDays) => {
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
      const entries = nextArr.map((slot) => {
        return [slot.act, slot];
      });
      setSlotsByName(Object.fromEntries(entries));
    }
  }, []);

  function toggleFav(index) {
    const copy = [...dayArr];
    copy[index].fav = !copy[index].fav;
    setDayArr(copy);
  }

  return (
    <div className="app">
      <div className="main-line-container">
        <div className="line-container">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="line-container">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="line-container">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="line-container">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="line-container">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home classNameFunc={classNameFunc} />} />
        <Route path="/acts" element={<ActList bands={bands} slots={slotsByName} />} />
        <Route path="/schedule" element={<ScheduleList dayArr={dayArr} toggleFav={toggleFav} locations={locations} bands={bandsByName} />} />
        <Route path="/acts/:id/" element={<BandDetails bands={bands} slots={slotsByName} toggleFav={toggleFav} />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/redirect" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
