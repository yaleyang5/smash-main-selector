import React from 'react';
import axios from 'axios';

const Header = ({currChar}) => {
  return (
    <div className={currChar === 0 ? "" : "hidden"}>
      <h1 className="title">
          Super Smash Bros. Main Selector
        </h1>
      <h2 className="description">
        Find the perfect character for you!
      </h2>
    </div>
  );
}

export default Header;