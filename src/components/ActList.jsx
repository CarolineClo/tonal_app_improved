import React from "react";
import ActListCard from "./ActListCard";
import { Link } from "react-router-dom";

function ActList(props) {
  const slots = props.slots;
  let bands = props.bands;
  bands.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="actList">
      <h1>This years Acts</h1>
      <div className="listOfActs">
        {alphabet.map((letter) => {
          return (
            <div>
              <h1>{letter}</h1>
              {bands.map((band) => {
                if (band.name.charAt(0) === letter)
                  return (
                    <div>
                      <Link to={`/acts/${band.name}`} key={band.name}>
                        <ActListCard key={band.name} data={band} slot={slots[band.name]} />{" "}
                      </Link>
                    </div>
                  );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ActList;
