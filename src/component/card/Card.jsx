import React from "react";
import usr from "../../assets/usrImg.png";
import "./card.css";
import Social from "../social/Social";

const Card = ({ modeChg, obj }) => {
  return (
    <div className={modeChg ? "card cardOff" : "card cardOn"}>
      <div className="card-header">
        <div className="bio">
          <div>
            <img src={obj.avatar_url || usr} alt="user profile pic" />
          </div>

          <div className={modeChg ? "userDetails1" : "userDetails"}>
            <div className="details">
              <div className="login">
                <h2>{obj.name || obj.login}</h2>
                <h3>@{obj.login}</h3>
              </div>

              <div className={modeChg ? "joinedDate" : "joinedDate1"}>
                <span className="dates">Joined 25 jan 2011</span>
              </div>
            </div>
            <div>
              <h4>{obj.bio}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className={modeChg ? "bio2" : "bio3"}>
        <h4>{obj.bio}</h4>
      </div>
      <div className="address">
        <div
          className={
            modeChg ? "card-follow card-followOff" : "card-follow card-followOn"
          }
        >
          <div className="follow ">
            <p className={modeChg ? "follower1" : "follower"}>Repos</p>
            <p className={modeChg ? "repoval1" : "repoval"}>
              {obj.public_repos}
            </p>
          </div>
          <div className="follow ">
            <p className={modeChg ? "follower1" : "follower"}>Followers</p>
            <p className={modeChg ? "repoval1" : "repoval"}>{obj.followers}</p>
          </div>
          <div className="follow ">
            <p className={modeChg ? "follower1" : "follower"}>Following</p>
            <p className={modeChg ? "repoval1" : "repoval"}>{obj.following}</p>
          </div>
        </div>
        <Social modeChg={modeChg} obj={obj} />
      </div>
    </div>
  );
};

export default Card;
