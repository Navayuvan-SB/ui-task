import React from "react";
import "./style.css";

import { ReactComponent as ChevronDown } from "../../assets/icons/IconChevronBlack.svg";
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import { ReactComponent as SortIcon } from "../../assets/icons/sort.svg";
import { ReactComponent as LinkIcon } from "../../assets/icons/link.svg";
import { ReactComponent as FolderIcon } from "../../assets/icons/folder.svg";
import { ReactComponent as SnippetIcon } from "../../assets/icons/Snippet.svg";

const Filters = () => {
  return (
    <div className="filter-container default-padding">
      <div className="outlined-container filter">
        <p>All</p>
        <ChevronDown />
      </div>
      <div className="right-container">
        <FilterIcon />
        <SortIcon />
        <div className="outlined-container">
          <LinkIcon className="icon" />
          <FolderIcon className="icon" />
          <SnippetIcon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Filters;
