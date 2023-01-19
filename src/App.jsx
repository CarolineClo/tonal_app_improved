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
  const [schedule, setSchedule] = useState([]);
  const [bandsByName, setBandsByName] = useState({});
  const [slotsByName, setSlotsByName] = useState({});
  const [favourites, setFavourites] = useState([]);
  //function for navigation feedback
  const classNameFunc = ({ isActive }) => (isActive ? "active_link" : "not_active_link ");

  //get saved to local storage "My schedule " on refresh
  useEffect(() => {
    const newFavourites = JSON.parse(localStorage.getItem("favourites"));
    if (newFavourites !== null) {
      console.log(newFavourites);
      setFavourites(newFavourites);
    }
  }, []);

  //Get "band" data and create bandsByName array
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

  //Get "schedule" data, setLocations, flatten the data to a simpler array and set soltsByName
  useEffect(() => {
    const tempArr = [];
    async function getSchedData() {
      const res = await fetch(url + "schedule");
      const schedData = await res.json();
      getLocations(schedData);
      flattenSchedule(schedData);
    }
    getSchedData();
    function getLocations(schedData) {
      const tempArr = ["all tents"];
      Object.keys(schedData).map((tent) => {
        tempArr.push(tent);
      });
      setLocations(tempArr);
    }
    function flattenSchedule(schedData) {
      const newSchedule = [];
      let i = 0;
      Object.entries(schedData).map((item) => {
        Object.entries(item[1]).map((weekDays) => {
          weekDays[1].forEach((el) => {
            el.stage = item[0];
            el.day = weekDays[0];
            i++;
            newSchedule.push(el);
          });
        });
      });
      setSchedule(newSchedule);
      const entries = newSchedule.map((slot) => {
        return [slot.act, slot];
      });
      setSlotsByName(Object.fromEntries(entries));
    }
  }, []);

  //create a new array of "My schedule" bands, and push favourite bands into it
  function toggleFav(name) {
    const newFavourites = [...favourites];
    const index = favourites.indexOf(name);
    if (index === -1) {
      newFavourites.push(name);
    } else {
      newFavourites.splice(index, 1);
    }
    setFavourites(newFavourites);
    localStorage.setItem("favourites", JSON.stringify(newFavourites));
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
        <Route path="/schedule" element={<ScheduleList schedule={schedule} toggleFav={toggleFav} locations={locations} bands={bandsByName} favourites={favourites} />} />
        <Route path="/acts/:id/" element={<BandDetails bands={bands} slots={slotsByName} toggleFav={toggleFav} favourites={favourites} />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/redirect" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
