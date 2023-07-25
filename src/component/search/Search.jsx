import React from "react";
import "./search.css";
import moon from "../../assets/icon-moon.svg";
import moonm from "../../assets/icon-moon-m.svg";
import search from "../../assets/icon-search.svg";
import sun from "../../assets/icon-sun.svg";
import sunm from "../../assets/icon-sun-m.svg";

const Search = ({ modeChg, fucMoon, error, handlesearch, getData }) => {
  return (
    <div>
      <div className={modeChg ? "nav navOff" : "nav navOn"}>
        <h3 className={modeChg ? "devfinder" : "devfinder1"}>devfinder</h3>
        <div onClick={fucMoon} className="modetype">
          <p className={modeChg ? "mode" : "mode1"}>
            {modeChg ? "LIGHT" : "DARK"}
          </p>
          <img
            src={modeChg ? sun : moon}
            alt="dark moon icon"
            className={modeChg ? "sun" : "moon"}
          />
          {/* <img src={modeChg ? sunm : moonm} alt='dark moon icon' className={modeChg ? 'sunm' : 'moonm'} /> */}
        </div>
      </div>

      <div className={modeChg ? "search searchOff" : "search searchOn"}>
        <div className="searchArea">
          <img src={search} alt="search-icon" />
          <span>
            <input
              type="text"
              placeholder="Search GitHub username..."
              onChange={handlesearch}
              className={
                modeChg
                  ? "searchText1 searchText1::placeholder"
                  : "searchText searchText::placeholder"
              }
            />
            <span className={error ? "error" : "no-error"}>No results</span>
          </span>
        </div>
        <button onClick={getData}>Search</button>
      </div>
    </div>
  );
};

export default Search;
