import React from "react";
import { Link } from "react-router-dom";
function Home(props) {
  return (
    <div className="home">
      <h1>Welcome to Tonal Festival</h1>
      <Link to="acts">
        <div>
          {" "}
          <h1>Acts</h1>
          <p>see all acts performing at this years Tonal Festival and find your favourites</p>
        </div>
      </Link>
      <Link to="schedule">
        <div>
          <h1>Schedule</h1>
          <p>See a the shedule for a whole week of Tonal and create your personal schedule </p>
        </div>
      </Link>
    </div>
  );
}

export default Home;
