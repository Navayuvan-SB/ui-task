import React from "react";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { ReactComponent as ChevronIcon } from "../../assets/icons/IconChevron.svg";

import "./style.css";

const Title = () => {
  return (
    <div className="title default-padding">
      <h3 className="title-text">Shortcuts</h3>
      <div className="combined-button">
        <div className="combined-button-item">
          <PlusIcon />
        </div>
        <div className="combined-button-item">
          <ChevronIcon />
        </div>
      </div>
    </div>
  );
};

export default Title;
