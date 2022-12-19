import Footer from "./components/Footer";
import ActList from "./components/ActList";
import ScheduleList from "./components/ScheduleList";
import Home from "./components/Home";
import NoPage from "./components/NoPage";
import BandDetails from "./components/BandDetails";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const url = "https://tonal-fest.fly.dev/";

function App() {
  const [bands, setbands] = useState([]);
  const [locations, setLocations] = useState([]);
  const [dayArr, setDayArr] = useState([]);
  const [bandsByName, setBandsByName] = useState({});
  const [slotsByName, setSlotsByName] = useState({});
  const classNameFunc = ({ isActive }) => (isActive ? "active_link" : "not_active_link ");

  useEffect(() => {
    async function getBandData() {
      // const res = await fetch(configData.SERVER_URL + "bands");
      const res = await fetch(url + "bands");
      const bandData = await res.json();
      setbands(bandData);
      let i = 1;
      const bandAndID = bandData.map((band) => {
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
    async function getSchedData() {
      // const res = await fetch(configData.SERVER_URL + "bands");
      const res = await fetch(url + "schedule");

      const schedData = await res.json();

      setLocations(Object.keys(schedData));
      getDayArr(schedData);
    }
    getSchedData();

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
    console.log(index);
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
        {/* <Route path="/" element={<Layout />} /> */}
        <Route path="/" element={<Home classNameFunc={classNameFunc} />} />
        <Route path="/acts" element={<ActList bands={bands} slots={slotsByName} />} />
        <Route path="/schedule" element={<ScheduleList dayArr={dayArr} toggleFav={toggleFav} locations={locations} bands={bandsByName} />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/acts/:id/*" element={<BandDetails bands={bands} slots={slotsByName} toggleFav={toggleFav} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
