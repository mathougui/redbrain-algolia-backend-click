"use client";

import React from "react";
import CustomHits from "./CustomHits";
import Panel from "./Panel";

import {
  Pagination,
  RefinementList,
  SearchBox,
  Configure,
} from "react-instantsearch";

const Search = () => {
  return (
    <div className="container">
      <Configure
        clickAnalytics={true}
        analytics={true}
      />
      <div className="search-panel">
        <div className="search-panel__filters">
          <Panel header="brand">
            <RefinementList attribute="brand" />
          </Panel>
        </div>
        <div className="search-panel__results">
          <SearchBox placeholder="" className="searchbox" />
          <CustomHits />
          <div className="pagination">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
