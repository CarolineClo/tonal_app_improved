import React from "react";
import { Link } from "react-router-dom";
function Home(props) {
  return (
    <div className="home">
      <div className="homeHeading">
        <h2>
          Welcome <br />
          To
        </h2>
        <h1>Tonal Festival</h1>
      </div>
      <div className="boxLinks">
        <Link to="acts">
          <div className="infoBox">
            {" "}
            <h2>Acts</h2>
            <p>See all acts performing at this years Tonal Festival and find your favourites</p>
          </div>
        </Link>
        <Link to="schedule">
          <div className="infoBox">
            <h2>Schedule</h2>
            <p>See the shedule for a whole week of Tonal. Click on the calendar to add an act to your personal schedule. </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
