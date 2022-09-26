import React from "react";
import "./style.css";

import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as QuestionMarkIcon } from "../../assets/icons/question-mark-circle.svg";
import { ReactComponent as NotificationIcon } from "../../assets/icons/IconNotification.svg";
import { ReactComponent as Avatar } from "../../assets/icons/avatar.svg";

const Header = () => {
  return (
    <div className="header-container default-padding">
      <div className="inner-container">
        <MenuIcon className="icon" />
        <SearchIcon className="icon" />
      </div>
      <div className="inner-container">
        <QuestionMarkIcon className="icon" />
        <NotificationIcon className="icon" />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
