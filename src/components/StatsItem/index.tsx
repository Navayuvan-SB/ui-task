import React from "react";
import "./style.css";

import { ReactComponent as MiroImage } from "../../assets/images/Miro.svg";
import { ReactComponent as AvararIcon } from "../../assets/icons/avatar.svg";
import { ReactComponent as VisitsIcon } from "../../assets/icons/visits.svg";
import { ReactComponent as StarFilledIcon } from "../../assets/icons/star-filled.svg";

const StatsItem = () => {
  return (
    <div className="stats-item">
      <MiroImage />
      <div className="inner-container">
        <div className="title">
          <p>o/signup-flow</p>
          <StarFilledIcon />
        </div>
        <div className="inner-stats">
          <div className="inner-stats-item">
            <AvararIcon className="icon" />
            <p className="text">5 min ago</p>
          </div>
          <div className="inner-stats-item">
            <VisitsIcon className="icon" />
            <p className="text filled">22 visits</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsItem;
