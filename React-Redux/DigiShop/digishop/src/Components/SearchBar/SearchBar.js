import React, { useState } from "react";
import "./SearchStyle.css";

const SearchBar = ({ searchInput, searchBarHandler }) => {
  return (
    <div className="container">
      <div className="search">
        <div className="row">
          <div className="col-md-10">
            <div>
              <div className="search-2">
                <i className="bx bxs-map"></i>
                <input
                  type="text"
                  placeholder="Search"
                  onChange={searchBarHandler}
                  value={searchInput}
                />
                <button type="button" class="btn btn-primary btn-sm">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
