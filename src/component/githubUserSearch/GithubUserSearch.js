import React, { useEffect, useState } from "react";
import "./GithubUserSearch.css";
import axios from "axios";
import Search from "../search/Search";
import Card from "../card/Card";

const GithubUserSearch = () => {
  const [searchInput, setSearchInput] = useState("octocat");
  const [modeChg, setModechg] = useState(true);
  const [error, setError] = useState(false);

  
  

  //default values to display
  const [obj, setObj] = useState({
    // avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
    avatar_url: "",
    login: "octocat",
    name: "The octocat",
    bio: "This profile has no bio",
    location: "San Fransico",
    public_repos: 8,
    followers: 9810,
    following: 9,
    company: "@github",
    twitter_username: null,
    blog: "https://github.blog",
    created_at: "2011-01-25T18:44:36Z",
  });

  // getting the infomation with api
  const getData = () => {
    const url = `https://api.github.com/users/${searchInput}`;

    axios
      .get(url)
      .then((res) => {
        setObj(Object.assign({}, res.data));

        console.log(obj);
        setError(false);
      })
      .catch((err) => {
        console.log("no result");
        setError(true);
      });
  };

  const handlesearch = (e) => {
    setSearchInput(e.target.value);
  };

  const fucMoon = () => {
   const newMode = modeChg
    ? false
    : true;
    setModechg(newMode)
    localStorage.setItem("mode",newMode)
    
    };
    
  useEffect(() => {
   const  value =  JSON.parse(localStorage.getItem("mode"))
    setModechg(value)
   
     
   }, []);
   
   modeChg
   ? (document.body.className = "dark")
   : (document.body.className = "light");
 

  return (
    <>
      <div className="container">
        <Search
          error={error}
          getData={getData}
          handlesearch={handlesearch}
          fucMoon={fucMoon}
          modeChg={modeChg}
        />
        <Card modeChg={modeChg} obj={obj} />
      </div>
    </>
  );
};

export default GithubUserSearch;
