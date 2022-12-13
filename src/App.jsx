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
        <Route index element={<Home classNameFunc={classNameFunc} />} />
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
