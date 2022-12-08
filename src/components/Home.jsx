import React from "react";

function Home(props) {
  return (
    <div className="home">
      <h1>Welcome to Tonal Festival</h1>
      <div
        className="acts"
        onClick={() => {
          props.changeListA();
        }}
      >
        <h1>Acts</h1>
        <p>see all acts performing at this years Tonal Festival and find your favourites</p>
      </div>
      <div
        className="sched"
        onClick={() => {
          props.changeListS();
        }}
      >
        <h1>Schedule</h1>
        <p>See a the shedule for a whole week of Tonal and create your personal schedule </p>
      </div>
    </div>
  );
}

export default Home;
