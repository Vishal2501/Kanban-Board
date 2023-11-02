import React from "react";

const Header = () => {
  return (
    <div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Display
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div>
            <span>Grouping</span>
            <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Display
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div class="dropdown-item">
            <span>Grouping</span>
          </div>
          <div class="dropdown-item">
            <span>Ordering</span>
          </div>
        </div>
      </div>
          </div>
          <div class="dropdown-item">
            <span>Ordering</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
