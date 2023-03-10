import React from "react";
import ActListCard from "../components/ActListCard";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
let i = 1;
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
function ActList(props) {
  const [searchInput, setSearchInput] = useState("");
  function selectSearchInput(input) {
    setSearchInput(input);
  }

  const slotsByName = props.slots;
  let bands = props.bands;
  let searchFilteredBands = bands.filter((band) => band.name.toLowerCase().includes(searchInput));
  let initialBandLetters = searchFilteredBands.map((band) => band.name.toUpperCase().charAt(0));
  bands.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });

  if (bands === undefined) {
    return <div>...</div>;
  }

  if (slotsByName === undefined) {
    return <div>...</div>;
  } else
    return (
      <div className="actList">
        <h1> Acts</h1>
        <SearchBar selectSearchInput={selectSearchInput} />
        {alphabet
          .filter((letter) => initialBandLetters.includes(letter))
          .map((letter) => (
            <div className="listOfActs" key={i++}>
              <h3 className="letter">{letter}</h3>
              {searchFilteredBands.map((band) => {
                if (band.name.charAt(0) === letter)
                  return (
                    <div key={i++}>
                      <Link to={`/acts/${band.id}`} key={band.id}>
                        <ActListCard data={band} slot={slotsByName[band.name]} key={band.id} favourites={props.favourites} />
                      </Link>
                    </div>
                  );
              })}
            </div>
          ))}
      </div>
    );
}

export default ActList;
